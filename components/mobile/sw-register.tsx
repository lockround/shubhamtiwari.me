"use client";

import { useEffect } from "react";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const isSecure =
      window.location.protocol === "https:" ||
      ["localhost", "127.0.0.1"].includes(window.location.hostname);
    if (!isSecure) return;

    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Registration failure is non-fatal: the app still works online.
    });
  }, []);

  return null;
}