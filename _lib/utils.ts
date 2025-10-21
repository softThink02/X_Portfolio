import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type StorageAction = "get" | "set" | "remove" | "clear";

interface StorageOptions {
  key?: string;
  value?: any;
  ttl?: number;
}

export const LocalStorage = (
  action: StorageAction,
  options?: StorageOptions
) => {
  if (typeof window === "undefined") return null;

  const { key, value, ttl } = options || {};

  try {
    switch (action) {
      case "set":
        if (!key) throw new Error("Missing key for storage set");
        const payload = {
          value,
          expiry: ttl ? Date.now() + ttl : null,
        };
        localStorage.setItem(key, JSON.stringify(payload));
        break;

      case "get":
        if (!key) throw new Error("Missing key for storage get");
        const raw = localStorage.getItem(key);
        if (!raw) return null;

        const parsed = JSON.parse(raw);
        if (parsed.expiry && Date.now() > parsed.expiry) {
          localStorage.removeItem(key);
          return null;
        }
        return parsed.value;

      case "remove":
        if (!key) return;
        localStorage.removeItem(key);
        break;

      case "clear":
        localStorage.clear();
        break;

      default:
        return;
    }
  } catch (err) {
    return null;
  }
};
