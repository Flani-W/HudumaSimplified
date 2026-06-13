import type { Locale, ServiceCategory } from "@/data/types";

/** UI chrome strings (everything that is not service content). */
export const ui = {
  appName: { en: "Huduma Simplified", sw: "Huduma Rahisi" },
  tagline: {
    en: "Government services, made simple.",
    sw: "Huduma za serikali, kwa urahisi.",
  },
  heroTitle: {
    en: "Get any government service done — step by step.",
    sw: "Pata huduma yoyote ya serikali — hatua kwa hatua.",
  },
  heroSubtitle: {
    en: "Clear checklists, required documents, real fees and timelines.",
    sw: "Orodha rahisi, nyaraka zinazohitajika, ada halisi na muda.",
  },
  // Small uppercase eyebrows above section headings.
  heroKicker: { en: "Kenyan government services", sw: "Huduma za serikali ya Kenya" },
  featuresKicker: { en: "What you get", sw: "Unachopata" },
  servicesKicker: { en: "All services", sw: "Huduma zote" },
  aboutKicker: { en: "Why we exist", sw: "Kwa nini tupo" },
  contactKicker: { en: "Get in touch", sw: "Wasiliana nasi" },
  heroCtaPrimary: { en: "Browse services", sw: "Tazama huduma" },
  heroCtaSecondary: { en: "How it works", sw: "Inavyofanya kazi" },

  // Stat strip on the landing hero.
  statServicesLabel: { en: "Guides", sw: "Miongozo" },
  statFreeValue: { en: "Free", sw: "Bila malipo" },
  statFreeLabel: { en: "Always", sw: "Daima" },
  statLanguagesValue: { en: "EN · SW", sw: "EN · SW" },
  statLanguagesLabel: { en: "Languages", sw: "Lugha" },

  // "What you get" features section.
  featuresTitle: {
    en: "Everything you need to get it done",
    sw: "Kila kitu unachohitaji kukamilisha",
  },
  featuresSubtitle: {
    en: "No jargon, no middlemen. Just clear guidance you can follow yourself.",
    sw: "Hakuna lugha ngumu, hakuna madalali. Mwongozo rahisi unaoweza kufuata mwenyewe.",
  },

  // Services section on the landing page.
  servicesTitle: { en: "Browse all services", sw: "Tazama huduma zote" },
  servicesSubtitle: {
    en: "Pick a service to see the checklist, documents, fees and steps.",
    sw: "Chagua huduma kuona orodha, nyaraka, ada na hatua.",
  },

  // About preview on the landing page.
  aboutHomeTitle: { en: "Why Huduma Simplified", sw: "Kwa nini Huduma Rahisi" },
  readMore: { en: "Read more about us", sw: "Soma zaidi kuhusu sisi" },

  // Contact section.
  contactTitle: { en: "Get in touch", sw: "Wasiliana nasi" },
  contactSubtitle: {
    en: "Spotted an error, or a service we should add? We would love to hear from you.",
    sw: "Umeona kosa, au huduma tunayopaswa kuongeza? Tungependa kusikia kutoka kwako.",
  },
  contactEmailCta: { en: "Email us", sw: "Tutumie barua pepe" },
  contactLink: { en: "Contact", sw: "Wasiliana" },

  // Footer.
  footerTagline: {
    en: "Simple, bilingual guides for Kenyan government services. Built for everyone.",
    sw: "Miongozo rahisi ya lugha mbili kwa huduma za serikali ya Kenya. Imejengwa kwa wote.",
  },
  footerQuickLinks: { en: "Quick links", sw: "Viungo vya haraka" },
  footerContactHeading: { en: "Contact", sw: "Wasiliana" },
  footerRights: { en: "All rights reserved.", sw: "Haki zote zimehifadhiwa." },
  searchPlaceholder: {
    en: "Search a service (e.g. ID, passport, permit)…",
    sw: "Tafuta huduma (mf. kitambulisho, pasipoti, leseni)…",
  },
  allCategories: { en: "All", sw: "Zote" },
  noResults: {
    en: "No services match your search.",
    sw: "Hakuna huduma inayolingana na utafutaji wako.",
  },
  popular: { en: "All services", sw: "Huduma zote" },
  viewGuide: { en: "View guide", sw: "Ona mwongozo" },
  back: { en: "Back to services", sw: "Rudi kwenye huduma" },
  overview: { en: "Overview", sw: "Muhtasari" },
  whoCanApply: { en: "Who can apply", sw: "Nani anaweza kuomba" },
  documentsNeeded: { en: "Documents you need", sw: "Nyaraka unazohitaji" },
  fees: { en: "Fees", sw: "Ada" },
  totalFee: { en: "Estimated total", sw: "Jumla inayokadiriwa" },
  free: { en: "Free", sw: "Bila malipo" },
  timeline: { en: "How long it takes", sw: "Muda unaochukua" },
  steps: { en: "Step-by-step", sw: "Hatua kwa hatua" },
  checklistHint: {
    en: "Tap each item as you complete it. Your progress is saved on this device.",
    sw: "Gusa kila kipengele unapokimaliza. Maendeleo yako yanahifadhiwa kwenye kifaa hiki.",
  },
  downloadPdf: { en: "Download PDF guide", sw: "Pakua mwongozo (PDF)" },
  preparingPdf: { en: "Preparing PDF…", sw: "Inaandaa PDF…" },
  officialPortal: { en: "Open official portal", sw: "Fungua tovuti rasmi" },
  feeDisclaimer: {
    en: "Fees are indicative and set by government agencies; confirm on the official portal before paying.",
    sw: "Ada ni za makadirio na huwekwa na mashirika ya serikali; thibitisha kwenye tovuti rasmi kabla ya kulipa.",
  },
  resetProgress: { en: "Reset", sw: "Anza upya" },
  aboutTitle: { en: "About Huduma Simplified", sw: "Kuhusu Huduma Rahisi" },
  aboutLink: { en: "About", sw: "Kuhusu" },
  homeLink: { en: "Services", sw: "Huduma" },
  langLabel: { en: "Lugha / Language", sw: "Lugha / Language" },
} satisfies Record<string, Record<Locale, string>>;

export const categoryLabels: Record<ServiceCategory, Record<Locale, string>> = {
  identity: { en: "Identity", sw: "Utambulisho" },
  civil: { en: "Civil records", sw: "Rekodi za kiraia" },
  business: { en: "Business", sw: "Biashara" },
  transport: { en: "Transport", sw: "Usafiri" },
  tax: { en: "Tax", sw: "Kodi" },
};

export type UiKey = keyof typeof ui;
