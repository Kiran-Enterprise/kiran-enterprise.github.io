import { SectionHeading } from "@/shared/components";
import { site } from "@/shared/data/site";

export function HowItWorks() {
  return (
    <section data-nav="/sell" className="section-shell py-16 sm:py-20">
      <SectionHeading
        vertical="copper"
        title="Selling a laptop takes four steps"
        lede="Most people have a price in their hands within a few hours of messaging us."
      />
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {site.sellSteps.map((step, index) => (
          <li key={step.title} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold text-copper-600">
              Step {index + 1}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
