const FEATURES = [
  {
    title: "In-house fabrication",
    desc: "Design, CNC/laser cutting, printing, and assembly all handled under one roof.",
  },
  {
    title: "Weatherproof & durable",
    desc: "Materials and finishes built to handle sun, rain, and heavy daily use outdoors.",
  },
  {
    title: "Free design mockup",
    desc: "See a rendered preview of your signage before fabrication begins.",
  },
  {
    title: "Nationwide service",
    desc: "Installation teams covering 9+ major cities across Pakistan.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built to last. Designed to be seen.
            </h2>
            <p className="mt-4 text-muted">
              Nearly a decade of experience across LED signage, printing, and
              branding — trusted by shops, offices, hospitals, and corporate
              clients nationwide.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {f.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface rounded-3xl bg-background-dark p-10 text-foreground-invert">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-4xl font-extrabold text-red">1000+</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-invert">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-gold">9+</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-invert">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-red">16</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-invert">
                  Services Offered
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-gold">4.9★</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-invert">
                  Client Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
