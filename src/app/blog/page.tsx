import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and tips on LED sign boards, acrylic vs. neon signs, shop branding ideas, sign board pricing, and outdoor advertising.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">Blog</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Signage &amp; branding insights
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-surface flex flex-col overflow-hidden rounded-2xl"
            >
              <div
                className={`flex h-32 items-center justify-center text-xs font-semibold uppercase tracking-widest ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-red/15 to-background-alt text-red"
                    : "bg-gradient-to-br from-gold/20 to-background-alt text-gold"
                }`}
              >
                {post.category}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-muted">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-2 text-base font-semibold text-foreground">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-medium text-red">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
