"use server";

import { cookies } from "next/headers";

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiRequestOptions<TBody = unknown> {
  method: RequestMethod;
  apiPath: string;
  api: string;
  data?: TBody;
  headers?: Record<string, string>;
  haveImage?: boolean;
  signal?: AbortSignal;
}

export class ApiError extends Error {
  payload?: any;
  status?: number;
  constructor(message: string, payload?: any, status?: number) {
    super(message);
    this.payload = payload;
    this.status = status;
  }
}

function getAccessToken(): string | undefined {
  return cookies().get("accessToken")?.value;
}

function setTokens(
  accessToken: string,
  refreshToken: string,
  maxAge = 60 * 60 * 24,
) {
  cookies().set("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  cookies().set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export function clearTokens() {
  cookies().set("accessToken", "", { httpOnly: true, maxAge: 0, path: "/" });
  cookies().set("refreshToken", "", { httpOnly: true, maxAge: 0, path: "/" });
}

async function refreshAccessToken(API_BASE: string) {
  const refreshToken = cookies().get("refreshToken")?.value;

  if (!refreshToken) {
    clearTokens();
    throw new ApiError("Session expired", null, 401);
  }

  const res = await fetch(`${API_BASE}/api/auth/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) {
    clearTokens();
    const text = await res.text();
    throw new ApiError("Failed to refresh token: " + text, null, res.status);
  }

  const json = await res.json();
  setTokens(json.accessToken, json.refreshToken, json.maxAge || 60 * 60 * 24);
  return json.accessToken;
}

export async function apiRequest<T = unknown, U = unknown>(
  options: ApiRequestOptions<U>,
): Promise<{ promise: Promise<T> }> {
  let token = getAccessToken();

  const makeRequest = async () => {
    const headers: Record<string, string> = {
      ...(options.headers || {}),
      "Content-Type": options.haveImage
        ? "multipart/form-data"
        : "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const res = await fetch(`${options.api}${options.apiPath}`, {
      method: options.method,
      headers,
      body: options.haveImage
        ? (options.data as BodyInit)
        : options.data
          ? JSON.stringify(options.data)
          : undefined,
      signal: options.signal,
    });

    if (res.status === 401) {
      token = await refreshAccessToken(options.api);
      return makeRequest();
    }

    if (!res.ok) {
      const text = await res.text();
      throw new ApiError(`Request failed: ${text}`, text, res.status);
    }

    const json = await res.json();
    return json as T;
  };

  return { promise: makeRequest() };
}
