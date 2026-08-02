"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function useModalAccessibility<T extends HTMLElement>(
  open: boolean,
  onClose: () => void,
): RefObject<T | null> {
  const modalRef = useRef<T | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;

    lastFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const modal = modalRef.current;
    const initialFocusable = modal
      ? Array.from(modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      : [];
    const firstFocusable: HTMLElement | null = initialFocusable[0] ?? modal;
    const focusTimer = window.setTimeout(() => firstFocusable?.focus(), 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      const currentModal = modalRef.current;
      if (event.key !== "Tab" || !currentModal) return;

      const items: HTMLElement[] = Array.from(
        currentModal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((item: HTMLElement) => !item.hasAttribute("disabled"));

      if (items.length === 0) {
        event.preventDefault();
        currentModal.focus();
        return;
      }

      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && active === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocusedRef.current?.focus();
    };
  }, [open]);

  return modalRef;
}
