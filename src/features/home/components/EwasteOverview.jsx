import { Button, SectionHeading } from "@/shared/components";
import { site } from "@/shared/data/site";
import { photos } from "@/shared/data/photos";

export function EwasteOverview() {
  return (
    <section data-nav="/e-waste" className="section-shell py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            vertical="verdigris"
            title="E-waste disposal, handled end to end"
            lede="From the first phone call to the certificate in your file. We do every step in between, so you do not need a second vendor."
          />
          <ol className="mt-8 space-y-4">
            {site.ewasteStages.map((stage, index) => (
              <li key={stage.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-verdigris-100 font-display text-sm font-bold text-verdigris-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{stage.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button to="/e-waste#book" variant="verdigris" className="mt-8">
            Book a pickup
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <img
            src={photos.ewastePile}
            alt="A heap of discarded computers, monitors and printers"
            className="aspect-[4/3] w-full rounded-card object-cover lg:aspect-[16/10]"
            loading="lazy"
          />
          <div className="rounded-card bg-verdigris-50 p-6">
            <h3 className="font-display text-lg font-semibold text-ink">What we collect</h3>
            <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-[15px] text-slate sm:grid-cols-2">
              {site.ewasteGroups.flatMap((group) => group.items).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate">
              From {site.ewasteAudience.join(", ").toLowerCase()}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
