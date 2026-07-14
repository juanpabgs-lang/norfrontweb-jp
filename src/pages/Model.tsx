import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Globe, Repeat, Shield, TrendingUp, Users } from "lucide-react";
import { SectionHeading } from "@/components/home2/SectionHeading";
import { useReveal } from "@/components/home2/reveal";
import { NorfrontMark } from "@/components/NorfrontMark";

const advantages = [
  {
    icon: Layers,
    title: "One brand per vertical",
    description: "Each subsidiary focuses on a single enterprise workflow domain — learning the buyer's language, compliance environment, and integration requirements deeply. One product, one problem, one market at a time.",
  },
  {
    icon: Repeat,
    title: "Shared engineering, compounding returns",
    description: "Classification engines, RAG pipelines, orchestration patterns, and deployment playbooks are shared across brands. Every new vertical leverages everything built before — reducing cost and time-to-production with each launch.",
  },
  {
    icon: Globe,
    title: "Local language, local teams",
    description: "Enterprise buyers in Italy, Germany, or Latin America need systems that handle their language, regulations, and business culture. We deploy local teams who speak the language and understand the market.",
  },
  {
    icon: Shield,
    title: "Client ownership, not vendor lock-in",
    description: "The deployed system, data, and infrastructure belong to the client. We build it, hand it over, and offer ongoing optimization. No recurring SaaS trap. No platform dependency.",
  },
  {
    icon: TrendingUp,
    title: "Automated distribution at launch",
    description: "Each brand enters the market with automated industry content — building authority, credibility, and inbound pipeline before the first outbound call. GTM multiplier, not core product.",
  },
  {
    icon: Users,
    title: "Repeatable launch playbook",
    description: "Brand identity, positioning, website, content engine, and pipeline development follow a tested sequence. We launch a new vertical brand in weeks, not months.",
  },
];

type SystemStatus = "live" | "reference" | "development" | "designed";

const systems: { name: string; vertical: string; status: SystemStatus; note: string }[] = [
  { name: "Pulsara", vertical: "Customer Operations", status: "live", note: "600+ stores · 94.2% acc · 10,000+ processed" },
  { name: "Propera", vertical: "Professional Services", status: "live", note: "EN + DE · in production" },
  { name: "Audera", vertical: "Finance & Accounting", status: "reference", note: "Carriage Services (US) · $21K/yr · 50 hrs/mo" },
  { name: "Tradara", vertical: "Logistics & Supply Chain", status: "development", note: "first deployment in build" },
  { name: "Covera", vertical: "Insurance", status: "designed", note: "branded · positioned · ready" },
  { name: "Legara", vertical: "Legal", status: "designed", note: "branded · positioned · ready" },
  { name: "Onvara", vertical: "HR / People Ops", status: "designed", note: "branded · positioned · ready" },
  { name: "Medivex", vertical: "Healthcare", status: "designed", note: "branded · positioned · ready" },
  { name: "Leasara", vertical: "Real Estate", status: "designed", note: "branded · positioned · ready" },
];

const statusMeta: Record<SystemStatus, { label: string; dot: string; text: string }> = {
  live: { label: "Live", dot: "bg-[#7ec8e3] animate-pulse", text: "text-[#7ec8e3]" },
  reference: { label: "Reference", dot: "bg-[#34d399]", text: "text-[#34d399]" },
  development: { label: "In Dev", dot: "bg-[#D97706]", text: "text-[#D97706]" },
  designed: { label: "Designed", dot: "bg-white/25", text: "text-white/35" },
};

