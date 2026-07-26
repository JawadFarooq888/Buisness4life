import { notFound } from "next/navigation";
import PortfolioForm from "../../PortfolioForm";
import { updatePortfolioItem } from "../../actions";
import { getPortfolio } from "@/lib/content";

const ERROR_MESSAGES: Record<string, string> = {
  storage: "Image storage isn't connected — set BLOB_READ_WRITE_TOKEN first.",
};

export default async function EditPortfolioItemPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const [{ slug }, query, items] = await Promise.all([params, searchParams, getPortfolio()]);
  const item = items.find((p) => p.slug === slug);
  if (!item) notFound();

  const errorMessage = query.error ? ERROR_MESSAGES[query.error] : null;
  const action = updatePortfolioItem.bind(null, slug);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Edit Portfolio Project</h1>
      {errorMessage && (
        <p className="mt-4 max-w-2xl rounded-lg bg-red/10 px-4 py-2.5 text-sm text-red">
          {errorMessage}
        </p>
      )}
      <div className="mt-6">
        <PortfolioForm action={action} item={item} submitLabel="Save Changes" />
      </div>
    </div>
  );
}
