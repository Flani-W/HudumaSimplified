/** Presentational section heading — strings are resolved by the caller. */
export function SectionHeading({
  title,
  subtitle,
  kicker,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {kicker && <p className="kicker text-[var(--color-primary)]">{kicker}</p>}
      <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-[var(--color-muted)] sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
