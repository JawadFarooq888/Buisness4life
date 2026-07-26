export const siteConfig = {
  name: "GlowForge Signs",
  shortName: "GlowForge",
  tagline: "Sign Boards & Branding Solutions",
  description:
    "GlowForge Signs designs, prints, and installs LED sign boards, acrylic & neon signs, panaflex, ACP cladding, vehicle branding, and complete shop & office branding across Pakistan.",
  url: "https://www.glowforgesigns.com",
  phones: [
    { display: "0312-8207525", tel: "+923128207525" },
    { display: "0316-5692495", tel: "+923165692495" },
  ],
  whatsapp: {
    display: "0312-8207525",
    number: "923128207525",
  },
  email: "bus4liferwp@gmail.com",
  address: {
    line: "Placeholder Address, Commercial Market",
    city: "Rawalpindi",
    region: "Punjab",
    country: "Pakistan",
    full: "Placeholder Address, Commercial Market, Rawalpindi, Punjab, Pakistan",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
  hours: "Mon – Sat: 10:00 AM – 8:00 PM",
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encoded}`;
}
