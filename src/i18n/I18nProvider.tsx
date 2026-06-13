"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale, Localized } from "@/data/types";
import { ui, type UiKey } from "@/i18n/strings";

const STORAGE_KEY = "huduma.locale";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  /** Translate a UI chrome key. */
  t: (key: UiKey) => string;
  /** Pick the active language from any localized content object. */
  loc: (value: Localized) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore the saved preference after hydration to avoid an SSR mismatch.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "sw") setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const toggle = useCallback(
    () => setLocale(locale === "en" ? "sw" : "en"),
    [locale, setLocale],
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      toggle,
      t: (key) => ui[key][locale],
      loc: (v) => v[locale],
    }),
    [locale, setLocale, toggle],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
