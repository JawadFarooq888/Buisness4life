export type GalleryCategory =
  | "LED Signs"
  | "Neon Signs"
  | "Acrylic & 3D"
  | "Panaflex & Printing"
  | "Branding"
  | "ACP Cladding";

export const galleryCategories: GalleryCategory[] = [
  "LED Signs",
  "Neon Signs",
  "Acrylic & 3D",
  "Panaflex & Printing",
  "Branding",
  "ACP Cladding",
];

export const galleryItems: {
  id: string;
  title: string;
  category: GalleryCategory;
}[] = [
  { id: "g1", title: "Illuminated Shop Fascia", category: "LED Signs" },
  { id: "g2", title: "Café Logo Neon", category: "Neon Signs" },
  { id: "g3", title: "Reception 3D Letters", category: "Acrylic & 3D" },
  { id: "g4", title: "Highway Panaflex Banner", category: "Panaflex & Printing" },
  { id: "g5", title: "Retail Storefront Branding", category: "Branding" },
  { id: "g6", title: "Mall Facade Cladding", category: "ACP Cladding" },
  { id: "g7", title: "Pharmacy Backlit Board", category: "LED Signs" },
  { id: "g8", title: "Salon Script Neon", category: "Neon Signs" },
  { id: "g9", title: "Acrylic Name Plate", category: "Acrylic & 3D" },
  { id: "g10", title: "Restaurant Menu Panaflex", category: "Panaflex & Printing" },
  { id: "g11", title: "Office Wall Branding", category: "Branding" },
  { id: "g12", title: "Showroom ACP Front", category: "ACP Cladding" },
];
