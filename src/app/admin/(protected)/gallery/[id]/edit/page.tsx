import { notFound } from "next/navigation";
import GalleryForm from "../../GalleryForm";
import { updateGalleryItem } from "../../actions";
import { getGallery } from "@/lib/content";

const ERROR_MESSAGES: Record<string, string> = {
  storage: "Image storage isn't connected — set BLOB_READ_WRITE_TOKEN first.",
};

export default async function EditGalleryItemPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const [{ id }, query, items] = await Promise.all([params, searchParams, getGallery()]);
  const item = items.find((g) => g.id === id);
  if (!item) notFound();

  const errorMessage = query.error ? ERROR_MESSAGES[query.error] : null;
  const action = updateGalleryItem.bind(null, id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Edit Gallery Photo</h1>
      {errorMessage && (
        <p className="mt-4 max-w-2xl rounded-lg bg-red/10 px-4 py-2.5 text-sm text-red">
          {errorMessage}
        </p>
      )}
      <div className="mt-6">
        <GalleryForm action={action} item={item} submitLabel="Save Changes" />
      </div>
    </div>
  );
}
