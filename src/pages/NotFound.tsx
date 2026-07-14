import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { NorfrontMark } from "@/components/NorfrontMark";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black noise-overlay">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle at 50% 45%, rgba(126,200,227,0.09), transparent 55%)",
          }}
        />
        <div className="relative px-6 text-center">
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background: "radial-gradient(circle at 50% 42%, rgba(126,200,227,0.45), transparent 68%)",
                filter: "blur(14px)",
              }}
            />
            <NorfrontMark className="relative h-14 w-auto opacity-90" />
          </div>
          <p className="mb-4 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.24em] text-white/40">
            404 — Not Found
          </p>
          <h1 className="mx-auto max-w-xl text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.12] text-white">
            This workflow{" "}
            <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">doesn't exist.</em>
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/45">
            The page you're looking for was moved, renamed, or never shipped.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_32px_-8px_rgba(126,200,227,0.55)]"
            >
              Back to Norfront
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
