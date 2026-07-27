import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Locations We Serve",
  description:
    "Buisness4Life provides sign boards, printing, and branding services across Lahore, Islamabad, Rawalpindi, Karachi, Faisalabad, Gujranwala, Sialkot, Multan, and Peshawar.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          Locations We Serve
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Sign boards &amp; branding, city by city
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="card-surface rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-foreground">{city.name}</h2>
              <p className="mt-1 text-xs text-muted">{city.region}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{city.intro}</p>
              <span className="mt-4 inline-block text-sm font-medium text-red">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
