"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { LocalePicker } from "@/components/LocalePicker";

export function Header() {
  const { t } = useI18n();

  const navLinks = [
    { href: "/#services", label: t("homeLink") },
    { href: "/about/", label: t("aboutLink") },
    { href: "/#contact", label: t("contactLink") },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={t("appName")}>
          {/* Editorial mark: a small green bar instead of a logo blob. */}
          <span aria-hidden className="h-7 w-1.5 rounded-sm bg-[var(--color-primary)]" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-ink)]">
              {t("appName")}
            </span>
            <span className="mt-1 hidden text-[0.7rem] text-[var(--color-muted)] sm:block">
              {t("tagline")}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <nav aria-label={t("appName")} className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-muted)] underline-offset-8 transition-colors hover:text-[var(--color-ink)] hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LocalePicker />
        </div>
      </div>
    </header>
  );
}
