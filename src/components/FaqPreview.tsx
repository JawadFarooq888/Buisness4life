import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/data/faqs";

export default function FaqPreview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Common questions, answered
          </h2>
        </div>

        <div className="mt-12">
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red hover:text-red-dark"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
