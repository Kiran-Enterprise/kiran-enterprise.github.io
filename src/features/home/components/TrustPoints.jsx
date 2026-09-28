import { SectionHeading } from "@/shared/components";
import { site } from "@/shared/data/site";

export function TrustPoints() {
  return (
    <section data-nav="/about" className="bg-surface">
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading
          title="Why people call us back"
          lede="Most of our pickups come from someone who was referred by a previous one."
        />
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {site.trust.map((point) => (
            <li key={point.title} className="border-l-2 border-ink pl-5">
              <h3 className="font-display text-xl font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
