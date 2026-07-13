import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./reveal";

const stats = [
  {
    value: "94.2%",
    label: "Classification accuracy",
    detail: "Across 26 complaint categories, measured in production",
  },
  {
    value: "€364K",
    label: "Projected annual savings",
    detail: "Labor cost eliminated from manual complaint handling",
  },
  {
    value: "87%",
    label: "Less manual triage",
    detail: "Per ticket, from intake to routed resolution",
  },
  {
    value: "10×",
    label: "Return on engagement",
    detail: "First-year value against fixed engagement cost",
  },
];

// 01 — The flagship case, Stripe-style evidence: client, outcome, how.
export function FlagshipProof() {
  const gridRef = useReveal(0.1);

  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          label="Production Proof"
          title={
            <>
              Pulsara × Vision Group:{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                600 stores, zero manual compilation.
              </em>
            </>
          }
          intro="AI complaint intelligence for Italy's largest optical retailer. Gemini-powered classification wired into Oracle and Salesforce, processing 10,000+ complaints in production."
        />

        <div ref={gridRef} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black p-8 sm:p-10">
              <div className="font-['JetBrains_Mono'] text-3xl sm:text-[2.5rem] leading-none text-[#7ec8e3] mb-4">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-white mb-1.5">{stat.label}</p>
              <p className="text-xs text-white/40 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30 leading-relaxed max-w-md">
            All metrics from a single production deployment. We do not aggregate
            or average across engagements.
          </p>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors shrink-0"
          >
            Read the full case study
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
