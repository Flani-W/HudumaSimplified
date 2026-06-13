"use client";

import { useState } from "react";
import type { Service } from "@/data/types";
import { useI18n } from "@/i18n/I18nProvider";
import { downloadGuidePdf } from "@/lib/pdf";

export function DownloadButton({ service }: { service: Service }) {
  const { t, locale } = useI18n();
  const [busy, setBusy] = useState(false);

  const onDownload = async () => {
    setBusy(true);
    try {
      await downloadGuidePdf(service, locale, {
        appName: t("appName"),
        whoCanApply: t("whoCanApply"),
        documentsNeeded: t("documentsNeeded"),
        fees: t("fees"),
        totalFee: t("totalFee"),
        timeline: t("timeline"),
        steps: t("steps"),
        officialPortal: t("officialPortal"),
        feeDisclaimer: t("feeDisclaimer"),
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onDownload}
      disabled={busy}
      className="no-print inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] disabled:opacity-70"
    >
      <span aria-hidden>{busy ? "⏳" : "⬇️"}</span>
      {busy ? t("preparingPdf") : t("downloadPdf")}
    </button>
  );
}
