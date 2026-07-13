import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./reveal";

type Status = "live" | "development" | "designed";

const brands: { name: string; vertical: string; status: Status; note: string }[] = [
  { name: "Pulsara", vertical: "Customer Operations", status: "live", note: "EN · Live" },
  { name: "Propera", vertical: "Professional Services", status: "live", note: "EN + DE · Live" },
  { name: "Tradara", vertical: "Logistics & Supply Chain", status: "development", note: "In development" },
  { name: "Audera", vertical: "Finance & Accounting", status: "designed", note: "Designed" },
  { name: "Covera", vertical: "Insurance", status: "designed", note: "Designed" },
  { name: "Legara", vertical: "Legal", status: "designed", note: "Designed" },
  { name: "Onvara", vertical: "HR / People Ops", status: "designed", note: "Designed" },
  { name: "Medivex", vertical: "Healthcare", status: "designed", note: "Designed" },
  { name: "Leasara", vertical: "Real Estate", status: "designed", note: "Designed" },
];

const dotStyles: Record<Status, string> = {
  live: "bg-[#7ec8e3] animate-pulse",
  development: "bg-[#D97706]",
  designed: "bg-white/25",
};

const noteStyles: Record<Status, string> = {
  live: "text-[#7ec8e3]",
  development: "text-[#D97706]",
  designed: "text-white/35",
};

// 02 — The holding's ledger: nine named brands, honest statuses.
export function PortfolioIndex() {
  const listRef = useReveal(0.1);

  return (
    <section className="bg-black py-16 sm:py-28">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          label="The Portfolio"
          title={
            <>
              Nine brands. Nine verticals.{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                One playbook.
              </em>
            </>
          }
          intro="Each brand owns a single enterprise workflow and nothing else. Focus is the moat."
        />

        <div ref={listRef} className="mt-14 border-t border-white/10">
          {brands.map((brand, i) => (
            <Link
              key={brand.name}
              to="/partners"
              className="group relative grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3.5rem_11rem_1fr_auto_2rem] items-center gap-3 sm:gap-6 border-b border-white/10 py-5 sm:py-6 px-2 sm:px-3 transition-all duration-300 hover:bg-white/[0.035] hover:pl-4 sm:hover:pl-5 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#7ec8e3]/0 before:transition-colors before:duration-300 hover:before:bg-[#7ec8e3]/70"
            >
              <span className="font-['JetBrains_Mono'] text-xs text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base sm:text-lg font-medium text-white tracking-[-0.01em]">
                {brand.name}
              </span>
              <span className="hidden sm:block text-sm text-white/40">{brand.vertical}</span>
              <span className="flex items-center gap-2.5 justify-self-end">
                <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[brand.status]}`} />
                <span className={`font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] ${noteStyles[brand.status]}`}>
                  {brand.note}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="hidden sm:block text-white/0 group-hover:text-white/60 transition-colors justify-self-end"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/partners"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Explore the portfolio
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
