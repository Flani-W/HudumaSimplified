"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { SITE } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="no-print mt-auto bg-[var(--color-ink)] text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Brand + tagline */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2.5">
            <span aria-hidden className="h-6 w-1.5 rounded-sm bg-[var(--color-primary)]" />
            <span className="font-display text-lg font-semibold text-white">
              {t("appName")}
            </span>
          </span>
          <p className="max-w-xs text-sm text-white/55">{t("footerTagline")}</p>
        </div>

        {/* Quick links */}
        <nav aria-label={t("footerQuickLinks")} className="flex flex-col gap-2.5">
          <h2 className="kicker text-white/40">{t("footerQuickLinks")}</h2>
          <Link href="/#services" className="text-sm hover:text-white">
            {t("homeLink")}
          </Link>
          <Link href="/about/" className="text-sm hover:text-white">
            {t("aboutLink")}
          </Link>
          <Link href="/#contact" className="text-sm hover:text-white">
            {t("contactLink")}
          </Link>
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-2.5">
          <h2 className="kicker text-white/40">{t("footerContactHeading")}</h2>
          <a href={`mailto:${SITE.contactEmail}`} className="text-sm hover:text-white">
            {SITE.contactEmail}
          </a>
        </div>
      </div>

      {/* Bottom bar: copyright + fee disclaimer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {SITE.copyrightYear} {SITE.brand}. {t("footerRights")}
          </p>
          <p className="max-w-2xl md:text-right">{t("feeDisclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
