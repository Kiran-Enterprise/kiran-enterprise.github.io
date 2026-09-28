import { Button, SectionHeading } from "@/shared/components";
import { site } from "@/shared/data/site";
import { photos } from "@/shared/data/photos";

export function WhatWeBuy() {
  return (
    <section data-nav="/sell" className="bg-surface">
      <div className="section-shell py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            vertical="copper"
            title="What we buy"
            lede="Laptops are the start of it. We buy the parts inside them and the machines around them too, from anyone with something to sell."
          />
          <Button to="/sell#quote" variant="copper" className="shrink-0">
            Get a price
          </Button>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.buyCategories.map((category) => (
            <li key={category.key} className="overflow-hidden rounded-card border border-line bg-paper">
              <img
                src={photos[category.photo]}
                alt={category.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-ink">{category.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-slate">{category.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink">Any condition</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate">
              The condition changes the price, not whether we want it.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {site.conditions.map((condition) => (
              <li key={condition.value} className="grid gap-1 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
                <h4 className="font-display text-base font-semibold text-ink">{condition.value}</h4>
                <p className="text-[15px] leading-relaxed text-slate">{condition.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
