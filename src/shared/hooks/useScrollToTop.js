import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 88;

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (!target) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        return;
      }
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, left: 0, behavior: "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
}
