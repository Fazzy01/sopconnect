import { Info } from "lucide-react";

export default function DisclaimerBanner({ text, className = "" }) {
  return (
    <div
      className={`flex gap-3 rounded-sm border border-primary/15 bg-primary/[0.04] px-5 py-4 ${className}`}
    >
      <Info size={18} className="mt-0.5 shrink-0 text-primary/60" />
      <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}
