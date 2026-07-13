import { useReveal } from "./reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
}

// Report-style section heading: numbered mono eyebrow over a hairline rule.
export function SectionHeading({ index, label, title, intro }: SectionHeadingProps) {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Light seam: gradient rule with a glowing origin tick */}
      <div className="relative h-px w-full bg-gradient-to-r from-[#7ec8e3]/50 via-white/10 to-transparent">
        <span className="absolute -top-[1.5px] left-0 h-1 w-1 rounded-full bg-[#7ec8e3] shadow-[0_0_12px_2px_rgba(126,200,227,0.5)]" />
      </div>
      <div className="flex items-baseline gap-4 pt-5 mb-10 sm:mb-14">
        <span className="font-['JetBrains_Mono'] text-xs text-[#7ec8e3] tracking-[0.2em]">{index}</span>
        <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-white/40">{label}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-medium tracking-[-0.02em] leading-[1.15] text-white max-w-2xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-sm sm:text-base text-white/50 leading-relaxed max-w-xl">{intro}</p>
      )}
    </div>
  );
}
