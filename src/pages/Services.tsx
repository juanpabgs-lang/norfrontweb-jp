import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, ShieldCheck, Landmark, Activity, Plug } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/home2/SectionHeading";
import { useReveal } from "@/components/home2/reveal";

const timelineSteps = [
  {
    phase: "01",
    label: "Discovery",
    duration: "Week 1",
    headline: "Map processes, quantify manual effort, define the roadmap.",
    description:
      "We align with your team — online or in person — to map existing workflows, quantify manual effort, and define a prioritized roadmap with clear success criteria.",
    activities: [
      "Stakeholder interviews + workflow mapping",
      "Data feasibility assessment",
      "KPI definition + ROI modeling",
      "Security and compliance requirements review",
    ],
    outcome: "Prioritized roadmap with documented assumptions, KPIs, and a build plan.",
  },
  {
    phase: "02",
    label: "Build",
    duration: "Weeks 2–3",
    headline: "Engineer the architecture around your operations.",
    description:
      "We develop in iterations with regular demos, building the system architecture directly around your existing tools and data infrastructure.",
    activities: [
      "Architecture design + component specification",
      "RAG / agent / workflow implementation",
      "Integration with existing platforms (CRM, ERP, etc.)",
      "Evaluation harness (quality, accuracy, safety)",
    ],
    outcome: "Working system with evaluation results, documentation, and deployment readiness.",
  },
  {
    phase: "03",
    label: "Deploy",
    duration: "Week 4",
    headline: "Go live with monitoring, logging, and team enablement.",
    description:
      "We connect systems end-to-end, implement monitoring and access controls, and deploy into your production environment with full operational safeguards.",
    activities: [
      "Production deployment + stabilization",
      "Monitoring (cost, latency, traces, drift)",
      "Team training sessions + operational walkthroughs",
      "Architecture and workflow documentation",
    ],
    outcome: "Live system with full operational visibility, monitoring, and a trained team.",
  },
  {
    phase: "04",
    label: "Optimize",
    duration: "Ongoing",
    headline: "Tune, maintain, and extend on production data.",
    description:
      "We continuously optimize system performance based on production data, industry developments, and evolving business needs — available as an ongoing retainer.",
    activities: [
      "Performance monitoring + drift detection",
      "Model updates based on production feedback",
      "Feature additions + workflow refinements",
      "KPI tracking and performance reviews",
    ],
    outcome: "Continuously improving system with measurable ROI tracking. You own it either way.",
  },
];

