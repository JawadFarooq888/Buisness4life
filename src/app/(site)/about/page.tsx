import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Buisness4Life — our mission, experience, and the team behind LED, acrylic, neon, and panaflex sign boards, ACP cladding, and branding across Pakistan.",
  alternates: { canonical: "/about" },
};

const TEAM = [
  { name: "Ahmad Suhail", role: "Founder & Operations Lead", initials: "AS" },
  { name: "Bilal Hussain", role: "Head of Fabrication", initials: "BH" },
  { name: "Sana Aziz", role: "Design Lead", initials: "SA" },
  { name: "Kamran Iqbal", role: "Installation Supervisor", initials: "KI" },
];

const TRUST_POINTS = [
  {
    title: "9+ years in signage & branding",
    desc: "Deep hands-on experience across LED, acrylic, neon, panaflex, and large-format printing.",
  },
  {
    title: "In-house fabrication team",
    desc: "Design, CNC/laser cutting, printing, and assembly all managed under one roof for quality control.",
  },
  {
    title: "Nationwide installation",
    desc: "Teams that travel across 9+ major cities for on-site installation of any project size.",
  },
  {
    title: "Transparent quotes",
    desc: "Clear, itemized pricing with no hidden costs — confirmed before any fabrication begins.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">About Us</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Signage &amp; branding, built to last.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">
          {siteConfig.name} designs, fabricates, and installs LED sign boards,
          acrylic &amp; neon signage, panaflex, ACP cladding, and complete
          branding packages for shops, offices, and corporate clients across
          Pakistan. What started as a small sign-making workshop has grown
          into a full-service signage and branding partner trusted by
          restaurants, retail chains, hospitals, schools, and corporate
          offices nationwide.
        </p>
      </section>

      <section className="border-t border-border bg-background-alt py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:px-8">
          <div className="card-surface rounded-2xl p-8">
            <span className="text-2xl">🎯</span>
            <h2 className="mt-4 text-xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              To help every business — from a single shopfront to a
              multi-branch chain — look professional, visible, and
              trustworthy through quality signage and branding, delivered on
              time and on budget.
            </p>
          </div>
          <div className="card-surface rounded-2xl p-8">
            <span className="text-2xl">🚀</span>
            <h2 className="mt-4 text-xl font-semibold text-foreground">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              To be Pakistan&apos;s most trusted signage and branding partner —
              known for craftsmanship, reliability, and a single point of
              contact from design to installation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red">
              Why Customers Trust Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Experience that shows in every project
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((point) => (
              <div key={point.title} className="card-surface rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background-alt py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red">Our Team</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The people behind the work
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div key={member.name} className="card-surface rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red/10 text-lg font-bold text-red">
                  {member.initials}
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">{member.name}</p>
                <p className="mt-1 text-xs text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
