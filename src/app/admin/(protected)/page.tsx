import Link from "next/link";
import { getPortfolio, getGallery } from "@/lib/content";
import { blobConfigured } from "@/lib/blob";

export default async function AdminDashboardPage() {
  const [portfolio, gallery] = await Promise.all([getPortfolio(), getGallery()]);
  const configured = blobConfigured();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      <p className="mt-1 text-sm text-muted">Manage your portfolio and gallery images.</p>

      {!configured && (
        <div className="mt-6 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-sm text-foreground">
          <p className="font-semibold">Image storage isn&apos;t connected yet</p>
          <p className="mt-1 text-muted">
            Changes you make here won&apos;t be saved until Vercel Blob storage is
            connected. Set the <code className="rounded bg-black/10 px-1">BLOB_READ_WRITE_TOKEN</code>{" "}
            environment variable in your Vercel project settings, then redeploy.
          </p>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link href="/admin/portfolio" className="card-surface rounded-2xl p-6">
          <p className="text-3xl font-extrabold text-red">{portfolio.length}</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Portfolio Projects</p>
          <p className="mt-1 text-xs text-muted">Manage case-study style portfolio entries</p>
        </Link>
        <Link href="/admin/gallery" className="card-surface rounded-2xl p-6">
          <p className="text-3xl font-extrabold text-gold">{gallery.length}</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Gallery Photos</p>
          <p className="mt-1 text-xs text-muted">Manage gallery grid items and lightbox photos</p>
        </Link>
      </div>
    </div>
  );
}
