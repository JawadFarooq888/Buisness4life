import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our sign board and branding gallery — LED signs, neon signs, acrylic & 3D letters, panaflex, branding, and ACP cladding.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          Gallery
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          A closer look at our work
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Filter by category and click any piece for a closer look.
        </p>

        <div className="mt-12">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
