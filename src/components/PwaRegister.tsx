"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const UPDATE_INTERVAL_MS = 15 * 60 * 1000;
const STATUS_HIDE_MS = 3500;

type StatusNotice = {
  title: string;
  detail: string;
} | null;

export default function PwaRegister() {
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
  const statusTimerRef = useRef<number | undefined>(undefined);
  const [updateReady, setUpdateReady] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [checking, setChecking] = useState(false);
  const [statusNotice, setStatusNotice] = useState<StatusNotice>(null);

  const showTemporaryStatus = useCallback((title: string, detail: string) => {
    if (statusTimerRef.current) window.clearTimeout(statusTimerRef.current);
    setStatusNotice({ title, detail });
    statusTimerRef.current = window.setTimeout(() => {
      setStatusNotice(null);
      statusTimerRef.current = undefined;
    }, STATUS_HIDE_MS);
  }, []);

  const markWaitingWorker = useCallback((registration: ServiceWorkerRegistration) => {
    if (registration.waiting && navigator.serviceWorker.controller) {
      setUpdateReady(true);
      setStatusNotice(null);
      return true;
    }
    return false;
  }, []);

  const checkForUpdate = useCallback(
    async (manual = false) => {
      if (!("serviceWorker" in navigator)) {
        if (manual) showTemporaryStatus("Güncelleme desteklenmiyor", "Bu tarayıcı service worker kullanamıyor.");
        return false;
      }

      if (manual) {
        setChecking(true);
        setStatusNotice({
          title: "Güncelleme kontrol ediliyor",
          detail: "ParaKarne'nin en yeni sürümü aranıyor…",
        });
      }

      try {
        const registration =
          registrationRef.current ??
          (await navigator.serviceWorker.getRegistration("/"));

        if (!registration) {
          if (manual) {
            showTemporaryStatus(
              "Güncelleme sistemi hazırlanıyor",
              "Uygulamayı bir kez kapatıp yeniden açtıktan sonra tekrar kontrol et.",
            );
          }
          return false;
        }

        registrationRef.current = registration;
        if (markWaitingWorker(registration)) return true;

        await registration.update();

        if (markWaitingWorker(registration)) return true;

        const installingWorker = registration.installing;
        if (installingWorker) {
          await new Promise<void>((resolve) => {
            const timeout = window.setTimeout(resolve, 2200);
            const handleStateChange = () => {
              if (["installed", "activated", "redundant"].includes(installingWorker.state)) {
                window.clearTimeout(timeout);
                installingWorker.removeEventListener("statechange", handleStateChange);
                resolve();
              }
            };
            installingWorker.addEventListener("statechange", handleStateChange);
          });
        } else if (manual) {
          await new Promise((resolve) => window.setTimeout(resolve, 700));
        }

        if (markWaitingWorker(registration)) return true;

        if (manual) {
          showTemporaryStatus(
            "Uygulama güncel",
            "ParaKarne'nin en yeni web sürümünü kullanıyorsun (V24).",
          );
        }
        return false;
      } catch {
        if (manual) {
          showTemporaryStatus(
            "Kontrol tamamlanamadı",
            "İnternet bağlantını kontrol edip tekrar dene.",
          );
        }
        return false;
      } finally {
        if (manual) setChecking(false);
      }
    },
    [markWaitingWorker, showTemporaryStatus],
  );

  const applyUpdate = useCallback(async () => {
    const registration = registrationRef.current;
    if (!registration) return;

    setUpdating(true);

    const waitingWorker = registration.waiting;
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
      return;
    }

    await checkForUpdate(true);

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

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });

        registrationRef.current = registration;
        markWaitingWorker(registration);
        await registration.update().catch(() => undefined);
        markWaitingWorker(registration);

        registration.addEventListener("updatefound", () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener("statechange", () => {
            if (
              installingWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              setUpdateReady(true);
              setStatusNotice(null);
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
        void checkForUpdate(false);
      }
    };

    const handleAutomaticCheck = () => {
      void checkForUpdate(false);
    };

    const handleManualCheck = () => {
      void checkForUpdate(true);
    };

    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleAutomaticCheck);
    window.addEventListener("parakarne:check-update", handleManualCheck);

    if (document.readyState === "complete") {
      void registerServiceWorker();
    } else {
      window.addEventListener("load", registerServiceWorker, { once: true });
    }

    updateTimer = window.setInterval(() => {
      void checkForUpdate(false);
    }, UPDATE_INTERVAL_MS);

    return () => {
      window.removeEventListener("load", registerServiceWorker);
      window.removeEventListener("focus", handleAutomaticCheck);
      window.removeEventListener("parakarne:check-update", handleManualCheck);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
      if (updateTimer) window.clearInterval(updateTimer);
      if (statusTimerRef.current) window.clearTimeout(statusTimerRef.current);
    };
  }, [checkForUpdate, markWaitingWorker]);

  if (!updateReady && !statusNotice && !checking) return null;

  if (!updateReady) {
    return (
      <div className="pwa-update-toast pwa-status-toast" role="status" aria-live="polite">
        <div className="pwa-update-copy">
          <strong>{statusNotice?.title ?? "Güncelleme kontrol ediliyor"}</strong>
          <span>{statusNotice?.detail ?? "Lütfen birkaç saniye bekle…"}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="pwa-update-toast" role="status" aria-live="polite">
      <div className="pwa-update-copy">
        <strong>Yeni ParaKarne sürümü hazır</strong>
        <span>Yeni web dosyalarını yüklemek için butona dokun.</span>
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
