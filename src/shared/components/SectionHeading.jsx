const RULES = {
  copper: "bg-copper-500",
  verdigris: "bg-verdigris-500",
  ink: "bg-ink",
};

export function SectionHeading({ title, lede, vertical = "ink", as: Tag = "h2" }) {
  return (
    <div className="max-w-2xl">
      <span className={`mb-5 block h-1 w-12 rounded-full ${RULES[vertical]}`} aria-hidden="true" />
      <Tag className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </Tag>
      {lede && <p className="mt-4 text-lg leading-relaxed text-slate">{lede}</p>}
    </div>
  );
}
