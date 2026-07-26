import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-dark pb-20 pt-16 text-foreground-invert lg:pb-28 lg:pt-24">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-invert">
            <span className="h-1.5 w-1.5 rounded-full bg-red shadow-[0_0_8px_2px_rgba(224,30,43,0.8)]" />
            Trusted signage &amp; branding partner across Pakistan
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Sign Boards &amp; Branding
            <span className="text-gradient-red-gold block">That Get You Noticed</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-invert">
            LED, acrylic, neon &amp; panaflex sign boards, ACP cladding,
            digital &amp; vinyl printing, and complete shop, office, and
            vehicle branding — designed, fabricated, and installed by one
            expert team.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_-6px_rgba(224,30,43,0.55)] transition-transform hover:scale-105"
            >
              Get a Free Quote
            </Link>
            <a
              href={whatsappLink("Hi! I'd like to get a quote for signage.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-foreground-invert transition-colors hover:border-red hover:text-red"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-xs text-muted-invert">Projects delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold">9+ yrs</p>
              <p className="text-xs text-muted-invert">Industry experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">9 Cities</p>
              <p className="text-xs text-muted-invert">Served nationwide</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="glass-dark relative w-full max-w-md rounded-3xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red">
              Get a Free Quote
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground-invert">
              Tell us what you need — we&apos;ll reply within hours.
            </p>
            <div className="mt-6 space-y-3">
              {["LED Sign Boards", "ACP Cladding", "Shop Branding", "Vehicle Branding"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-invert"
                  >
                    {item}
                    <span className="text-gold">→</span>
                  </div>
                ),
              )}
            </div>
            <a
              href={`tel:${siteConfig.phones[0].tel}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              📞 Call {siteConfig.phones[0].display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