export default function Model() {
  const heroRef = useReveal();
  const problemRef = useReveal(0.1);
  const advRef = useReveal(0.1);
  const statusRef = useReveal(0.1);
  const ctaRef = useReveal();

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
                Our Model
              </span>
            </p>
            <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-[3.4rem] font-medium tracking-[-0.025em] leading-[1.06] mb-7">
              <span className="headline-sheen">How the group</span>{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">operates.</em>
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-white/50 leading-[1.65]">
              Norfront builds and operates specialized AI companies for
              enterprise workflows. Each brand targets one operational
              bottleneck. Shared infrastructure means every new vertical
              launches faster and cheaper than the last.
            </p>
          </div>
        </section>

        {/* 01 — The problem, stated as numbers */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="01"
              label="The Gap"
              title={
                <>
                  Everyone adopted AI.{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    Almost nobody profits from it.
                  </em>
                </>
              }
            />
            <div ref={problemRef} className="mt-14 grid grid-cols-1 lg:grid-cols-2 border-y border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
              <div className="px-6 py-10 sm:py-12 text-center">
                <div className="text-5xl sm:text-[3.4rem] font-light tracking-[-0.03em] leading-none text-white [text-shadow:0_0_44px_rgba(126,200,227,0.35)]">
                  76%
                </div>
                <p className="mt-4 text-sm font-medium text-white/85">of enterprises have adopted AI</p>
                <p className="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-white/35">
                  Horizontal tools, generic copilots, pilots that never leave the lab
                </p>
              </div>
              <div className="px-6 py-10 sm:py-12 text-center">
                <div className="text-5xl sm:text-[3.4rem] font-light tracking-[-0.03em] leading-none text-[#7ec8e3] [text-shadow:0_0_44px_rgba(126,200,227,0.45)]">
                  1%
                </div>
                <p className="mt-4 text-sm font-medium text-white/85">report real operational returns</p>
                <p className="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-white/35">
                  The gap is vertical depth: language, compliance, integrations, workflow ownership
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-sm text-white/45 leading-relaxed">
              Most implementations apply the same generic approach to every
              industry. The result: months of customization, no accounting for
              local compliance or language, and systems nobody operates. Our
              answer — one specialized brand per workflow, backed by one shared
              engineering core.
            </p>
          </div>
        </section>

        {/* 02 — Why the structure wins */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="02"
              label="Why This Structure"
              title={
                <>
                  Six advantages,{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    one design decision.
                  </em>
                </>
              }
            />
            <div ref={advRef} className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {advantages.map((adv, i) => (
                <div key={adv.title} className="card-lift border border-white/10 bg-white/[0.025] p-7 sm:p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center border border-white/12">
                      <adv.icon size={15} strokeWidth={1.5} className="text-[#7ec8e3]/80" />
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.18em] text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-medium tracking-tight text-white">{adv.title}</h3>
                  <p className="text-sm leading-relaxed text-white/45">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — System status board */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="03"
              label="Where We Are Today"
              title={
                <>
                  The holding,{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    read like a status page.
                  </em>
                </>
              }
            />
            <div ref={statusRef} className="mt-14 border border-white/10 bg-[#09090b]">
              {/* Status board chrome */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-4 sm:px-5 py-3">
                <span className="flex items-center gap-2">
                  <NorfrontMark className="h-3 w-auto" />
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-white/45">
                    norfront.group / status
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
                  <span className="hidden sm:inline font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/40">
                    All systems operational
                  </span>
                </span>
              </div>
              {systems.map((s) => {
                const meta = statusMeta[s.status];
                return (
                  <div
                    key={s.name}
                    className="grid grid-cols-[7rem_auto_1fr] sm:grid-cols-[9rem_11rem_1fr_auto] items-center gap-3 sm:gap-6 border-b border-white/[0.05] px-4 sm:px-5 py-3.5 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="text-sm font-medium text-white">{s.name}</span>
                    <span className="hidden sm:block text-xs text-white/40">{s.vertical}</span>
                    <span className="hidden sm:block font-['JetBrains_Mono'] text-[10px] text-white/30 truncate">
                      {s.note}
                    </span>
                    <span className="flex items-center gap-2 justify-self-end">
                      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                      <span className={`font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] ${meta.text}`}>
                        {meta.label}
                      </span>
                    </span>
                  </div>
                );
              })}
              <div className="px-4 sm:px-5 py-3">
                <span className="font-['JetBrains_Mono'] text-[9px] text-white/25">
                  shared infrastructure: classification engines · RAG pipelines · deployment playbooks — built, in production
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#7ec8e3]/70">
                Fig. 03
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                Group status — every claim on this board is verifiable in a call
              </span>
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
              Interested in{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">the model?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm sm:text-base text-white/45 leading-relaxed">
              Enterprise buyer, investor, or partner — we'll walk you through
              the structure and show you the systems running.
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white px-9 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_36px_-8px_rgba(126,200,227,0.6)]"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
