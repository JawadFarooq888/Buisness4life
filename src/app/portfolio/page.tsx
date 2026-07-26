import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our signage and branding projects across restaurants, shops, offices, hospitals, schools, malls, and corporate clients.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          Portfolio
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Projects across every industry
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Filter by category to see how we&apos;ve helped restaurants, shops,
          offices, hospitals, schools, malls, and corporate clients stand out.
        </p>

        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
