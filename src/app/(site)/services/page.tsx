import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "LED sign boards, acrylic & neon signs, panaflex, ACP cladding, digital & vinyl printing, and complete branding services across Pakistan.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          Our Services
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Every signage &amp; branding service, under one roof
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          From illuminated LED boards to full shopfront branding — explore
          our complete range of services below.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
