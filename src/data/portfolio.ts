export type PortfolioCategory =
  | "Restaurants"
  | "Shops"
  | "Offices"
  | "Hospitals"
  | "Schools"
  | "Shopping Malls"
  | "Corporate Branding"
  | "Outdoor Sign Boards";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  servicesUsed: string[];
  description: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Restaurants",
  "Shops",
  "Offices",
  "Hospitals",
  "Schools",
  "Shopping Malls",
  "Corporate Branding",
  "Outdoor Sign Boards",
];

export const portfolio: PortfolioProject[] = [
  {
    slug: "spice-route-restaurant-signage",
    title: "Spice Route Restaurant Signage",
    category: "Restaurants",
    location: "Lahore",
    servicesUsed: ["Backlit Sign Boards", "Menu Panaflex", "Wall Graphics"],
    description:
      "A warm, backlit fascia sign paired with interior menu panaflex and a feature wall mural for a busy family restaurant.",
  },
  {
    slug: "urban-cuts-barbershop",
    title: "Urban Cuts Barbershop",
    category: "Shops",
    location: "Islamabad",
    servicesUsed: ["Neon Sign Boards", "Acrylic Sign Boards", "Vinyl Printing"],
    description:
      "A photogenic neon logo sign and acrylic name board designed to make this barbershop's storefront instantly recognizable.",
  },
  {
    slug: "meridian-corporate-tower",
    title: "Meridian Corporate Tower Lobby",
    category: "Offices",
    location: "Islamabad",
    servicesUsed: ["3D Letter Sign Boards", "Office Branding", "Wall Graphics"],
    description:
      "Halo-lit stainless steel 3D letters and wayfinding signage for a multi-tenant corporate office lobby.",
  },
  {
    slug: "city-care-hospital",
    title: "City Care Hospital Signage",
    category: "Hospitals",
    location: "Rawalpindi",
    servicesUsed: ["LED Sign Boards", "Wayfinding", "ACP Cladding"],
    description:
      "Clear, high-visibility LED signage and directional wayfinding across a busy multi-floor hospital building.",
  },
  {
    slug: "greenfield-school-branding",
    title: "Greenfield School Branding",
    category: "Schools",
    location: "Faisalabad",
    servicesUsed: ["Acrylic Sign Boards", "Wall Graphics", "Vinyl Printing"],
    description:
      "Full campus signage package including entrance name boards, classroom plates, and motivational wall graphics.",
  },
  {
    slug: "galaxy-mall-directory",
    title: "Galaxy Mall Directory & Facade",
    category: "Shopping Malls",
    location: "Karachi",
    servicesUsed: ["ACP Cladding", "LED Sign Boards", "3D Letter Sign Boards"],
    description:
      "A modern ACP facade with illuminated 3D mall branding and a full directory signage system for tenants.",
  },
  {
    slug: "apex-logistics-fleet",
    title: "Apex Logistics Fleet Branding",
    category: "Corporate Branding",
    location: "Lahore",
    servicesUsed: ["Vehicle Branding", "One Way Vision", "Digital Printing"],
    description:
      "Full-fleet vehicle wraps and one-way vision rear graphics rolled out across 40+ delivery vans.",
  },
  {
    slug: "highway-hoarding-network",
    title: "Highway Hoarding Network",
    category: "Outdoor Sign Boards",
    location: "Multan",
    servicesUsed: ["Panaflex Boards", "Digital Printing"],
    description:
      "A network of large-format panaflex hoardings installed along a major highway corridor for a retail client.",
  },
  {
    slug: "cotton-mills-office-park",
    title: "Cotton Mills Office Park",
    category: "Corporate Branding",
    location: "Faisalabad",
    servicesUsed: ["Office Branding", "Acrylic Sign Boards", "CNC & Laser Cutting"],
    description:
      "Reception signage, meeting room plates, and CNC-cut acrylic wayfinding for a textile group's head office.",
  },
  {
    slug: "north-star-electronics",
    title: "North Star Electronics Showroom",
    category: "Shops",
    location: "Gujranwala",
    servicesUsed: ["Panaflex Boards", "LED Sign Boards", "ACP Cladding"],
    description:
      "A striking illuminated storefront combining ACP cladding, an LED name board, and panaflex promotional panels.",
  },
];

export function getProjectsByCategory(category: PortfolioCategory | "All") {
  if (category === "All") return portfolio;
  return portfolio.filter((p) => p.category === category);
}
