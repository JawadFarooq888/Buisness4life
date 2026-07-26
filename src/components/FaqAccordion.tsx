"use client";

import { useState } from "react";

export default function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground sm:px-6 sm:py-5 sm:text-base"
              aria-expanded={isOpen}
            >
              {item.q}
              <span
                className={`shrink-0 text-lg text-red transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
