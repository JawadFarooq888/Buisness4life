import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border-dark bg-background-dark px-8 py-16 text-foreground-invert sm:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="grid-fade absolute inset-0 opacity-50" />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red/25 blur-[100px]" />
            <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-gold/15 blur-[110px]" />
          </div>

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to get your
                <span className="text-gradient-red-gold block">free quote?</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-invert">
                Tell us what you have in mind and we&apos;ll reply with a free
                mockup and quote — usually within hours.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                {siteConfig.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-3 text-muted-invert transition-colors hover:text-foreground-invert"
                  >
                    <span className="text-red">📞</span> {p.display}
                  </a>
                ))}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted-invert transition-colors hover:text-foreground-invert"
                >
                  <span className="text-red">✉️</span> {siteConfig.email}
                </a>
                <div className="flex items-center gap-3 text-muted-invert">
                  <span className="text-red">📍</span> {siteConfig.address.full}
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
