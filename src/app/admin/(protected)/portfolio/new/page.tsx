import PortfolioForm from "../PortfolioForm";
import { createPortfolioItem } from "../actions";

const ERROR_MESSAGES: Record<string, string> = {
  title: "Project title is required.",
  storage: "Image storage isn't connected — set BLOB_READ_WRITE_TOKEN first.",
};

export default async function NewPortfolioItemPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const errorMessage = params.error ? ERROR_MESSAGES[params.error] : null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Add Portfolio Project</h1>
      {errorMessage && (
        <p className="mt-4 max-w-2xl rounded-lg bg-red/10 px-4 py-2.5 text-sm text-red">
          {errorMessage}
        </p>
      )}
      <div className="mt-6">
        <PortfolioForm action={createPortfolioItem} submitLabel="Add Project" />
      </div>
    </div>
  );
}
