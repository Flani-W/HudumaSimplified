"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

/** One figure in the hero meta row: a bold display value over a muted label. */
function Meta({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-xl font-semibold text-[var(--color-ink)]">
        {value}
      </dd>
      <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
        {label}
      </span>
    </div>
  );
}

export function Hero({ serviceCount }: { serviceCount: number }) {
  const { t } = useI18n();

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="kicker text-[var(--color-primary)]">{t("heroKicker")}</p>

        <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] text-[var(--color-ink)] sm:text-6xl">
          {t("heroTitle")}
        </h1>

        {/* Short green rule — an editorial accent, not decoration for its own sake. */}
        <div aria-hidden className="mt-6 h-1 w-14 rounded-full bg-[var(--color-primary)]" />

        <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
          {t("heroSubtitle")}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            {t("heroCtaPrimary")} <span aria-hidden>→</span>
          </Link>
          <Link
            href="/#features"
            className="inline-flex items-center justify-center gap-1.5 font-semibold text-[var(--color-ink)] underline-offset-4 hover:underline"
          >
            {t("heroCtaSecondary")}
          </Link>
        </div>

        {/* Meta row, separated from the pitch by a hairline. */}
        <dl className="mt-14 flex flex-wrap items-end gap-x-10 gap-y-5 border-t border-[var(--color-line)] pt-7">
          <Meta value={`${serviceCount}+`} label={t("statServicesLabel")} />
          <Meta value={t("statFreeValue")} label={t("statFreeLabel")} />
          <Meta value={t("statLanguagesValue")} label={t("statLanguagesLabel")} />
        </dl>
      </div>
    </section>
  );
}
