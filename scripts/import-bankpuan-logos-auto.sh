#!/usr/bin/env bash
set -euo pipefail

DOWNLOAD_DIR="${XDG_DOWNLOAD_DIR:-}"
if [[ -z "$DOWNLOAD_DIR" ]] && command -v xdg-user-dir >/dev/null 2>&1; then
  DOWNLOAD_DIR="$(xdg-user-dir DOWNLOAD 2>/dev/null || true)"
fi
DOWNLOAD_DIR="${DOWNLOAD_DIR:-$HOME/Downloads}"

LOGO_ZIP="${1:-}"
if [[ -z "$LOGO_ZIP" ]]; then
  LOGO_ZIP="$(find "$DOWNLOAD_DIR" -maxdepth 1 -type f -iname 'bankpuan-logo-kompakt*.zip' -print -quit 2>/dev/null || true)"
fi

if [[ -z "$LOGO_ZIP" || ! -f "$LOGO_ZIP" ]]; then
  echo "HATA: bankpuan-logo-kompakt.zip bulunamadı."
  echo "Logo arşivini İndirilenler klasörüne kaydedip komutu tekrar çalıştırın."
  exit 1
fi

node scripts/import-bankpuan-logos.mjs "$LOGO_ZIP"
