"use client";

import { useEffect, useState } from "react";
import { galleryCategories, type GalleryCategory } from "@/data/gallery";
import type { GalleryItem } from "@/lib/content";

const FILTERS: (GalleryCategory | "All")[] = ["All", ...galleryCategories];

function useImageExists(src: string | undefined) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new window.Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = src;
  }, [src]);

  return loaded;
}

function GalleryTile({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  const loaded = useImageExists(item.image);

  if (loaded && item.image) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group h-40 overflow-hidden rounded-xl transition-transform hover:scale-[1.03]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex h-40 items-center justify-center rounded-xl p-4 text-center text-sm font-semibold transition-transform hover:scale-[1.03] ${
        index % 3 === 0
          ? "bg-gradient-to-br from-red/15 to-background-alt text-red"
          : index % 3 === 1
            ? "bg-gradient-to-br from-gold/20 to-background-alt text-gold"
            : "bg-gradient-to-br from-foreground/10 to-background-alt text-foreground"
      }`}
    >
      {item.title}
    </button>
  );
}

function LightboxImage({ item }: { item: GalleryItem }) {
  const loaded = useImageExists(item.image);

  if (loaded && item.image) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} className="max-h-[70vh] w-full object-contain" />
        <div className="w-full border-t border-border p-4">
          <p className="text-sm font-semibold text-foreground">{item.title}</p>
          <p className="text-xs text-muted">{item.category}</p>
        </div>
      </>
    );
  }

  return (
    <div className="p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-red">{item.category}</p>
      <p className="mt-2 text-xl font-semibold text-foreground">{item.title}</p>
      <p className="mt-2 text-sm text-muted">
        Photo coming soon — real project photo will appear here.
      </p>
    </div>
  );
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? items : items.filter((g) => g.category === active);
  const activeItem = items.find((g) => g.id === lightbox);

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
          <GalleryTile key={item.id} item={item} index={i} onClick={() => setLightbox(item.id)} />
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative flex max-h-[80vh] w-full max-w-xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-background text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 text-xl text-white drop-shadow-md hover:text-red"
              aria-label="Close"
            >
              ✕
            </button>
            <LightboxImage item={activeItem} />
          </div>
        </div>
      )}
    </div>
  );
}