const enterpriseReadyItems = [
  { icon: ShieldCheck, label: "Security & Access", detail: "RBAC/SSO, audit logs, least-privilege access" },
  { icon: Landmark, label: "Governance", detail: "Policy controls, approval workflows, risk review" },
  { icon: Activity, label: "Reliability", detail: "Monitoring, SLOs, incident playbooks" },
  { icon: Plug, label: "Integration", detail: "Salesforce, ServiceNow, ERP, data platforms" },
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function Services() {
  const heroRef = useReveal();
  const stripRef = useReveal(0.1);
  const ctaRef = useReveal();

  // The engagement clock: a light line that draws itself down the
  // timeline as you scroll — Linear's calm scroll-linkage.
  const railRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      if (fillRef.current) fillRef.current.style.height = "100%";
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rail = railRef.current;
      const fill = fillRef.current;
      if (!rail || !fill) return;
      const r = rail.getBoundingClientRect();
      const p = clamp((window.innerHeight * 0.72 - r.top) / r.height, 0, 1);
      fill.style.height = `${p * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Layout>
      <div className="bg-black">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20 noise-overlay">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 55% 45% at 25% 0%, rgba(126,200,227,0.08), transparent 62%)",
            }}
          />
          <div ref={heroRef} className="container relative mx-auto px-5 sm:px-6 lg:px-8">
            <p className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#7ec8e3]/60" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.24em] text-white/45">
                How We Work
              </span>
            </p>
            <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-[3.4rem] font-medium tracking-[-0.025em] leading-[1.06] mb-7">
              <span className="headline-sheen">Discovery to production</span>{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">in four weeks.</em>
            </h1>
            <p className="max-w-lg text-base sm:text-lg text-white/50 leading-[1.65]">
              Fixed-scope engagements with defined deliverables, timelines, and
              operational visibility. No pilots that never end.
            </p>
          </div>
        </section>

        {/* Enterprise-ready strip */}
        <section className="pb-4">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="01"
              label="Enterprise Requirements, Day One"
              title={
                <>
                  Built for the checklist{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    your IT team will send us.
                  </em>
                </>
              }
            />
            <div ref={stripRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {enterpriseReadyItems.map((item) => (
                <div key={item.label} className="card-lift border border-white/10 bg-white/[0.025] p-6">
                  <div className="mb-3 flex items-center gap-2.5">
                    <item.icon size={15} strokeWidth={1.5} className="text-[#7ec8e3]/80" />
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-white/40">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 — The engagement clock */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="02"
              label="The Engagement Clock"
              title={
                <>
                  Four phases.{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    The line fills as you read.
                  </em>
                </>
              }
            />

            <div className="relative mx-auto mt-16 max-w-4xl">
              {/* Rail + scroll-drawn fill */}
              <div ref={railRef} className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/[0.08]">
                <div
                  ref={fillRef}
                  className="w-px bg-gradient-to-b from-[#7ec8e3] via-[#7ec8e3]/70 to-[#7ec8e3]/30 shadow-[0_0_12px_rgba(126,200,227,0.5)]"
                  style={{ height: "0%" }}
                />
              </div>

              <div className="space-y-20 sm:space-y-24">
                {timelineSteps.map((step) => (
                  <TimelinePhase key={step.phase} step={step} />
                ))}
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-4xl pl-14 sm:pl-18">
              <div className="flex items-baseline gap-3">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#7ec8e3]/70">
                  Fig. 02
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                  The four-week engagement — fixed scope, weekly demos, no pilot purgatory
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(126,200,227,0.08), transparent 65%)",
            }}
          />
          <div ref={ctaRef} className="container relative mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.12] text-white">
              Ready to scope{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">week one?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm sm:text-base text-white/45 leading-relaxed">
              One conversation to map the workflow and model the ROI. If it
              isn't a fit, we'll say so.
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white px-9 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_36px_-8px_rgba(126,200,227,0.6)]"
              >
                Talk to Our Team
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function TimelinePhase({ step }: { step: (typeof timelineSteps)[number] }) {
  const ref = useReveal(0.05);
  return (
    <div ref={ref} className="relative pl-14 sm:pl-18">
      {/* Node */}
      <div className="absolute left-0 sm:left-1.5 top-0.5">
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-[#7ec8e3]/30 bg-black">
          <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#7ec8e3]">
            {step.phase}
          </span>
        </div>
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-white">{step.label}</span>
        <span className="border border-white/10 px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.12em] text-[#7ec8e3]/80">
          {step.duration}
        </span>
      </div>

      <p className="mb-4 text-lg sm:text-xl font-medium tracking-[-0.01em] text-white/85">
        {step.headline}
      </p>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/45">{step.description}</p>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="border border-white/[0.08] bg-white/[0.02] p-5">
          <span className="mb-3 block font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/35">
            Key Activities
          </span>
          <ul className="space-y-2">
            {step.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-xs text-[#7ec8e3]/50">—</span>
                <span className="text-sm text-white/60">{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[#7ec8e3]/15 bg-[#7ec8e3]/[0.03] p-5">
          <span className="mb-3 block font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[#7ec8e3]/60">
            Outcome
          </span>
          <p className="text-sm leading-relaxed text-white/75">{step.outcome}</p>
        </div>
      </div>
    </div>
  );
}
