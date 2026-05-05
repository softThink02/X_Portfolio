"use client";

import Error from "next/error";
import { useEffect } from "react";

import * as Sentry from "@sentry/nextjs";

export default function GlobalError({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  Sentry.captureException(error);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
