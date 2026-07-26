import GalleryForm from "../GalleryForm";
import { createGalleryItem } from "../actions";

const ERROR_MESSAGES: Record<string, string> = {
  title: "Title is required.",
  storage: "Image storage isn't connected — set BLOB_READ_WRITE_TOKEN first.",
};

export default async function NewGalleryItemPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const errorMessage = params.error ? ERROR_MESSAGES[params.error] : null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Add Gallery Photo</h1>
      {errorMessage && (
        <p className="mt-4 max-w-2xl rounded-lg bg-red/10 px-4 py-2.5 text-sm text-red">
          {errorMessage}
        </p>
      )}
      <div className="mt-6">
        <GalleryForm action={createGalleryItem} submitLabel="Add Photo" />
      </div>
    </div>
  );
}
