const RULES = {
  copper: "bg-copper-500",
  verdigris: "bg-verdigris-500",
  ink: "bg-ink",
};

export function PageIntro({ title, lede, vertical = "ink", children }) {
  return (
    <section className="section-shell pt-12 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-3xl">
        <span className={`mb-6 block h-1 w-12 rounded-full ${RULES[vertical]}`} aria-hidden="true" />
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl">{lede}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
