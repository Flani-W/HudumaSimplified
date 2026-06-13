"use client";

import type { Service } from "@/data/types";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";

export function ServicesSection({ services }: { services: Service[] }) {
  const { t } = useI18n();

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[var(--color-bg)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="left"
          kicker={t("servicesKicker")}
          title={t("servicesTitle")}
          subtitle={t("servicesSubtitle")}
        />
        <div className="mt-10">
          <ServiceGrid services={services} />
        </div>
      </div>
    </section>
  );
}
