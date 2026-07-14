import { Link } from "react-router-dom";
import { NorfrontMark } from "@/components/NorfrontMark";

export function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/10">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <div className="mb-4 flex items-start gap-3">
              <NorfrontMark className="mt-0.5 h-9 w-auto" />
              <div>
                <span className="text-lg font-semibold tracking-[-0.01em] text-white">Norfront Group</span>
                <span className="block font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.2em] text-white/35 mt-1">
                  AI Venture Holdings
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-xs">
              A holding company building specialized AI companies for enterprise operations. One vertical at a time.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-muted-foreground/40 block mb-4">Company</span>
            <nav className="flex flex-col gap-2.5">
              <Link to="/model" className="text-sm text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">Our Model</Link>
              <Link to="/case-studies" className="text-sm text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">Case Studies</Link>
              <Link to="/partners" className="text-sm text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">Portfolio</Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-muted-foreground/40 block mb-4">Work With Us</span>
            <nav className="flex flex-col gap-2.5">
              <Link to="/services" className="text-sm text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">How We Work</Link>
              <Link to="/contact" className="text-sm text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">Contact</Link>
              <Link to="/jobs" className="text-sm text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors">Careers</Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-muted-foreground/40 block mb-4">Contact</span>
            <a href="mailto:tomas.madero@norfront.group" className="text-sm text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors block mb-2">
              tomas.madero@norfront.group
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-muted-foreground/30">
            © {new Date().getFullYear()} Norfront Group. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-xs text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
