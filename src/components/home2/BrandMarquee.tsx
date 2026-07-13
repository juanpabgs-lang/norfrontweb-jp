const brands = [
  { name: "Pulsara", live: true },
  { name: "Propera", live: true },
  { name: "Tradara", live: false },
  { name: "Audera", live: false },
  { name: "Covera", live: false },
  { name: "Legara", live: false },
  { name: "Onvara", live: false },
  { name: "Medivex", live: false },
  { name: "Leasara", live: false },
];

// Vercel puts its customers' logos under the hero. Our credibility strip is
// better: the nine companies we built. Slow marquee, live brands lit.
export function BrandMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-black py-5">
      <div className="flex w-max animate-scroll-x items-center gap-14 pr-14">
        {[...brands, ...brands].map((brand, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span
              className={`h-1 w-1 rounded-full ${brand.live ? "bg-[#7ec8e3]" : "bg-white/15"}`}
            />
            <span
              className={`text-lg font-medium tracking-[-0.01em] ${
                brand.live ? "text-white/75" : "text-white/25"
              }`}
            >
              {brand.name}
            </span>
            {brand.live && (
              <span className="font-['JetBrains_Mono'] text-[8px] uppercase tracking-[0.16em] text-[#7ec8e3]/70">
                Live
              </span>
            )}
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
