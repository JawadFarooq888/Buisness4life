import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative border-t border-border bg-background-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Client Love
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Don&apos;t just take our word for it
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((r) => (
            <div key={r.name} className="card-surface flex flex-col rounded-2xl p-7">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.9l-5.21 2.61 1-5.79-4.21-4.1 5.82-.85z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
