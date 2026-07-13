import { useEffect, useRef } from "react";

// Calm, editorial reveal: small rise + fade, no blur, no overshoot.
// Fail-safe by design: reveal is class-based with a hard timeout fallback,
// so content can never be stuck invisible if the observer misbehaves.
export function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal2");
    el.style.transitionDelay = `${delay}s`;

    const show = () => {
      el.classList.add("reveal2-visible");
      el.style.transitionDelay = "";
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    // Belt and braces: whatever happens, content shows within 1.2s of mount
    // once it is inside the viewport, and always after 2.5s.
    const fallback = window.setTimeout(show, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return ref;
}
