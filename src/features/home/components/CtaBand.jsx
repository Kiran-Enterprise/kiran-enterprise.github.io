import { Phone } from "lucide-react";
import { Button, WhatsAppIcon } from "@/shared/components";
import { site } from "@/shared/data/site";
import { GENERAL_WHATSAPP_URL } from "@/shared/utils/whatsapp";

export function CtaBand() {
  return (
    <section data-nav="/contact" className="bg-ink text-white">
      <div className="section-shell flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Have something to sell or clear?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Send a photo on WhatsApp and we will reply with a price or a pickup slot. {site.contact.hours}.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="verdigris" size="lg">
            <WhatsAppIcon size={18} />
            Message on WhatsApp
          </Button>
          <Button href={site.contact.phoneHref} variant="onDark" size="lg">
            <Phone size={18} aria-hidden="true" />
            {site.contact.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
