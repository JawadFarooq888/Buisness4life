import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
    areaServed: "PK",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="relative overflow-hidden bg-background-dark py-16 text-foreground-invert lg:py-24">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/15 text-red">
            <ServiceIcon name={service.icon} className="h-8 w-8" />
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-invert">
            {service.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phones[0].tel}`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:border-red hover:text-red"
            >
              📞 {siteConfig.phones[0].display}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {service.description.map((para, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-muted first:mt-0">
                {para}
              </p>
            ))}

            <h2 className="mt-10 text-xl font-semibold text-foreground">Benefits</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted">
                  <span className="text-red">✓</span> {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="mt-4">
              <FaqAccordion items={service.faqs} />
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background-alt p-6">
              <p className="text-sm font-semibold text-foreground">Get a Custom Quote</p>
              <p className="mt-1 text-xs text-muted">
                Pricing depends on size, material, and complexity — request a free quote and we&apos;ll get back to you.
              </p>
            </div>
          </div>

          <div>
            <QuoteForm defaultService={service.name} compact />
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h2 className="text-xl font-semibold text-foreground">Related Services</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-surface rounded-xl p-5 text-sm font-semibold text-foreground hover:text-red"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
