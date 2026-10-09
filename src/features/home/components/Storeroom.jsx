import { Button, Photo, SectionHeading } from "@/shared/components";
import { shopPhotos } from "@/shared/data/photos";

const SHOTS = [
  { photo: shopPhotos.laptopsInRows, alt: "Used laptops stacked in rows along a wall", span: "sm:col-span-2 sm:row-span-2" },
  { photo: shopPhotos.desktopTable, alt: "Desktop CPUs and monitors stacked on a table" },
  { photo: shopPhotos.optiplexShelf, alt: "Dell Optiplex desktops on a shelf" },
  { photo: shopPhotos.oldMonitors, alt: "Old monitors laid out on the floor for sorting" },
  { photo: shopPhotos.laptopsCorner, alt: "A corner of the storeroom packed with laptops" },
  { photo: shopPhotos.laptopsOnShelf, alt: "Laptops lined up on a shelf" },
];

export function Storeroom() {
  return (
    <section data-nav="/about" className="section-shell py-16 sm:py-20">
      <SectionHeading
        title="Inside our storeroom"
        lede="Laptops, desktops, monitors and parts, sorted by what can be reused and what goes to recycling."
      />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {SHOTS.map((shot, index) => (
          <li key={shot.alt} className={shot.span ?? ""}>
            <Photo
              src={shot.photo}
              alt={shot.alt}
              delay={index * 90}
              className="h-full"
              imgClassName="h-full min-h-40"
            />
          </li>
        ))}
      </ul>
      <Button to="/gallery" variant="outline" className="mt-8">
        View full gallery
      </Button>
    </section>
  );
}
