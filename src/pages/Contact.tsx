import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useReveal } from "@/components/home2/reveal";

const nextSteps = [
  {
    step: "01",
    title: "We read it the same day",
    detail: "Your message goes to the people who build, not a sales queue.",
  },
  {
    step: "02",
    title: "Scope assessment in 1–2 days",
    detail: "A preliminary read on fit, approach, and what four weeks buys.",
  },
  {
    step: "03",
    title: "One call to decide",
    detail: "If it's a fit, we scope week one. If it isn't, we say so and save you the quarter.",
  },
];

const inputClass =
  "bg-white/[0.03] border-white/12 rounded-none h-11 text-sm text-white placeholder:text-white/25 focus:border-[#7ec8e3]/50 focus-visible:ring-[#7ec8e3]/20 transition-colors";

export default function Contact() {
  const { toast } = useToast();
  const leftRef = useReveal();
  const formRef = useReveal(0.15);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzavgqp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "Message received", description: "We'll be in touch soon." });
        setFormData({ name: "", email: "", company: "", problem: "" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <div className="relative bg-black noise-overlay">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 20% 0%, rgba(126,200,227,0.08), transparent 62%), radial-gradient(ellipse 45% 40% at 90% 90%, rgba(126,200,227,0.05), transparent 65%)",
          }}
        />

        <section className="relative z-10 flex min-h-screen items-center px-0 py-28 sm:py-36">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
              {/* Left — the pitch and the promise */}
              <div ref={leftRef} className="lg:col-span-5 flex flex-col justify-center">
                <p className="mb-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#7ec8e3]/60" />
                  <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Contact
                  </span>
                </p>
                <h1 className="mb-5 text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.1]">
                  <span className="headline-sheen">Tell us which workflow</span>{" "}
                  <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">is breaking.</em>
                </h1>
                <p className="mb-10 text-sm sm:text-base leading-relaxed text-white/50">
                  Describe the operational bottleneck — the manual process
                  costing you the most time, money, or errors.
                </p>

                {/* What happens next */}
                <div className="space-y-0 border-t border-white/10">
                  {nextSteps.map((s) => (
                    <div key={s.step} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/[0.07] py-4">
                      <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.16em] text-[#7ec8e3]">
                        {s.step}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">{s.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-white/40">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm text-white/40">
                  Or email directly:{" "}
                  <a
                    href="mailto:tomas.madero@norfront.group"
                    className="text-white/70 underline underline-offset-4 decoration-white/20 transition-colors hover:text-[#7ec8e3] hover:decoration-[#7ec8e3]/40"
                  >
                    tomas.madero@norfront.group
                  </a>
                </p>
              </div>

              {/* Right — the form, glass */}
              <div ref={formRef} className="lg:col-span-6 lg:col-start-7">
                <div className="border border-white/10 bg-white/[0.02] p-7 sm:p-9 backdrop-blur-sm">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-white/40">
                      Scope Request
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7ec8e3] animate-pulse" />
                      <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/35">
                        1–2 day response
                      </span>
                    </span>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-medium tracking-wide text-white/70">Name</Label>
                        <Input
                          id="name" name="name" value={formData.name} onChange={handleChange}
                          placeholder="Your name" required
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-medium tracking-wide text-white/70">Email</Label>
                        <Input
                          id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                          placeholder="you@company.com" required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs font-medium tracking-wide text-white/70">Company</Label>
                      <Input
                        id="company" name="company" value={formData.company} onChange={handleChange}
                        placeholder="Your company name"
                        className={inputClass}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="problem" className="text-xs font-medium tracking-wide text-white/70">The workflow</Label>
                      <Textarea
                        id="problem" name="problem" value={formData.problem} onChange={handleChange}
                        placeholder="What manual process is costing you the most time, money, or errors?" rows={5} required
                        className={`${inputClass} h-auto resize-none`}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-none bg-white text-sm font-medium text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_32px_-8px_rgba(126,200,227,0.55)]"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                      <ArrowRight size={16} />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
