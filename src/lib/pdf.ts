import type { Locale, Service } from "@/data/types";
import { formatKes, totalFee, freeLabel } from "@/lib/format";

/** Labels the PDF needs, resolved in the active language by the caller. */
export interface PdfLabels {
  appName: string;
  whoCanApply: string;
  documentsNeeded: string;
  fees: string;
  totalFee: string;
  timeline: string;
  steps: string;
  officialPortal: string;
  feeDisclaimer: string;
}

/**
 * Build and trigger download of a printable one-or-two page guide for a service
 * in the active language. jsPDF is imported dynamically so it stays out of the
 * initial bundle and only loads when a user actually downloads.
 */
export async function downloadGuidePdf(
  service: Service,
  locale: Locale,
  labels: PdfLabels,
): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentW = pageW - margin * 2;
  let y = margin;

  const pick = (v: { en: string; sw: string }) => v[locale];

  const ensureSpace = (needed: number) => {
    if (y + needed > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const heading = (text: string) => {
    ensureSpace(28);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(11, 122, 75); // primary green
    doc.text(text, margin, y);
    y += 18;
    doc.setTextColor(26, 29, 26);
  };

  const paragraph = (text: string, opts?: { bullet?: boolean; size?: number }) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(opts?.size ?? 10.5);
    const indent = opts?.bullet ? 14 : 0;
    const lines = doc.splitTextToSize(text, contentW - indent) as string[];
    ensureSpace(lines.length * 14 + 2);
    if (opts?.bullet) doc.text("•", margin, y);
    doc.text(lines, margin + indent, y);
    y += lines.length * 14 + 2;
  };

  // ---- Header band -------------------------------------------------------
  doc.setFillColor(11, 122, 75);
  doc.rect(0, 0, pageW, 70, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(labels.appName, margin, 30);
  doc.setFontSize(17);
  doc.text(pick(service.title), margin, 52);
  doc.setTextColor(26, 29, 26);
  y = 92;

  paragraph(pick(service.summary));
  y += 6;

  // ---- Who can apply -----------------------------------------------------
  heading(labels.whoCanApply);
  service.eligibility.forEach((e) => paragraph(pick(e), { bullet: true }));
  y += 4;

  // ---- Documents ---------------------------------------------------------
  heading(labels.documentsNeeded);
  service.documents.forEach((d) => paragraph(pick(d), { bullet: true }));
  y += 4;

  // ---- Fees --------------------------------------------------------------
  heading(labels.fees);
  service.fees.forEach((f) => {
    const amount = f.amountKes === 0 ? freeLabel(locale) : formatKes(f.amountKes);
    paragraph(`${pick(f.label)}: ${amount}`, { bullet: true });
  });
  const total = totalFee(service.fees);
  doc.setFont("helvetica", "bold");
  paragraph(`${labels.totalFee}: ${total === 0 ? freeLabel(locale) : formatKes(total)}`);
  y += 4;

  // ---- Timeline ----------------------------------------------------------
  heading(labels.timeline);
  paragraph(pick(service.timeline));
  y += 4;

  // ---- Steps -------------------------------------------------------------
  heading(labels.steps);
  service.steps.forEach((s, i) => {
    doc.setFont("helvetica", "bold");
    paragraph(`${i + 1}. ${pick(s.title)}`);
    doc.setFont("helvetica", "normal");
    paragraph(pick(s.detail), { bullet: true });
  });
  y += 6;

  // ---- Footer / disclaimer ----------------------------------------------
  heading(labels.officialPortal);
  paragraph(service.officialUrl, { size: 10.5 });
  y += 4;
  doc.setTextColor(138, 90, 18);
  paragraph(labels.feeDisclaimer, { size: 9 });

  doc.save(`huduma-${service.slug}-${locale}.pdf`);
}
