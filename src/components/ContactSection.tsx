"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { SITE } from "@/lib/site";

const CONTACT_EMAIL = SITE.contactEmail;

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[var(--color-forest)] py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="kicker text-[var(--color-primary-soft)]">{t("contactKicker")}</p>
        <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
          {t("contactTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          {t("contactSubtitle")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-[var(--color-forest)] transition-colors hover:bg-[var(--color-bg)]"
          >
            {t("contactEmailCta")} <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
