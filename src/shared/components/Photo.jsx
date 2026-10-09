import { Reveal } from "./Reveal";

export function Photo({ src, alt, delay = 0, className = "", imgClassName = "aspect-[4/3]" }) {
  return (
    <Reveal delay={delay} className={`group overflow-hidden rounded-card ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
        loading="lazy"
      />
    </Reveal>
  );
}
