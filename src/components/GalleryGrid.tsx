"use client";

import { useState } from "react";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/data/gallery";

const FILTERS: (GalleryCategory | "All")[] = ["All", ...galleryCategories];

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);
  const activeItem = galleryItems.find((g) => g.id === lightbox);

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

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item.id)}
            className={`group flex h-40 items-center justify-center rounded-xl p-4 text-center text-sm font-semibold transition-transform hover:scale-[1.03] ${
              i % 3 === 0
                ? "bg-gradient-to-br from-red/15 to-background-alt text-red"
                : i % 3 === 1
                  ? "bg-gradient-to-br from-gold/20 to-background-alt text-gold"
                  : "bg-gradient-to-br from-foreground/10 to-background-alt text-foreground"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative flex h-72 w-full max-w-xl items-center justify-center rounded-2xl bg-background p-8 text-center">
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 text-xl text-muted hover:text-foreground"
              aria-label="Close"
            >
              ✕
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-red">
                {activeItem.category}
              </p>
              <p className="mt-2 text-xl font-semibold text-foreground">
                {activeItem.title}
              </p>
              <p className="mt-2 text-sm text-muted">
                Sample placeholder — swap in a real project photo here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
