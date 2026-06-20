"use client";

import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/data/types";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "English" },
  { value: "sw", label: "Kiswahili" },
];

/**
 * Language picker. A native <select> is used deliberately: it is fully
 * keyboard-accessible and gives a familiar native control on mobile — where most
 * users are. Each option is labelled with the language's own name.
 */
export function LocalePicker() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="relative inline-flex items-center">
      <span aria-hidden className="pointer-events-none absolute left-2.5 text-xs">
        🌐
      </span>
      <select
        aria-label={t("langLabel")}
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="appearance-none rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] py-1 pl-7 pr-7 text-xs font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute right-2.5 text-[0.6rem] text-[var(--color-muted)]"
      >
        ▾
      </span>
    </div>
  );
}
