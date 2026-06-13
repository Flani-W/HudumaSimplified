"use client";

import Link from "next/link";
import type { Service } from "@/data/types";
import { useI18n } from "@/i18n/I18nProvider";
import { categoryLabels } from "@/i18n/strings";
import { formatKes, totalFee, freeLabel } from "@/lib/format";
import { Checklist } from "@/components/Checklist";
import { DownloadButton } from "@/components/DownloadButton";

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-6">
      <h2 className="font-display mb-3 text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function GuideView({ service }: { service: Service }) {
  const { t, loc, locale } = useI18n();
  const total = totalFee(service.fees);

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="no-print inline-flex w-fit items-center gap-1 text-sm font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
      >
        ← {t("back")}
      </Link>

      {/* Title block */}
      <header className="flex items-start gap-4 border-b border-[var(--color-line)] pb-6">
        <span aria-hidden className="text-4xl sm:text-5xl">
          {service.icon}
        </span>
        <div>
          <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            {loc(categoryLabels[service.category])}
          </span>
          <h1 className="font-display mt-1 text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
            {loc(service.title)}
          </h1>
          <p className="mt-1.5 text-[var(--color-muted)]">{loc(service.summary)}</p>
        </div>
      </header>

      {/* Quick facts: total fee + timeline */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-primary-soft)] p-4">
          <p className="kicker text-[var(--color-primary-dark)]">{t("totalFee")}</p>
          <p className="font-display mt-1.5 text-2xl font-semibold text-[var(--color-ink)]">
            {total === 0 ? freeLabel(locale) : formatKes(total)}
          </p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-warn-soft)] p-4">
          <p className="kicker text-[var(--color-warn-ink)]">{t("timeline")}</p>
          <p className="mt-1.5 font-semibold text-[var(--color-ink)]">
            {loc(service.timeline)}
          </p>
        </div>
      </div>

      <DownloadButton service={service} />

      <SectionCard title={t("whoCanApply")}>
        <ul className="flex flex-col gap-2">
          {service.eligibility.map((e, i) => (
            <li key={i} className="flex gap-2.5 text-[var(--color-ink)]">
              <span aria-hidden className="font-semibold text-[var(--color-primary)]">
                •
              </span>
              {loc(e)}
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title={t("documentsNeeded")}>
        <ul className="flex flex-col gap-2">
          {service.documents.map((d, i) => (
            <li key={i} className="flex gap-2.5 text-[var(--color-ink)]">
              <span aria-hidden>📄</span>
              {loc(d)}
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title={t("fees")}>
        <ul className="flex flex-col divide-y divide-[var(--color-line)]">
          {service.fees.map((f, i) => (
            <li key={i} className="flex items-center justify-between gap-3 py-2.5">
              <span className="text-[var(--color-ink)]">{loc(f.label)}</span>
              <span className="font-semibold text-[var(--color-ink)]">
                {f.amountKes === 0 ? freeLabel(locale) : formatKes(f.amountKes)}
              </span>
            </li>
          ))}
          <li className="flex items-center justify-between gap-3 border-t-2 border-[var(--color-ink)]/10 py-2.5 font-bold">
            <span>{t("totalFee")}</span>
            <span className="font-display text-lg text-[var(--color-primary-dark)]">
              {total === 0 ? freeLabel(locale) : formatKes(total)}
            </span>
          </li>
        </ul>
        <p className="mt-4 rounded-[var(--radius-card)] bg-[var(--color-warn-soft)] p-3 text-xs text-[var(--color-warn-ink)]">
          ⚠️ {t("feeDisclaimer")}
        </p>
      </SectionCard>

      <SectionCard title={t("steps")}>
        <Checklist slug={service.slug} steps={service.steps} />
      </SectionCard>

      <a
        href={service.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="no-print inline-flex w-fit items-center gap-2 rounded-md border border-[var(--color-primary)] px-5 py-3 font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-soft)]"
      >
        {t("officialPortal")} ↗
      </a>
    </article>
  );
}
