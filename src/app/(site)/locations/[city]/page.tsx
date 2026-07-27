import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import QuoteForm from "@/components/QuoteForm";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return {};
  return {
    title: `Sign Boards & Branding in ${cityData.name}`,
    description: cityData.intro,
    alternates: { canonical: `/locations/${cityData.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: cityData.name },
        ]}
      />

      <section className="relative overflow-hidden bg-background-dark py-16 text-foreground-invert lg:py-24">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-red">
            {cityData.region}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sign Boards &amp; Branding in {cityData.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-invert">{cityData.intro}</p>
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

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="text-2xl font-bold text-foreground">
          Services available in {cityData.name}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card-surface rounded-xl p-5 text-sm font-semibold text-foreground hover:text-red"
            >
              {s.name}
            </Link>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Why {cityData.name} businesses choose us
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <span className="text-red">✓</span> Local installation team serving {cityData.name} and nearby areas.
              </li>
              <li className="flex gap-3">
                <span className="text-red">✓</span> Free digital mockup before fabrication begins.
              </li>
              <li className="flex gap-3">
                <span className="text-red">✓</span> In-house fabrication for faster turnaround.
              </li>
              <li className="flex gap-3">
                <span className="text-red">✓</span> Transparent, itemized quotes with no hidden costs.
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">FAQs</h2>
            <div className="mt-6">
              <FaqAccordion items={faqs.slice(0, 4)} />
            </div>
          </div>

          <QuoteForm defaultService="" compact />
        </div>
      </section>
    </>
  );
}
