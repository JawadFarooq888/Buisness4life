import Link from "next/link";
import { getGallery } from "@/lib/content";
import { deleteGalleryItem } from "./actions";

const ERROR_MESSAGES: Record<string, string> = {
  storage: "Image storage isn't connected — set BLOB_READ_WRITE_TOKEN first.",
  notfound: "That item couldn't be found — it may have already been deleted.",
};

export default async function AdminGalleryListPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [items, params] = await Promise.all([getGallery(), searchParams]);
  const errorMessage = params.error ? ERROR_MESSAGES[params.error] : null;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gallery</h1>
          <p className="mt-1 text-sm text-muted">{items.length} photos</p>
        </div>
        <Link
          href="/admin/gallery/new"
          className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white hover:scale-105"
        >
          + Add Photo
        </Link>
      </div>

      {errorMessage && (
        <p className="mt-6 rounded-lg bg-red/10 px-4 py-2.5 text-sm text-red">{errorMessage}</p>
      )}

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="card-surface overflow-hidden rounded-2xl">
            <div className="flex h-28 items-center justify-center bg-background-alt text-xl font-bold text-muted">
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              ) : (
                item.title.charAt(0)
              )}
            </div>
            <div className="p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-red">
                {item.category}
              </p>
              <p className="mt-1 truncate text-xs font-semibold text-foreground">{item.title}</p>
              <div className="mt-3 flex items-center gap-3">
                <Link
                  href={`/admin/gallery/${item.id}/edit`}
                  className="text-xs font-semibold text-foreground hover:text-red"
                >
                  Edit
                </Link>
                <form action={deleteGalleryItem}>
                  <input type="hidden" name="id" value={item.id} />
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
