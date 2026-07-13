import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./reveal";

const phases = [
  {
    week: "Week 1",
    title: "Discovery",
    body: "Map the workflow, quantify the cost, define fixed scope.",
  },
  {
    week: "Weeks 2–3",
    title: "Build",
    body: "System built against your real data, integrated with your stack.",
  },
  {
    week: "Week 4",
    title: "Deploy",
    body: "Production go-live with RBAC, SSO, and operational runbooks.",
  },
  {
    week: "Ongoing",
    title: "Optimize",
    body: "Measured outcomes, tuning, and handover. You own the system.",
  },
];

// 04 — The engagement clock: four weeks, stated like a schedule.
export function ProcessStrip() {
  const rowRef = useReveal(0.1);

  return (
    <section className="bg-black py-16 sm:py-28">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          label="How We Work"
          title={
            <>
              Discovery to production{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                in four weeks.
              </em>
            </>
          }
          intro="Fixed scope. Defined deliverables. Enterprise controls from day one — RBAC, SSO, governance, and integration with Salesforce, ServiceNow, and your ERP."
        />

        <div ref={rowRef} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, i) => (
            <div
              key={phase.title}
              className="relative border-t sm:border-t-0 sm:border-l border-white/10 py-6 sm:py-2 sm:pl-8 sm:pr-6 first:border-t-0 first:sm:border-l-0 first:sm:pl-0"
            >
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] text-[#7ec8e3]">
                {phase.week}
              </span>
              <h3 className="mt-3 text-lg font-medium text-white">{phase.title}</h3>
              <p className="mt-2 text-sm text-white/45 leading-relaxed">{phase.body}</p>
              <span className="hidden lg:block absolute right-4 top-2 font-['JetBrains_Mono'] text-4xl text-white/[0.06] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            The full engagement structure
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
