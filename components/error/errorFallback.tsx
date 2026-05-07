"use client";

import { useEffect, useRef, useState } from "react";
import type { FallbackProps } from "react-error-boundary";
import * as Sentry from "@sentry/nextjs";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const [attempt, setAttempt] = useState(0);
  const maxRetries = 3;

  const hasReported = useRef(false);

  useEffect(() => {
    if (hasReported.current) return;
    hasReported.current = true;

    Sentry.withScope((scope) => {
      scope.setTag("component", "ErrorFallback");
      scope.setTag("retry_attempt", String(attempt));

      scope.setContext("error_details", {
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      });

      Sentry.captureException(error);
    });
  }, [error]);

  const handleRetry = () => {
    if (attempt >= maxRetries) return;

    setAttempt((prev) => prev + 1);

    resetErrorBoundary();
  };

  useEffect(() => {
    if (attempt === 0 || attempt >= maxRetries) return;

    const timeout = setTimeout(
      () => {
        resetErrorBoundary();
      },
      Math.min(1000 * attempt, 3000),
    );

    return () => clearTimeout(timeout);
  }, [attempt, resetErrorBoundary]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 shadow-2xl dark:border-red-900 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-red-600">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {error instanceof Error
            ? error.message
            : "Unexpected application error"}
        </p>

        <p className="mt-3 text-xs text-zinc-500">
          Attempt {attempt} / {maxRetries}
        </p>

        <div className="mt-5 flex gap-3">
          <button
            onClick={handleRetry}
            disabled={attempt >= maxRetries}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50 transition"
          >
            Retry
          </button>

          <button
            onClick={() => window.location.reload()}
            className="rounded-lg border px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}
