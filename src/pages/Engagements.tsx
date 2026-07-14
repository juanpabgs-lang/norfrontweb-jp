import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Database } from "lucide-react";
import { SectionHeading } from "@/components/home2/SectionHeading";
import { useReveal } from "@/components/home2/reveal";
import geminiLogo from "@/assets/Gemini.png";
import jsLogo from "@/assets/javascipt.png";
import salesforceLogo from "@/assets/salesforce.png";
import sqlLogo from "@/assets/sql (1).png";

const scope = [
  {
    number: "01",
    title: "Intake Pipeline",
    detail: "Ticket + complaint intake and categorization pipeline with automated routing based on issue type, severity, and location.",
  },
  {
    number: "02",
    title: "Intelligence Dashboard",
    detail: "Centralized dashboard with filtering, trend analysis, and resolution metrics across all retail locations.",
  },
  {
    number: "03",
    title: "Escalation Engine",
    detail: "Automated reporting and escalation workflows that flag unresolved issues and notify stakeholders in real time.",
  },
];

const outcomes = [
  { metric: "94.2%", label: "Classification accuracy", detail: "Automated, across 26 complaint categories" },
  { metric: "87%", label: "Less manual triage", detail: "Per ticket, measured in production" },
  { metric: "92%", label: "First-touch routing", detail: "To the correct department, no human touch" },
];

const performanceStats = [
  { metric: "<200ms", label: "Classification speed per complaint" },
  { metric: "10,000+", label: "Complaints processed, zero manual compilation" },
  { metric: "Real-time", label: "Dashboards replacing weekly manual reports" },
];

/** Matches investor deck: Gemini · Oracle DB · SQL · JavaScript · Salesforce */
const techLogos = [
  { name: "Gemini", kind: "img" as const, src: geminiLogo },
  { name: "Oracle DB", kind: "icon" as const, Icon: Database },
  { name: "SQL", kind: "img" as const, src: sqlLogo },
  { name: "JavaScript", kind: "img" as const, src: jsLogo },
  { name: "Salesforce", kind: "img" as const, src: salesforceLogo },
];

