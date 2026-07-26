import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function Gallery() {
  const featured = portfolio.slice(0, 6);

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Recent projects we&apos;re proud of
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-red transition-colors hover:text-red-dark"
          >
            View Full Portfolio →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href="/portfolio"
              className={`group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl border border-border p-5 transition-transform hover:scale-[1.02] ${
                i % 2 === 0
                  ? "bg-gradient-to-br from-red/10 to-background-alt"
                  : "bg-gradient-to-br from-gold/15 to-background-alt"
              }`}
            >
              <span className="grid-fade absolute inset-0 opacity-30" />
              <span className="relative text-xs font-semibold uppercase tracking-wide text-red">
                {project.category}
              </span>
              <span className="relative mt-1 text-lg font-semibold text-foreground">
                {project.title}
              </span>
              <span className="relative mt-1 text-xs text-muted">
                📍 {project.location}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
