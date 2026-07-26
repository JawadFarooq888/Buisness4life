export type City = {
  slug: string;
  name: string;
  region: string;
  intro: string;
};

export const cities: City[] = [
  {
    slug: "lahore",
    name: "Lahore",
    region: "Punjab",
    intro:
      "From Gulberg to DHA and the Walled City's commercial markets, we design and install LED, acrylic, and panaflex sign boards for shops, restaurants, and offices across Lahore.",
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    region: "Islamabad Capital Territory",
    intro:
      "We serve corporate offices, retail outlets, and commercial plazas across Islamabad's Blue Area, F-6 to F-11, and I-8 to I-10 markaz areas with premium signage and branding.",
  },
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    region: "Punjab",
    intro:
      "Based near Rawalpindi, we're a trusted local choice for LED sign boards, ACP cladding, and shop branding across Saddar, Committee Chowk, and the Cantt commercial areas.",
  },
  {
    slug: "karachi",
    name: "Karachi",
    region: "Sindh",
    intro:
      "We deliver large-format panaflex, vehicle branding, and shopfront signage projects for businesses across Karachi's commercial hubs, from Saddar to Clifton and Gulshan-e-Iqbal.",
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    region: "Punjab",
    intro:
      "Serving Faisalabad's textile markets, retail outlets, and corporate offices with durable LED, acrylic, and panaflex sign boards built for high-traffic commercial areas.",
  },
  {
    slug: "gujranwala",
    name: "Gujranwala",
    region: "Punjab",
    intro:
      "We support Gujranwala's growing retail and industrial businesses with shop branding, LED signage, and CNC-cut acrylic boards designed for maximum visibility.",
  },
  {
    slug: "sialkot",
    name: "Sialkot",
    region: "Punjab",
    intro:
      "From export-house branding to retail storefronts, we provide premium signage and branding solutions tailored to Sialkot's business community.",
  },
  {
    slug: "multan",
    name: "Multan",
    region: "Punjab",
    intro:
      "We help Multan businesses stand out with illuminated sign boards, panaflex banners, and office branding built to handle the region's heat and dust.",
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    region: "Khyber Pakhtunkhwa",
    intro:
      "Serving Peshawar's commercial markets with LED sign boards, acrylic name plates, and shopfront branding designed for durability and everyday visibility.",
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
