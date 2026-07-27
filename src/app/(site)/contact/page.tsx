import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch for a free signage or branding quote — call, WhatsApp, email, or fill out our contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">Contact</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Let&apos;s talk about your project
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Call, WhatsApp, or send us a message — we usually reply within a few hours.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="space-y-4">
              {siteConfig.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="card-surface flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red/10 text-red">📞</span>
                  <div>
                    <p className="text-xs text-muted">Call us</p>
                    <p className="text-sm font-semibold text-foreground">{p.display}</p>
                  </div>
                </a>
              ))}
              <a
                href={whatsappLink("Hi! I'd like to get a quote for signage.")}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red/10 text-red">💬</span>
                <div>
                  <p className="text-xs text-muted">WhatsApp us</p>
                  <p className="text-sm font-semibold text-foreground">{siteConfig.whatsapp.display}</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="card-surface flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red/10 text-red">✉️</span>
                <div>
                  <p className="text-xs text-muted">Email us</p>
                  <p className="text-sm font-semibold text-foreground">{siteConfig.email}</p>
                </div>
              </a>
              <div className="card-surface flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red/10 text-red">📍</span>
                <div>
                  <p className="text-xs text-muted">Visit us</p>
                  <p className="text-sm font-semibold text-foreground">{siteConfig.address.full}</p>
                  <p className="mt-1 text-xs text-muted">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
