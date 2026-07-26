export type GalleryCategory =
  | "Neon Signs"
  | "LED Signs"
  | "Acrylic & 3D"
  | "Panaflex & Printing"
  | "Branding"
  | "ACP Cladding";

export const galleryCategories: GalleryCategory[] = [
  "Neon Signs",
  "LED Signs",
  "Acrylic & 3D",
  "Panaflex & Printing",
  "Branding",
  "ACP Cladding",
];

export const galleryItems: {
  id: string;
  title: string;
  category: GalleryCategory;
  /** Path under /public once the real photo is added, e.g. "/gallery/got-it-crazy.jpg" */
  image?: string;
}[] = [
  // Neon Signs
  { id: "got-it-crazy", title: "Got It Crazy", category: "Neon Signs", image: "/gallery/got-it-crazy.jpg" },
  { id: "rise-and-slay", title: "Rise & Slay", category: "Neon Signs", image: "/gallery/rise-and-slay.jpg" },
  { id: "eid-mubarak", title: "Eid Mubarak", category: "Neon Signs", image: "/gallery/eid-mubarak.jpg" },

  // LED Signs
  { id: "kettli", title: "Kettli", category: "LED Signs", image: "/gallery/kettli.jpg" },
  { id: "paolo-rossi", title: "Paolo Rossi", category: "LED Signs", image: "/gallery/paolo-rossi.jpg" },
  { id: "fazl-e-rabi", title: "Fazl e Rabi Real Estate", category: "LED Signs", image: "/gallery/fazl-e-rabi.jpg" },
  { id: "ga-transformation", title: "GA — Your Transformation Partner", category: "LED Signs", image: "/gallery/ga-transformation.jpg" },
  { id: "ardor", title: "Ardor Pvt Ltd", category: "LED Signs", image: "/gallery/ardor.jpg" },
  { id: "presto-bakery", title: "Presto Bakery Cafe", category: "LED Signs", image: "/gallery/presto-bakery.jpg" },
  { id: "sona-galleries", title: "Sona Galleries", category: "LED Signs", image: "/gallery/sona-galleries.jpg" },
  { id: "el-gusto-cafe", title: "El Gusto Cafe Restaurant", category: "LED Signs", image: "/gallery/el-gusto-cafe.jpg" },
  { id: "air-lounge", title: "Air Lounge", category: "LED Signs", image: "/gallery/air-lounge.jpg" },
  { id: "enove", title: "Enove", category: "LED Signs", image: "/gallery/enove.jpg" },
  { id: "depilex-beauty-clinic", title: "Depilex Beauty Clinic", category: "LED Signs", image: "/gallery/depilex-beauty-clinic.jpg" },

  // Acrylic & 3D
  { id: "peaky-blinders-cafe", title: "Peaky Blinders Cafe", category: "Acrylic & 3D", image: "/gallery/peaky-blinders-cafe.jpg" },
  { id: "hexagon-emblem", title: "Hexagon Backlit Emblem", category: "Acrylic & 3D", image: "/gallery/hexagon-emblem.jpg" },
  { id: "mashaallah", title: "MashaAllah Gold Lettering", category: "Acrylic & 3D", image: "/gallery/mashaallah.jpg" },

  // Panaflex & Printing
  { id: "we-carnivores-banner", title: "We Carnivores — Opening Soon Banner", category: "Panaflex & Printing", image: "/gallery/we-carnivores-banner.jpg" },
  { id: "dr-waseem-panel", title: "Dr Waseem Clinic — Printed Facade Panel", category: "Panaflex & Printing", image: "/gallery/dr-waseem-panel.jpg" },

  // Branding
  { id: "the-lounge-depilex-men", title: "The Lounge by Depilex Men", category: "Branding", image: "/gallery/the-lounge-depilex-men.jpg" },
  { id: "rainbow-cash-carry", title: "Rainbow Cash & Carry", category: "Branding", image: "/gallery/rainbow-cash-carry.jpg" },
  { id: "zaiqa-e-mehfil", title: "Zaiqa-e-Mehfil", category: "Branding", image: "/gallery/zaiqa-e-mehfil.jpg" },
  { id: "iftikhar-sons-mega-mall", title: "Iftikhar & Sons Mega Mall", category: "Branding", image: "/gallery/iftikhar-sons-mega-mall.jpg" },

  // ACP Cladding
  { id: "rucobond-letters", title: "Rucobond Letter Fabrication", category: "ACP Cladding", image: "/gallery/rucobond-letters.jpg" },
  { id: "depilex-acp-wall", title: "Depilex — ACP Triangle Wall", category: "ACP Cladding", image: "/gallery/depilex-acp-wall.jpg" },
];
