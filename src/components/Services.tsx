import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  const featured = services.slice(0, 8);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Complete signage &amp; branding solutions
          </h2>
          <p className="mt-4 text-muted">
            From illuminated sign boards to full shopfront branding — every
            project is designed, fabricated, and installed in-house.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-red hover:text-red"
          >
            View All 16 Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
