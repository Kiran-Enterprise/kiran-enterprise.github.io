import { Button } from "@/shared/components";
import { usePageMeta } from "@/shared/hooks";

function NotFoundPage() {
  usePageMeta("/404");

  return (
    <section className="section-shell flex min-h-[60vh] flex-col items-start justify-center py-16">
      <span className="mb-6 block h-1 w-12 rounded-full bg-ink" aria-hidden="true" />
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        That page is not here
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate">
        The link may be old or mistyped. The two things people come here for are below.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/sell#quote" variant="copper">
          Sell laptops or hardware
        </Button>
        <Button to="/e-waste#book" variant="verdigris">
          Book an e-waste pickup
        </Button>
        <Button to="/" variant="outline">
          Go to the home page
        </Button>
      </div>
    </section>
  );
}

export default NotFoundPage;
