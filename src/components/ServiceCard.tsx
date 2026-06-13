"use client";

import Link from "next/link";
import type { Service } from "@/data/types";
import { useI18n } from "@/i18n/I18nProvider";
import { categoryLabels } from "@/i18n/strings";

export function ServiceCard({ service }: { service: Service }) {
  const { loc, t } = useI18n();

  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex h-full flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-primary)]"
    >
      <div className="flex items-center justify-between gap-2">
        <span aria-hidden className="text-2xl">
          {service.icon}
        </span>
        <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
          {loc(categoryLabels[service.category])}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
        {loc(service.title)}
      </h3>
      <p className="line-clamp-2 text-sm text-[var(--color-muted)]">
        {loc(service.summary)}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[var(--color-primary)]">
        {t("viewGuide")}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
