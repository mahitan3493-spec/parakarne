"use client";

import { useEffect } from "react";

const UPDATE_INTERVAL_MS = 15 * 60 * 1000;

export default function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") {
      return;
    }

    let registration: ServiceWorkerRegistration | null = null;
    let reloading = false;
    const hadControllerAtStart = Boolean(navigator.serviceWorker.controller);

    const applyWaitingWorker = () => {
      registration?.waiting?.postMessage({ type: "SKIP_WAITING" });
    };

    const checkForUpdate = () => {
      registration?.update().catch(() => undefined);
    };

    const registerServiceWorker = async () => {
      try {
        registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });

        applyWaitingWorker();
        checkForUpdate();

        registration.addEventListener("updatefound", () => {
          const installingWorker = registration?.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener("statechange", () => {
            if (installingWorker.state === "installed") {
              applyWaitingWorker();
            }
          });
        });
      } catch (error) {
        console.warn("ParaKarne PWA kaydı yapılamadı.", error);
      }
    };

    const handleControllerChange = () => {
      if (!hadControllerAtStart || reloading) return;
      reloading = true;
      window.location.reload();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkForUpdate();
      }
    };

    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", checkForUpdate);

    if (document.readyState === "complete") {
      void registerServiceWorker();
    } else {
      window.addEventListener("load", registerServiceWorker, { once: true });
    }

    const updateTimer = window.setInterval(checkForUpdate, UPDATE_INTERVAL_MS);

    return () => {
      window.removeEventListener("load", registerServiceWorker);
      window.removeEventListener("focus", checkForUpdate);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
      window.clearInterval(updateTimer);
    };
  }, []);

  return null;
}
