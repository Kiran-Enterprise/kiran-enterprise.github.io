import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useSectionNav() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.4;
      let current = null;
      for (const el of document.querySelectorAll("[data-nav]")) {
        if (el.getBoundingClientRect().top <= threshold) current = el.dataset.nav;
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return active;
}
