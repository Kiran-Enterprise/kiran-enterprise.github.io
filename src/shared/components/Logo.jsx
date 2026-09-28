import { site } from "@/shared/data/site";

export function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="2" y="2" width="18" height="18" rx="5" fill="var(--color-copper-500)" />
        <rect
          x="12"
          y="12"
          width="18"
          height="18"
          rx="5"
          fill="var(--color-verdigris-500)"
          fillOpacity="0.94"
        />
      </svg>
      <span
        className={`font-display text-[17px] font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
        {site.brand.name}
      </span>
    </span>
  );
}
