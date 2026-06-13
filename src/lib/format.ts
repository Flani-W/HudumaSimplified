import type { Fee, Locale } from "@/data/types";

/** Format a KES amount, e.g. 4550 → "KES 4,550", 0 → free label handled by caller. */
export function formatKes(amount: number): string {
  return `KES ${amount.toLocaleString("en-KE")}`;
}

/** Sum the fee items into a single indicative total. */
export function totalFee(fees: Fee[]): number {
  return fees.reduce((sum, f) => sum + f.amountKes, 0);
}

/** Locale-aware label for a zero-cost fee. */
export function freeLabel(locale: Locale): string {
  return locale === "sw" ? "Bila malipo" : "Free";
}
