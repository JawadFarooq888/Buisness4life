import Link from "next/link";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { siteConfig } from "@/lib/site";

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const topServices = services.slice(0, 6);
  const topCities = cities.slice(0, 6);

  return (
    <footer className="border-t border-border-dark bg-background-dark text-muted-invert">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-1 text-2xl font-extrabold tracking-tight">
              <span className="text-red">Glow</span>
              <span className="text-foreground-invert">Forge</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm">
              LED, acrylic, neon &amp; panaflex sign boards, ACP cladding, and
              complete shop, office, and vehicle branding — designed,
              printed, and installed.
            </p>
            <div className="mt-6 flex gap-3">
              {["FB", "IG", "TT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-dark text-xs font-semibold transition-colors hover:border-red hover:text-red"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground-invert">Services</p>
            <ul className="mt-4 space-y-3">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm transition-colors hover:text-red">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-red">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground-invert">Locations</p>
            <ul className="mt-4 space-y-3">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className="text-sm transition-colors hover:text-red">
                    Sign Boards in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground-invert">Company</p>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              📞 {siteConfig.phones.map((p) => p.display).join(" / ")}
              <br />
              ✉️ {siteConfig.email}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-dark pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Placeholder content — swap in real business details anytime.</p>
        </div>
      </div>
    </footer>
  );
}
