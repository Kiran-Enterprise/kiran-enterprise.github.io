import { Check } from "lucide-react";
import { Button } from "@/shared/components";
import { site } from "@/shared/data/site";
import { photos } from "@/shared/data/photos";

const PANELS = [
  {
    key: "copper",
    title: "Sell laptops and hardware",
    body: "Laptops, desktops, mini PCs, RAM, SSDs, hard drives and servers. From one piece to a storeroom full, working or not.",
    points: ["Payment at pickup, UPI or cash", "Every drive wiped in front of you", "Free doorstep collection"],
    cta: "Get a price",
    to: "/sell#quote",
    photo: photos.laptopOpen,
    alt: "A laptop half open on a grey desk",
    overlay: "from-copper-700 via-copper-700/92 to-copper-700/75 md:to-copper-700/35",
    check: "text-copper-200",
    button: "text-copper-700",
    delay: 120,
  },
  {
    key: "verdigris",
    title: "E-waste disposal, end to end",
    body: "We assess, collect, destroy data, sort for reuse, recycle through authorised partners and hand you a certificate. Nothing left for you to arrange.",
    points: ["Homes, offices and institutions", "Disposal certificate for businesses", "Nothing goes to landfill"],
    cta: "Book a pickup",
    to: "/e-waste#book",
    photo: photos.hddPile,
    alt: "A pile of old hard drive circuit boards",
    overlay: "from-verdigris-700 via-verdigris-700/92 to-verdigris-700/75 md:to-verdigris-700/35",
    check: "text-verdigris-200",
    button: "text-verdigris-700",
    delay: 220,
  },
];

export function Hero() {
  return (
    <section className="section-shell pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20">
      <div className="hero-rise max-w-4xl">
        <h1 className="font-display text-[2.6rem] leading-[1.02] font-bold tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl">
          Old hardware bought. E-waste cleared, end to end.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl">
          {site.brand.name} pays for the laptops and computer hardware you no longer use, and
          takes everything else off your hands responsibly. One call, one pickup, for homes and
          offices across {site.contact.city}.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
        {PANELS.map((panel) => (
          <article
            key={panel.key}
            style={{ animationDelay: `${panel.delay}ms` }}
            className="hero-rise relative overflow-hidden rounded-card text-white"
          >
            <img
              src={panel.photo}
              alt={panel.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${panel.overlay}`} aria-hidden="true" />
            <div className="relative p-7 sm:p-9 lg:p-11">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {panel.title}
              </h2>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/88">{panel.body}</p>
              <ul className="mt-6 space-y-2.5">
                {panel.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] text-white/92">
                    <Check size={18} className={`mt-0.5 shrink-0 ${panel.check}`} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button to={panel.to} variant="paper" size="lg" className={`mt-8 ${panel.button}`}>
                {panel.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
