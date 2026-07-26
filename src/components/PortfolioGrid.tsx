"use client";

import { useState } from "react";
import { portfolio, portfolioCategories, type PortfolioCategory } from "@/data/portfolio";

const FILTERS: (PortfolioCategory | "All")[] = ["All", ...portfolioCategories];

export default function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");
  const filtered = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
              active === cat
                ? "border-red bg-red text-white"
                : "border-border text-muted hover:border-red hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <div key={project.slug} className="card-surface overflow-hidden rounded-2xl">
            <div
              className={`flex h-36 items-center justify-center text-3xl font-bold ${
                i % 2 === 0
                  ? "bg-gradient-to-br from-red/15 to-background-alt text-red"
                  : "bg-gradient-to-br from-gold/20 to-background-alt text-gold"
              }`}
            >
              {project.title.charAt(0)}
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-red">
                {project.category}
              </span>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-3 text-xs text-muted">📍 {project.location}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.servicesUsed.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-background-alt px-2.5 py-1 text-[11px] font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
