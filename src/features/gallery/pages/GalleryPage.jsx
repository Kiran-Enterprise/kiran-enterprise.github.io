import { useCallback, useState } from "react";
import { PageIntro, Reveal } from "@/shared/components";
import { galleryCategories, galleryPhotos } from "@/shared/data/photos";
import { usePageMeta } from "@/shared/hooks";
import { CtaBand } from "@/features/home";
import { Lightbox } from "../components/Lightbox";

function GalleryPage() {
  usePageMeta("/gallery");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(null);

  const items = category === "all" ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === category);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <PageIntro
        title="What we buy and collect, from our storeroom"
        lede="Real photos from our Bengaluru storeroom: laptops, desktops, monitors, chargers and everything that comes with them."
      />

      <section className="section-shell pb-16 sm:pb-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
          {galleryCategories.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setCategory(item.key)}
              aria-pressed={category === item.key}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === item.key
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-paper text-ink-soft hover:border-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ul key={category} className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((photo, index) => (
            <Reveal as="li" key={photo.name} delay={(index % 6) * 70}>
              <button
                type="button"
                onClick={() => setOpen(index)}
                aria-label={`View photo: ${photo.alt}`}
                className="group block w-full overflow-hidden rounded-card"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </section>

      {open !== null && items[open] && (
        <Lightbox items={items} index={open} onClose={close} onIndex={setOpen} />
      )}

      <CtaBand />
    </>
  );
}

export default GalleryPage;
