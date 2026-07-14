import { Layout } from "@/components/layout/Layout";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/home2/SectionHeading";
import { useReveal } from "@/components/home2/reveal";

const roles = [
  {
    title: "Business Development Representative",
    type: "Contract",
    location: "Remote — Europe",
    description: "Source and qualify enterprise leads across Southern Europe. Commission-based with base.",
  },
  {
    title: "Head of Sales",
    type: "Contract",
    location: "Remote — Europe",
    description: "Lead our enterprise sales pipeline end-to-end. Ideal for senior sales professionals who want equity upside in a high-growth AI company.",
  },
  {
    title: "Sales Representative",
    type: "Contract",
    location: "Remote — US",
    description: "Drive new business in the US market, focusing on mid-market and enterprise accounts.",
  },
  {
    title: "Technical Advisor",
    type: "Advisory",
    location: "Remote",
    description: "Advise on AI architecture, automation, and enterprise integration strategy. Part-time commitment.",
  },
];

const inputClass =
  "bg-white/[0.03] border-white/12 rounded-none h-11 text-sm text-white placeholder:text-white/25 focus:border-[#7ec8e3]/50 focus-visible:ring-[#7ec8e3]/20 transition-colors";

export default function Jobs() {
  const { toast } = useToast();
  const heroRef = useReveal();
  const rolesRef = useReveal(0.1);
  const formRef = useReveal(0.1);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setFormData((prev) => ({ ...prev, role: roleTitle }));
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdawrvqo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "Application sent", description: "We'll review your application and be in touch." });
        setFormData({ name: "", email: "", role: "", message: "" });
        setSelectedRole(null);
      } else {
        toast({ title: "Something went wrong", description: "Please try again or email us directly at tomas.madero@norfront.group.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us directly at tomas.madero@norfront.group.", variant: "destructive" });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="bg-black">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-16 noise-overlay">
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
                Careers
              </span>
            </p>
            <h1 className="max-w-3xl text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.06] mb-7">
              <span className="headline-sheen">Build companies</span>{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">that ship.</em>
            </h1>
            <p className="max-w-lg text-base sm:text-lg text-white/50 leading-[1.65]">
              Nine vertical brands, production-proven systems, local-market
              deployment. If you want to build real things that reach real
              operations, we want to talk.
            </p>
          </div>
        </section>

        {/* Open roles — the ledger */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              index="01"
              label="Open Roles"
              title={
                <>
                  Four seats,{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                    all builders.
                  </em>
                </>
              }
            />
            <div ref={rolesRef} className="mt-12 border-t border-white/10">
              {roles.map((role, i) => (
                <div
                  key={role.title}
                  className="group relative grid grid-cols-1 gap-4 border-b border-white/10 py-6 transition-all duration-300 hover:bg-white/[0.025] hover:pl-4 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#7ec8e3]/0 before:transition-colors before:duration-300 hover:before:bg-[#7ec8e3]/70"
                >
                  <span className="hidden font-['JetBrains_Mono'] text-xs text-white/25 sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-base sm:text-lg font-medium text-white">{role.title}</h3>
                      <span className="border border-white/10 px-2 py-0.5 font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.14em] text-white/45">
                        {role.type}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/45">{role.description}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/30">
                        <MapPin size={10} /> {role.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/30">
                        <Clock size={10} /> Start now
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply(role.title)}
                    className="inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#7ec8e3]/50 hover:bg-white/[0.04] hover:shadow-[0_0_20px_-6px_rgba(126,200,227,0.4)]"
                  >
                    Apply
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply-form" className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div ref={formRef} className="mx-auto max-w-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-9 backdrop-blur-sm">
              <div className="mb-7 flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Application
                </span>
                {selectedRole && (
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[#7ec8e3]">
                    {selectedRole}
                  </span>
                )}
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-medium tracking-wide text-white/70">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-medium tracking-wide text-white/70">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required className={inputClass} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="role" className="text-xs font-medium tracking-wide text-white/70">Role</Label>
                  <Input id="role" name="role" value={formData.role} onChange={handleChange} placeholder="Which role are you applying for?" required className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-medium tracking-wide text-white/70">Why you</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="A few lines on what you've built or sold, and a link (LinkedIn, portfolio, anything real)." rows={5} required className={`${inputClass} h-auto resize-none`} />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-none bg-white text-sm font-medium text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_32px_-8px_rgba(126,200,227,0.55)]"
                >
                  {isSubmitting ? "Sending…" : "Submit Application"}
                  <ArrowRight size={16} />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