export default function Engagements() {
  const heroRef = useReveal();
  const beforeAfterRef = useReveal(0.1);
  const resultsRef = useReveal(0.1);
  const econRef = useReveal(0.1);
  const scopeRef = useReveal(0.1);
  const embedRef = useReveal(0.1);
  const scaleRef = useReveal(0.1);
  const ctaRef = useReveal();

  return (
    <Layout>
      <div className="bg-black">
        {/* Hero — the client's number leads */}
        <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-16 noise-overlay">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 55% 45% at 30% 0%, rgba(126,200,227,0.08), transparent 62%)",
            }}
          />
          <div ref={heroRef} className="container relative mx-auto px-5 sm:px-6 lg:px-8">
            <p className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#7ec8e3]/60" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.24em] text-white/45">
                Case Study — Flagship Engagement
              </span>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-medium tracking-[-0.025em] leading-[1.06] mb-6">
                  <span className="headline-sheen">Pulsara × Vision Group:</span>{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">
                    600 stores, zero manual compilation.
                  </em>
                </h1>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="border border-white/12 px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.12em] text-white/50">
                    Customer Operations
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-white/35">Milan, Italy</span>
                  <span className="text-white/15">·</span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-white/35">600+ stores</span>
                  <span className="text-white/15">·</span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-white/35">4-week deployment</span>
                </div>
                <p className="max-w-2xl text-base sm:text-lg text-white/50 leading-[1.65]">
                  Pulsara — a Norfront Group company — deployed an AI complaint
                  intelligence system for Italy's largest optical retail
                  network. Thousands of daily complaints, classified across 26
                  categories, routed to the right team with real-time
                  operational visibility.
                </p>
              </div>
              {/* The number the CFO reads first */}
              <div className="lg:col-span-4 border-l-2 border-[#7ec8e3]/40 pl-6 pb-2">
                <div className="text-5xl sm:text-[3.6rem] font-light tracking-[-0.03em] leading-none text-white [text-shadow:0_0_44px_rgba(126,200,227,0.4)]">
                  €364K
                </div>
                <p className="mt-3 text-sm font-medium text-white/85">Projected annual labor savings</p>
                <p className="mt-1 font-['JetBrains_Mono'] text-[10px] text-white/35">
                  10× return on engagement cost, year one
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech strip */}
        <div className="relative overflow-hidden border-y border-white/[0.07] py-5">
          <div className="flex w-max animate-scroll-x items-center">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex shrink-0 items-center gap-16 pr-16">
                {techLogos.map((logo, i) => (
                  <div key={`${setIndex}-${i}`} className="flex items-center gap-3 opacity-40 grayscale transition-opacity duration-300 hover:opacity-80" title={logo.name}>
                    {logo.kind === "img" ? (
                      <img src={logo.src} alt={logo.name} className="h-8 w-auto object-contain" />
                    ) : (
                      <logo.Icon className="h-7 w-7 text-white/70" strokeWidth={1.25} aria-hidden />
                    )}
                    <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em] text-white/50">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
        </div>

        {/* 01 — Before / After */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="01"
              label="The Transformation"
              title={
                <>
                  From inbox chaos{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    to routed intelligence.
                  </em>
                </>
              }
            />
            <div ref={beforeAfterRef} className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="border border-white/10 bg-white/[0.015] p-7 sm:p-9">
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f87171]/70" />
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Before — Manual Process
                  </span>
                </div>
                <p className="text-sm leading-[1.8] text-white/50">
                  Complaints were manually intaken through Salesforce and
                  responded to by service representatives in Italy or abroad —
                  no structured categorization, no priority scoring, no routing
                  logic. Weekly reports compiled by hand.
                </p>
              </div>
              <div className="card-lift border border-[#7ec8e3]/20 bg-[#7ec8e3]/[0.03] p-7 sm:p-9">
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7ec8e3] animate-pulse" />
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#7ec8e3]/80">
                    After — Automated Intelligence
                  </span>
                </div>
                <p className="mb-4 text-sm leading-[1.8] text-white/60">
                  Complaints arrive and are instantly classified across 26
                  categories (94.2% accuracy). Each ticket is scored for
                  urgency (1–5) and auto-routed to the correct department.
                </p>
                <p className="text-sm leading-[1.8] text-white/60">
                  AI semantic analysis via RAG pipeline handles edge cases and
                  enriches classification for ambiguous complaints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Results */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="02"
              label="Results & Impact"
              title={
                <>
                  Measured in production,{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    not in a slide deck.
                  </em>
                </>
              }
            />
            <div ref={resultsRef} className="mt-14 grid grid-cols-1 sm:grid-cols-3 border-y border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
              {outcomes.map((item) => (
                <div key={item.label} className="px-6 py-10 sm:py-12 text-center">
                  <div className="text-5xl sm:text-[3.2rem] font-light tracking-[-0.03em] leading-none text-white [text-shadow:0_0_44px_rgba(126,200,227,0.4)]">
                    {item.metric}
                  </div>
                  <p className="mt-4 text-sm font-medium text-white/85">{item.label}</p>
                  <p className="mx-auto mt-1 max-w-[15rem] text-xs leading-relaxed text-white/35">{item.detail}</p>
                </div>
              ))}
            </div>
            <div ref={econRef} className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {performanceStats.map((item) => (
                <div key={item.label} className="card-lift border border-white/10 bg-white/[0.02] px-6 py-6">
                  <div className="font-['JetBrains_Mono'] text-xl text-[#7ec8e3]">{item.metric}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-white/30">
              All metrics from this single production deployment. We do not
              aggregate or average across engagements.
            </p>
          </div>
        </section>

        {/* 03 — Scope of work */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="03"
              label="Scope of Work"
              title={
                <>
                  Three systems,{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    one deployment.
                  </em>
                </>
              }
            />
            <div ref={scopeRef} className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-3">
              {scope.map((item) => (
                <div key={item.number} className="card-lift border border-white/10 bg-white/[0.025] p-7 sm:p-8">
                  <span className="mb-4 block font-['JetBrains_Mono'] text-[10px] tracking-[0.18em] text-[#7ec8e3]">
                    {item.number}
                  </span>
                  <h3 className="mb-3 text-base font-medium tracking-tight text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/45">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — The workflow, explorable */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="04"
              label="The Workflow"
              title={
                <>
                  Explore the system{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    as it actually runs.
                  </em>
                </>
              }
            />
            <div ref={embedRef} className="mt-14 border border-white/10 bg-[#09090b] overflow-hidden">
              <div className="flex items-center gap-4 border-b border-white/[0.07] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                  vision-group / complaint-intelligence-workflow
                </span>
              </div>
              <iframe
                className="w-full"
                style={{ border: "none", height: "min(560px, 60vw)" }}
                src="https://embed.figma.com/board/nmcwJLyN04a0cnaRgRhnfe/Vision-Group-%E2%80%93-Complaint-Intelligence-Workflow?node-id=0-1&embed-host=share"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#7ec8e3]/70">
                Fig. 04
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                Interactive — scroll and zoom to trace a complaint from intake to resolution
              </span>
            </div>
          </div>
        </section>

        {/* Built to scale */}
        <section className="py-16 sm:py-20">
          <div ref={scaleRef} className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="relative border-l-2 border-[#7ec8e3]/40 pl-6 sm:pl-8 max-w-3xl">
              <p className="text-lg sm:text-xl leading-[1.7] text-white/70">
                This deployment is the template. The classification engine, RAG
                pipeline, and orchestration patterns built here form the{" "}
                <em className="font-['Playfair_Display'] italic text-white/90">shared infrastructure</em>{" "}
                every future Norfront vertical inherits.
              </p>
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
              Have a similar{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">
                workflow bottleneck?
              </em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm sm:text-base text-white/45 leading-relaxed">
              We'll scope a discovery engagement and show you what a four-week
              deployment looks like for your operation.
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white px-9 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_36px_-8px_rgba(126,200,227,0.6)]"
              >
                Discuss Your Requirements
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
