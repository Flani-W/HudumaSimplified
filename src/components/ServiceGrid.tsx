"use client";

import { useMemo, useState } from "react";
import type { Service, ServiceCategory } from "@/data/types";
import { useI18n } from "@/i18n/I18nProvider";
import { categoryLabels } from "@/i18n/strings";
import { ServiceCard } from "@/components/ServiceCard";

type Filter = ServiceCategory | "all";

export function ServiceGrid({ services }: { services: Service[] }) {
  const { t, loc, locale } = useI18n();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  // Categories present in the data, in stable order, prefixed with "All".
  const categories = useMemo<Filter[]>(() => {
    const present = new Set(services.map((s) => s.category));
    const ordered = (Object.keys(categoryLabels) as ServiceCategory[]).filter(
      (c) => present.has(c),
    );
    return ["all", ...ordered];
  }, [services]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      if (filter !== "all" && s.category !== filter) return false;
      if (!q) return true;
      const haystack = [loc(s.title), loc(s.summary), s.title.en, s.title.sw]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
    // `locale` is included so search re-runs when the language switches.
  }, [services, query, filter, loc, locale]);

  return (
    <section aria-label={t("popular")}>
      <div className="flex flex-col gap-5">
        <label className="relative block max-w-md">
          <span className="sr-only">{t("searchPlaceholder")}</span>
          <span
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
          >
            🔍
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] py-2.5 pl-10 pr-4 text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none"
          />
        </label>

        {/* Filters as editorial tabs with an active underline. */}
        <div
          role="group"
          aria-label={t("allCategories")}
          className="flex flex-wrap gap-x-6 gap-y-1 border-b border-[var(--color-line)]"
        >
          {categories.map((c) => {
            const active = filter === c;
            const label = c === "all" ? t("allCategories") : loc(categoryLabels[c]);
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={active}
                className={`-mb-px border-b-2 pb-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "border-[var(--color-primary)] text-[var(--color-ink)]"
                    : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-8 rounded-[var(--radius-card)] border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] p-10 text-center text-[var(--color-muted)]">
          {t("noResults")}
        </p>
      ) : (
        <ul className="mt-6 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
