"use client";

import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/data/types";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "sw", label: "SW" },
];

export function LocaleToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("langLabel")}
      className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] p-0.5"
    >
      {options.map((opt) => {
        const active = locale === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLocale(opt.value)}
            aria-pressed={active}
            className={`min-w-9 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
              active
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
