"use client";

import { useEffect, useState } from "react";
import type { GuideStep } from "@/data/types";
import { useI18n } from "@/i18n/I18nProvider";

interface ChecklistProps {
  slug: string;
  steps: GuideStep[];
}

/** Step checklist whose ticked state persists per-service in localStorage. */
export function Checklist({ slug, steps }: ChecklistProps) {
  const { t, loc } = useI18n();
  const storageKey = `huduma.progress.${slug}`;
  const [done, setDone] = useState<boolean[]>(() => steps.map(() => false));

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as boolean[];
        if (Array.isArray(saved) && saved.length === steps.length) setDone(saved);
      }
    } catch {
      // Corrupt/absent storage just means we start fresh.
    }
  }, [storageKey, steps.length]);

  const persist = (next: boolean[]) => {
    setDone(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Storage may be unavailable (private mode); progress is best-effort.
    }
  };

  const toggle = (i: number) => {
    const next = done.slice();
    next[i] = !next[i];
    persist(next);
  };

  const reset = () => persist(steps.map(() => false));

  const completed = done.filter(Boolean).length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm text-[var(--color-muted)]">{t("checklistHint")}</p>
        <button
          type="button"
          onClick={reset}
          className="no-print shrink-0 text-sm font-semibold text-[var(--color-accent)] hover:underline"
        >
          {t("resetProgress")}
        </button>
      </div>

      <div className="mb-4" aria-hidden>
        <div className="h-2 overflow-hidden rounded-full bg-[var(--color-line)]">
          <div
            className="h-full rounded-full bg-[var(--color-primary)] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-1 text-right text-xs font-medium text-[var(--color-muted)]">
          {completed}/{steps.length} · {pct}%
        </p>
      </div>

      <ol className="flex flex-col gap-3">
        {steps.map((step, i) => {
          const checked = done[i];
          return (
            <li key={i}>
              <label
                className={`flex cursor-pointer gap-3 rounded-[var(--radius-card)] border p-3 transition-colors ${
                  checked
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)]"
                    : "border-[var(--color-line)] bg-[var(--color-surface)]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(i)}
                  className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-primary)]"
                />
                <span className="flex flex-col gap-0.5">
                  <span
                    className={`font-semibold ${
                      checked
                        ? "text-[var(--color-primary-dark)] line-through decoration-1"
                        : "text-[var(--color-ink)]"
                    }`}
                  >
                    <span className="mr-1 text-[var(--color-muted)]">{i + 1}.</span>
                    {loc(step.title)}
                  </span>
                  <span className="text-sm text-[var(--color-muted)]">
                    {loc(step.detail)}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
