"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import type { Localized } from "@/data/types";

const intro: Localized = {
  en: "Government portals like eCitizen can be hard to navigate, and many people pay cyber cafés to transact for them. Huduma Simplified explains each service in plain Swahili and English so you can do it yourself, with confidence.",
  sw: "Tovuti za serikali kama eCitizen zinaweza kuwa ngumu kutumia, na watu wengi hulipa vibanda vya mtandao kuwafanyia. Huduma Rahisi inaeleza kila huduma kwa Kiswahili na Kiingereza rahisi ili uifanye mwenyewe, kwa ujasiri.",
};

const points: { icon: string; text: Localized }[] = [
  {
    icon: "🗣️",
    text: {
      en: "Plain language, in Swahili and English.",
      sw: "Lugha rahisi, kwa Kiswahili na Kiingereza.",
    },
  },
  {
    icon: "🔒",
    text: {
      en: "We never ask for your personal data.",
      sw: "Hatuombi taarifa zako binafsi kamwe.",
    },
  },
  {
    icon: "🏛️",
    text: {
      en: "Information gathered from official sources.",
      sw: "Taarifa zinazokusanywa kutoka vyanzo rasmi.",
    },
  },
];

export function HomeAbout() {
  const { t, loc } = useI18n();

  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <p className="kicker text-[var(--color-primary)]">{t("aboutKicker")}</p>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
            {t("aboutHomeTitle")}
          </h2>
          <p className="max-w-prose text-base text-[var(--color-muted)] sm:text-lg">
            {loc(intro)}
          </p>
          <Link
            href="/about/"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
          >
            {t("readMore")} <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Trust points as a ruled list rather than floating cards. */}
        <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {points.map((p) => (
            <li key={p.text.en} className="flex items-start gap-4 py-5">
              <span aria-hidden className="text-xl leading-none">
                {p.icon}
              </span>
              <span className="text-base font-medium text-[var(--color-ink)]">
                {loc(p.text)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
