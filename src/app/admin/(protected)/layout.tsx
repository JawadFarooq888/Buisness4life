import Link from "next/link";
import { logoutAction } from "../login/actions";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/portfolio", label: "Portfolio" },
  { href: "/admin/gallery", label: "Gallery" },
];

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-alt">
      <header className="border-b border-border bg-background-dark text-foreground-invert">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="text-lg font-extrabold tracking-tight">
              <span className="text-red">Glow</span>Forge{" "}
              <span className="text-xs font-normal text-muted-invert">Admin</span>
            </Link>
            <nav className="hidden gap-6 sm:flex">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-invert hover:text-foreground-invert"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="text-sm text-muted-invert hover:text-foreground-invert">
              View Site ↗
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium hover:border-red hover:text-red"
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
        <nav className="flex gap-6 border-t border-white/10 px-6 py-2 sm:hidden">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-invert">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
