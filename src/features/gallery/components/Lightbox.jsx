import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index];
  const count = items.length;

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % count);
      if (event.key === "ArrowLeft") onIndex((index - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, count, onClose, onIndex]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 p-4 sm:p-8"
      style={{ animation: "fade-in 0.25s ease-out both" }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={22} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onIndex((index - 1 + count) % count);
        }}
        aria-label="Previous photo"
        className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onIndex((index + 1) % count);
        }}
        aria-label="Next photo"
        className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
      <figure
        key={item.name}
        className="flex max-h-full max-w-5xl flex-col items-center gap-3"
        style={{ animation: "lightbox-in 0.3s cubic-bezier(0.2, 0.7, 0.2, 1) both" }}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={item.src} alt={item.alt} className="max-h-[78vh] w-auto max-w-full rounded-card object-contain" />
        <figcaption className="text-center text-sm text-white/80">
          {item.alt} · {index + 1} / {count}
        </figcaption>
      </figure>
    </div>
  );
}
