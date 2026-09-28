import { PageIntro, SectionHeading } from "@/shared/components";
import { site } from "@/shared/data/site";
import { photos } from "@/shared/data/photos";
import { usePageMeta } from "@/shared/hooks";
import { CtaBand } from "@/features/home";
import { PickupForm } from "../components/PickupForm";

const GALLERY = [
  { photo: photos.ewasteBench, alt: "Old keyboards, monitors and cables stacked on a bench" },
  { photo: photos.serverTech, alt: "A technician working inside a server rack" },
  { photo: photos.circuit, alt: "Close-up of components on a circuit board" },
];

function EwastePage() {
  usePageMeta("/e-waste");

  return (
    <>
      <PageIntro
        vertical="verdigris"
        title="E-waste disposal from your door to the certificate, end to end"
        lede="From a drawer of dead chargers to an office floor of retired workstations. We assess, collect, destroy data, sort for reuse, recycle through authorised partners and hand you the paperwork. There is nothing left for you to arrange."
      />


      <section className="bg-surface">
        <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <PickupForm />

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Ways we work</h2>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {site.ewasteServices.map((service) => (
                  <li key={service.title} className="py-4">
                    <h3 className="font-display text-base font-semibold text-ink">{service.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{service.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">What we accept</h2>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {site.ewasteGroups.map((group) => (
                  <div key={group.title} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
                    <dt className="font-display font-semibold text-ink">{group.title}</dt>
                    <dd className="text-[15px] leading-relaxed text-slate">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[15px] text-slate">
                Collected from {site.ewasteAudience.join(", ").toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {GALLERY.map((item) => (
            <img
              key={item.alt}
              src={item.photo}
              alt={item.alt}
              className="aspect-[4/3] w-full rounded-card object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          vertical="verdigris"
          title="Every step, handled by us"
          lede="Six stages. You are involved in the first and the last."
        />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.ewasteStages.map((stage, index) => (
            <li key={stage.title} className="border-t border-line pt-6">
              <span className="font-display text-sm font-semibold text-verdigris-600">
                Stage {index + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{stage.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{stage.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}

export default EwastePage;
