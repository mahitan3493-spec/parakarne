"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const UPDATE_INTERVAL_MS = 15 * 60 * 1000;

export default function PwaRegister() {
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
  const [updateReady, setUpdateReady] = useState(false);
  const [updating, setUpdating] = useState(false);

  const checkForUpdate = useCallback(async () => {
    try {
      await registrationRef.current?.update();
    } catch {
      // Güncelleme kontrolü bağlantı yokken sessizce başarısız olabilir.
    }
  }, []);

  const applyUpdate = useCallback(async () => {
    const registration = registrationRef.current;
    if (!registration) return;

    setUpdating(true);

    const waitingWorker = registration.waiting;
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
      return;
    }

    await checkForUpdate();

    // Güncelleme kontrolünden sonra registration nesnesini ref üzerinden
    // yeniden oku. Bu hem gerçek waiting worker'ı yakalar hem de TypeScript'in
    // önceki null daraltmasına takılmasını önler.
    const refreshedRegistration = registrationRef.current;
    const refreshedWaitingWorker = refreshedRegistration?.waiting;

    if (refreshedWaitingWorker) {
      refreshedWaitingWorker.postMessage({ type: "SKIP_WAITING" });
      return;
    }

    setUpdating(false);
  }, [checkForUpdate]);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") {
      return;
    }

    let reloading = false;
    let updateTimer: number | undefined;

    const markWaitingWorker = (registration: ServiceWorkerRegistration) => {
      if (registration.waiting && navigator.serviceWorker.controller) {
        setUpdateReady(true);
      }
    };

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });

        registrationRef.current = registration;
        markWaitingWorker(registration);
        await registration.update().catch(() => undefined);

        registration.addEventListener("updatefound", () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener("statechange", () => {
            if (
              installingWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              setUpdateReady(true);
            }
          });
        });
      } catch (error) {
        console.warn("ParaKarne PWA kaydı yapılamadı.", error);
      }
    };

    const handleControllerChange = () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void checkForUpdate();
      }
    };

    const handleManualCheck = () => {
      void checkForUpdate();
    };

    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleManualCheck);
    window.addEventListener("parakarne:check-update", handleManualCheck);

    if (document.readyState === "complete") {
      void registerServiceWorker();
    } else {
      window.addEventListener("load", registerServiceWorker, { once: true });
    }

    updateTimer = window.setInterval(() => {
      void checkForUpdate();
    }, UPDATE_INTERVAL_MS);

    return () => {
      window.removeEventListener("load", registerServiceWorker);
      window.removeEventListener("focus", handleManualCheck);
      window.removeEventListener("parakarne:check-update", handleManualCheck);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
      if (updateTimer) window.clearInterval(updateTimer);
    };
  }, [checkForUpdate]);

  if (!updateReady) return null;

  return (
    <div className="pwa-update-toast" role="status" aria-live="polite">
      <div className="pwa-update-copy">
        <strong>Yeni ParaKarne sürümü hazır</strong>
        <span>Güncelleme birkaç saniye içinde uygulanır.</span>
      </div>
      <button
        type="button"
        className="pwa-update-button"
        onClick={() => void applyUpdate()}
        disabled={updating}
      >
        {updating ? "Güncelleniyor…" : "Şimdi Güncelle"}
      </button>
    </div>
  );
}
