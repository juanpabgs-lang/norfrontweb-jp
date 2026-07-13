import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./reveal";
import { FigVertical, FigCore, FigPlaybook } from "./figures";

const pillars = [
  {
    fig: "Fig. 04.1",
    Figure: FigVertical,
    title: "One brand per vertical.",
    body: "A named company with local language and a single workflow obsession — not a consultancy stretched across industries. Buyers meet a specialist, backed by a group.",
  },
  {
    fig: "Fig. 04.2",
    Figure: FigCore,
    title: "One shared engineering core.",
    body: "Every deployment strengthens the same platform: classification engines, integration patterns, governance. Brand two shipped faster than brand one. Brand nine will ship fastest.",
  },
  {
    fig: "Fig. 04.3",
    Figure: FigPlaybook,
    title: "One repeatable playbook.",
    body: "Discovery to production in four weeks, fixed scope, client owns the system. No vendor lock-in, no open-ended retainers, no pilot purgatory.",
  },
];

// 04 — Atomic's architecture with Linear's schematic figures.
export function ModelPillars() {
  const gridRef = useReveal(0.1);

  return (
    <section className="bg-black py-16 sm:py-28">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          label="The Model"
          title={
            <>
              Why a holding company{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                beats a vendor.
              </em>
            </>
          }
        />

        <div ref={gridRef} className="mt-14 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] border border-white/[0.08]">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group relative p-8 sm:p-10 transition-colors duration-500 hover:bg-white/[0.02]">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-white/25">
                {pillar.fig}
              </span>
              <div className="mx-auto my-6 max-w-[240px] opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                <pillar.Figure />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-white/45 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/model"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            How Norfront operates
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
