const STEPS = [
  {
    n: "01",
    title: "Consult",
    desc: "Tell us your project, space, and budget — we'll recommend the right signage solution.",
  },
  {
    n: "02",
    title: "Design",
    desc: "We prepare a free digital mockup so you see exactly how it'll look before we build.",
  },
  {
    n: "03",
    title: "Fabricate",
    desc: "Your signage is built in-house using durable, weather-ready materials and LEDs.",
  },
  {
    n: "04",
    title: "Install",
    desc: "Our team delivers and installs on-site — or ships nationwide, ready to mount.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-t border-border bg-background-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From idea to installed in 4 steps
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {STEPS.map((step) => (
            <div key={step.n} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="card-surface relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl">
                <span className="text-xl font-bold text-red">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
