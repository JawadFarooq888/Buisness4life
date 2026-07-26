export type PortfolioCategory =
  | "Restaurants & Cafes"
  | "Shops & Retail"
  | "Offices & Corporate"
  | "Clinics & Fitness"
  | "Salons & Beauty"
  | "Hotels"
  | "Custom Neon Signs";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  location?: string;
  servicesUsed: string[];
  description: string;
  /** Path under /public once the real project photo is added, e.g. "/portfolio/felix-associates.jpg" */
  image?: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Restaurants & Cafes",
  "Shops & Retail",
  "Offices & Corporate",
  "Clinics & Fitness",
  "Salons & Beauty",
  "Hotels",
  "Custom Neon Signs",
];

export const portfolio: PortfolioProject[] = [
  {
    slug: "felix-associates",
    title: "Felix Associates",
    category: "Offices & Corporate",
    servicesUsed: ["Acrylic Sign Boards", "3D Letter Sign Boards", "Office Branding"],
    description:
      "Reception wall branding with a raised acrylic logo and 3D lettering — \"Create. Enhance. Sustain.\"",
    image: "/portfolio/felix-associates.jpg",
  },
  {
    slug: "we-carnivores",
    title: "We Carnivores",
    category: "Restaurants & Cafes",
    servicesUsed: ["3D Letter Sign Boards", "Shop Branding", "Digital Printing"],
    description:
      "Rooftop 3D channel lettering plus a full storefront fascia and window branding package for this restaurant's launch.",
    image: "/portfolio/we-carnivores.jpg",
  },
  {
    slug: "hickory-cafe",
    title: "Hickory Cafe",
    category: "Restaurants & Cafes",
    servicesUsed: ["Neon Sign Boards", "Backlit Sign Boards"],
    description:
      "A warm gold script neon sign reading \"Fire Up The Flavours\" — the centerpiece of this cafe's interior branding.",
    image: "/portfolio/hickory-cafe.jpg",
  },
  {
    slug: "mechani-it-store",
    title: "Mechani IT Store",
    category: "Shops & Retail",
    servicesUsed: ["Backlit Sign Boards", "Acrylic Sign Boards"],
    description:
      "Bold backlit acrylic fascia signage with the store logo and contact numbers built directly into the panel.",
    image: "/portfolio/mechani-it-store.jpg",
  },
  {
    slug: "swm",
    title: "SWM",
    category: "Shops & Retail",
    servicesUsed: ["LED Sign Boards", "LED Display Boards"],
    description:
      "Illuminated channel-letter logo installed alongside a full-width scrolling LED display board.",
    image: "/portfolio/swm.jpg",
  },
  {
    slug: "third-space-cafe",
    title: "Third Space — Cafe. Culture. Arts.",
    category: "Restaurants & Cafes",
    servicesUsed: ["Backlit Sign Boards", "Acrylic Sign Boards"],
    description:
      "A warm backlit acrylic entrance sign with logo mark, built to anchor this cafe's night-time street presence.",
    image: "/portfolio/third-space-cafe.jpg",
  },
  {
    slug: "enove-smart-home",
    title: "Enove Smart Home",
    category: "Offices & Corporate",
    servicesUsed: ["LED Sign Boards", "Acrylic Sign Boards"],
    description:
      "A full illuminated product wall listing smart home services — lighting, curtains, climate, and smart locks.",
    image: "/portfolio/enove-smart-home.jpg",
  },
  {
    slug: "dr-waseem-clinic",
    title: "Dr Waseem Clinic & Physio-Rehab",
    category: "Clinics & Fitness",
    servicesUsed: ["UV Printing", "Backlit Sign Boards", "3D Letter Sign Boards"],
    description:
      "A large UV-printed facade panel with backlit clinic branding, visible clearly by day and lit up by night.",
    image: "/portfolio/dr-waseem-clinic.jpg",
  },
  {
    slug: "koyla-terrace",
    title: "Koyla Terrace",
    category: "Restaurants & Cafes",
    servicesUsed: ["LED Sign Boards", "Digital Printing"],
    description:
      "A circular illuminated rooftop sign for this shesha grill cafe, with flame and hookah artwork built into the design.",
    image: "/portfolio/koyla-terrace.jpg",
  },
  {
    slug: "bahria-premium-hotel",
    title: "Bahria Premium Hotel",
    category: "Hotels",
    servicesUsed: ["Shop Branding", "Acrylic Sign Boards", "ACP Cladding"],
    description:
      "Full storefront branding package including fascia lettering and gold-accented reception name boards.",
    image: "/portfolio/bahria-premium-hotel.jpg",
  },
  {
    slug: "greenleaf-mart",
    title: "Greenleaf Mart",
    category: "Shops & Retail",
    servicesUsed: ["Backlit Sign Boards", "Shop Branding", "Wall Graphics"],
    description:
      "Backlit logo signage paired with a full brand-wall display showcasing the store's product range.",
    image: "/portfolio/greenleaf-mart.jpg",
  },
  {
    slug: "surkhab",
    title: "Surkhab",
    category: "Restaurants & Cafes",
    servicesUsed: ["Backlit Sign Boards", "CNC & Laser Cutting"],
    description:
      "An ornate gold backlit emblem, CNC-cut and finished for a premium, decorative entrance statement.",
    image: "/portfolio/surkhab.jpg",
  },
  {
    slug: "beyond-dental",
    title: "Beyond Dental by Dr. Amel Ali",
    category: "Clinics & Fitness",
    servicesUsed: ["Backlit Sign Boards", "Acrylic Sign Boards"],
    description:
      "Clean backlit clinic signage highlighting dentofacial aesthetics, implants, and smile design services.",
    image: "/portfolio/beyond-dental.jpg",
  },
  {
    slug: "naz-khan",
    title: "Naz Khan — Glam Up With Naz",
    category: "Salons & Beauty",
    servicesUsed: ["Neon Sign Boards"],
    description:
      "A custom two-tone neon sign combining a silhouette logo in pink with gold script branding.",
    image: "/portfolio/naz-khan.jpg",
  },
  {
    slug: "toppy-the-pizza-guy",
    title: "Toppy — The Pizza Guy",
    category: "Restaurants & Cafes",
    servicesUsed: ["LED Sign Boards", "3D Letter Sign Boards"],
    description:
      "A playful LED-lit mascot logo built into bold channel lettering, installed rooftop for maximum street visibility.",
    image: "/portfolio/toppy-the-pizza-guy.jpg",
  },
  {
    slug: "gym-fitnastic",
    title: "Gym Fitnastic — Fitness on Fire",
    category: "Clinics & Fitness",
    servicesUsed: ["LED Sign Boards", "Backlit Sign Boards"],
    description:
      "Bold backlit gym signage combining lettering and logo artwork for a high-energy brand presence.",
    image: "/portfolio/gym-fitnastic.jpg",
  },
  {
    slug: "esajees",
    title: "Esajee's — Est'd 1901",
    category: "Shops & Retail",
    servicesUsed: ["Backlit Sign Boards"],
    description:
      "A heritage retail brand's script logo rebuilt as a clean backlit fascia sign — \"Think Globally, Shop Locally.\"",
    image: "/portfolio/esajees.jpg",
  },
];

export function getProjectsByCategory(category: PortfolioCategory | "All") {
  if (category === "All") return portfolio;
  return portfolio.filter((p) => p.category === category);
}
