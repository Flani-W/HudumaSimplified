export type Locale = "en" | "sw";

/** A piece of content available in both supported languages. */
export type Localized = Record<Locale, string>;

export type ServiceCategory =
  | "identity"
  | "civil"
  | "business"
  | "transport"
  | "tax";

export interface Fee {
  label: Localized;
  /** Amount in Kenyan Shillings. Use 0 for free items. */
  amountKes: number;
}

export interface GuideStep {
  title: Localized;
  detail: Localized;
}

export interface Service {
  /** URL-safe identifier used for routing, e.g. "birth-certificate". */
  slug: string;
  category: ServiceCategory;
  /** Single emoji used as a lightweight, dependency-free icon. */
  icon: string;
  title: Localized;
  summary: Localized;
  /** Who is eligible / when to use this service. */
  eligibility: Localized[];
  /** Documents the applicant must bring or upload. */
  documents: Localized[];
  fees: Fee[];
  /** Human-readable processing time, e.g. "5–10 working days". */
  timeline: Localized;
  /** Ordered application steps. */
  steps: GuideStep[];
  /** Official government portal for this service. */
  officialUrl: string;
}
