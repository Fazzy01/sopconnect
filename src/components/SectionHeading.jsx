export default function SectionHeading({
  title,
  supporting,
  align = "left",
  light = false,
  size = "md",
}) {
  const sizes = {
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl",
  };

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`mb-5 h-[3px] w-12 rounded-full bg-secondary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      <h2
        className={`font-display font-medium leading-[1.1] ${sizes[size]} ${
          light ? "text-paper" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {supporting && (
        <p className={`mt-4 text-[15px] leading-relaxed ${light ? "text-paper/75" : "text-ink-soft"}`}>
          {supporting}
        </p>
      )}
    </div>
  );
}
