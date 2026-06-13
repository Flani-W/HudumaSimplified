"use client";

import { useI18n } from "@/i18n/I18nProvider";
import type { Localized } from "@/data/types";

const body: { heading: Localized; text: Localized }[] = [
  {
    heading: {
      en: "Why this exists",
      sw: "Kwa nini ipo",
    },
    text: {
      en: "Government portals like eCitizen can be hard to navigate, and many people pay cyber cafés to transact for them. Huduma Simplified explains each service in plain Swahili and English so you can do it yourself, with confidence.",
      sw: "Tovuti za serikali kama eCitizen zinaweza kuwa ngumu kutumia, na watu wengi hulipa vibanda vya mtandao kuwafanyia. Huduma Rahisi inaeleza kila huduma kwa Kiswahili na Kiingereza rahisi ili uifanye mwenyewe, kwa ujasiri.",
    },
  },
  {
    heading: {
      en: "Take it anywhere",
      sw: "Itumie popote",
    },
    text: {
      en: "Every guide can be downloaded as a PDF to keep, print or share — so you have the checklist, documents and fees with you at the office or the counter.",
      sw: "Kila mwongozo unaweza kupakuliwa kama PDF kuhifadhi, kuchapisha au kushiriki — upate orodha, nyaraka na ada ukiwa ofisini au kwenye kaunta.",
    },
  },
  {
    heading: {
      en: "About the information",
      sw: "Kuhusu taarifa",
    },
    text: {
      en: "Fees, documents and timelines are gathered from official sources and are indicative — they can change and some vary by county. Always confirm on the official portal before paying. We never ask for your personal data.",
      sw: "Ada, nyaraka na muda hukusanywa kutoka vyanzo rasmi na ni za makadirio — zinaweza kubadilika na baadhi hutofautiana kwa kaunti. Daima thibitisha kwenye tovuti rasmi kabla ya kulipa. Hatuombi taarifa zako binafsi.",
    },
  },
];

export default function AboutPage() {
  const { t, loc } = useI18n();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="kicker text-[var(--color-primary)]">{t("aboutKicker")}</p>
      <h1 className="font-display mt-3 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
        {t("aboutTitle")}
      </h1>

      <div className="mt-10 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
        {body.map((section) => (
          <section key={section.heading.en} className="py-7">
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
              {loc(section.heading)}
            </h2>
            <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
              {loc(section.text)}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
