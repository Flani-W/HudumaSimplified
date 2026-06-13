"use client";

import { useI18n } from "@/i18n/I18nProvider";
import type { Localized } from "@/data/types";
import { SectionHeading } from "@/components/SectionHeading";

const features: { title: Localized; text: Localized }[] = [
  {
    title: { en: "A clear checklist", sw: "Orodha iliyo wazi" },
    text: {
      en: "Every service is broken into simple, ordered steps you can tick off as you go.",
      sw: "Kila huduma imegawanywa katika hatua rahisi, zenye mpangilio unazoweza kuziweka alama.",
    },
  },
  {
    title: { en: "Documents & real fees", sw: "Nyaraka na ada halisi" },
    text: {
      en: "Know exactly what to bring and what it costs before you leave the house.",
      sw: "Jua hasa cha kubeba na gharama kabla ya kutoka nyumbani.",
    },
  },
  {
    title: { en: "Download as PDF", sw: "Pakua kama PDF" },
    text: {
      en: "Save or share a printable guide so you have the steps wherever you need them.",
      sw: "Hifadhi au shiriki mwongozo unaoweza kuchapishwa upate hatua popote unapozihitaji.",
    },
  },
];

export function Features() {
  const { t, loc } = useI18n();

  return (
    <section
      id="features"
      className="scroll-mt-20 border-b border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="left"
          kicker={t("featuresKicker")}
          title={t("featuresTitle")}
          subtitle={t("featuresSubtitle")}
        />

        {/* Numbered editorial index. The 1px gap over a line-coloured background
            renders crisp hairline rules between cells. */}
        <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
          {features.map((f, i) => (
            <li
              key={f.title.en}
              className="flex flex-col gap-3 bg-[var(--color-surface)] p-7"
            >
              <span
                aria-hidden
                className="font-display text-3xl font-semibold text-[var(--color-primary)]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                {loc(f.title)}
              </h3>
              <p className="text-sm text-[var(--color-muted)]">{loc(f.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
