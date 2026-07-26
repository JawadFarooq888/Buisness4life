import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about our sign board, printing, and branding services — pricing, timelines, warranty, and coverage areas.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">FAQs</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Frequently asked questions
        </h1>
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
