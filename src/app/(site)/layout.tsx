import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phones[0].tel,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: "PK",
  },
  openingHours: siteConfig.hours,
  sameAs: Object.values(siteConfig.social),
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={localBusinessSchema} />
      <Navbar />
      <main className="flex-1 pb-14 sm:pb-0">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCallBar />
    </div>
  );
}
