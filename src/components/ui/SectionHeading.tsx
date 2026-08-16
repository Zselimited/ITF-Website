type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? "text-cream/70" : "text-flare"}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? "text-cream/80" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
