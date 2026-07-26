import { siteConfig, whatsappLink } from "@/lib/site";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-md sm:hidden">
      <a
        href={`tel:${siteConfig.phones[0].tel}`}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-foreground"
      >
        📞 Call Now
      </a>
      <a
        href={whatsappLink("Hi! I'd like to get a quote for signage.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 border-x border-border py-3 text-sm font-semibold text-foreground"
      >
        💬 WhatsApp
      </a>
      <a
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-red py-3 text-sm font-semibold text-white"
      >
        Get Quote
      </a>
    </div>
  );
}
