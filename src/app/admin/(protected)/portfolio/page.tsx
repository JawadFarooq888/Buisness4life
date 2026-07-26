import Link from "next/link";
import { getPortfolio } from "@/lib/content";
import { deletePortfolioItem } from "./actions";

const ERROR_MESSAGES: Record<string, string> = {
  storage: "Image storage isn't connected — set BLOB_READ_WRITE_TOKEN first.",
  notfound: "That project couldn't be found — it may have already been deleted.",
};

export default async function AdminPortfolioListPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [items, params] = await Promise.all([getPortfolio(), searchParams]);
  const errorMessage = params.error ? ERROR_MESSAGES[params.error] : null;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Portfolio</h1>
          <p className="mt-1 text-sm text-muted">{items.length} projects</p>
        </div>
        <Link
          href="/admin/portfolio/new"
          className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white hover:scale-105"
        >
          + Add Project
        </Link>
      </div>

      {errorMessage && (
        <p className="mt-6 rounded-lg bg-red/10 px-4 py-2.5 text-sm text-red">{errorMessage}</p>
      )}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.slug} className="card-surface overflow-hidden rounded-2xl">
            <div className="flex h-32 items-center justify-center bg-background-alt text-2xl font-bold text-muted">
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              ) : (
                item.title.charAt(0)
              )}
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-red">
                {item.category}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">{item.title}</p>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={`/admin/portfolio/${item.slug}/edit`}
                  className="text-xs font-semibold text-foreground hover:text-red"
                >
                  Edit
                </Link>
                <form action={deletePortfolioItem}>
                  <input type="hidden" name="slug" value={item.slug} />
                  <button type="submit" className="text-xs font-semibold text-muted hover:text-red">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
