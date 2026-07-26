import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          {post.category}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="prose-content mt-10 space-y-6">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="mb-2 text-xl font-semibold text-foreground">
                  {block.heading}
                </h2>
              )}
              <p className="text-base leading-relaxed text-muted">{block.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-background-alt p-6">
          <p className="text-sm font-semibold text-foreground">
            Need signage or branding for your business?
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <h2 className="text-lg font-semibold text-foreground">More Articles</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-surface rounded-xl p-4 text-sm font-medium text-foreground hover:text-red"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
