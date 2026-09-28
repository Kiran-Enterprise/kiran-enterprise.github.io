import { PageIntro } from "@/shared/components";
import { site } from "@/shared/data/site";
import { photos } from "@/shared/data/photos";
import { usePageMeta } from "@/shared/hooks";
import { CtaBand } from "@/features/home";
import { QuoteForm } from "../components/QuoteForm";

function SellPage() {
  usePageMeta("/sell");

  return (
    <>
      <PageIntro
        vertical="copper"
        title="Sell your laptops and hardware, whatever state they are in"
        lede="Laptops, desktops, mini PCs, RAM, SSDs, hard drives, servers and parts. Working, slow, damaged or dead. One piece or a storeroom full. Tell us what you have and we send a price the same day."
      />

      <section className="section-shell grid gap-10 pb-16 sm:pb-20 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <QuoteForm />

        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Who we buy from</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {site.sellers.map((seller) => (
                <li key={seller} className="py-3 text-[15px] text-ink-soft">
                  {seller}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">What sets the price</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {site.priceFactors.map((factor) => (
                <li key={factor} className="py-3 text-[15px] text-ink-soft">
                  {factor}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-slate">
              A photo of the device and the sticker on it is usually enough for us to quote.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">On the day</h2>
            <ol className="mt-4 space-y-4">
              {site.sellSteps.slice(2).map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper-100 font-display text-sm font-bold text-copper-700">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-card bg-copper-50 p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Selling in bulk?</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              Offices, IT teams and dealers get a single quote for the lot, an invoice for the books
              and a serial-numbered wipe record for every drive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="section-shell py-16 sm:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything we buy
          </h2>
          <ul className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {site.buyCategories.map((category) => (
              <li key={category.key} className="relative overflow-hidden rounded-card">
                <img
                  src={photos[category.photo]}
                  alt={category.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 pt-10 pb-3 font-display text-base font-semibold text-white sm:text-lg">
                  {category.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default SellPage;
