"use client";

import { useId, useState, type ReactNode } from "react";
import { useBanks } from "@/lib/banks-context";
import { useUI } from "@/lib/ui-context";
import { useModalAccessibility } from "@/lib/use-modal-accessibility";

type RateBankButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

export default function RateBankButton({
  children,
  className = "btn primary",
  disabled = false,
}: RateBankButtonProps) {
  const { banks, loading } = useBanks();
  const { openBankModal } = useUI();
  const [open, setOpen] = useState(false);
  const [selectedBankId, setSelectedBankId] = useState("");
  const selectId = useId();
  const effectiveSelectedBankId = selectedBankId || banks[0]?.id || "";

  const modalRef = useModalAccessibility<HTMLDivElement>(open, () => setOpen(false));

  function openRatingForm() {
    if (!effectiveSelectedBankId) return;
    setOpen(false);
    openBankModal(effectiveSelectedBankId, "rating");
  }

  return (
    <>
      <button
        type="button"
        className={className}
        disabled={disabled || loading || banks.length === 0}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      <div
        className={`overlay${open ? " open" : ""}`}
        role="presentation"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div
          className="modal rate-bank-picker"
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${selectId}-title`}
          tabIndex={-1}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <button
            className="modal-close"
            type="button"
            aria-label="Banka seçimini kapat"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <div className="rate-bank-picker-icon" aria-hidden="true">★</div>
          <h3 id={`${selectId}-title`}>Hangi bankayı puanlayacaksın?</h3>
          <p className="hint">
            Bankanı seç; kategori puanları ve başvuru deneyimi formu doğrudan açılsın.
          </p>
          <label className="rate-bank-picker-label" htmlFor={selectId}>
            Banka
          </label>
          <select
            id={selectId}
            className="rate-bank-picker-select"
            value={effectiveSelectedBankId}
            onChange={(event) => setSelectedBankId(event.target.value)}
          >
            {banks.map((bank) => (
              <option value={bank.id} key={bank.id}>
                {bank.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn primary rate-bank-picker-submit"
            disabled={!effectiveSelectedBankId}
            onClick={openRatingForm}
          >
            Puanlama Formunu Aç
          </button>
        </div>
      </div>
    </>
  );
}
