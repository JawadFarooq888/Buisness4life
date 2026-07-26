import { portfolioCategories, type PortfolioProject } from "@/data/portfolio";

export default function PortfolioForm({
  action,
  item,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  item?: PortfolioProject;
  submitLabel: string;
}) {
  return (
    <form action={action} className="card-surface max-w-2xl space-y-5 rounded-2xl p-6">
      <div>
        <label className="block text-xs font-medium text-muted">Project Title *</label>
        <input
          name="title"
          type="text"
          required
          defaultValue={item?.title}
          placeholder="e.g. Felix Associates"
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-red focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted">Category</label>
        <select
          name="category"
          defaultValue={item?.category ?? portfolioCategories[0]}
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-red focus:outline-none"
        >
          {portfolioCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted">Location (optional)</label>
        <input
          name="location"
          type="text"
          defaultValue={item?.location}
          placeholder="e.g. Rawalpindi"
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-red focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted">Services Used (comma separated)</label>
        <input
          name="servicesUsed"
          type="text"
          defaultValue={item?.servicesUsed.join(", ")}
          placeholder="e.g. LED Sign Boards, ACP Cladding"
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-red focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted">Description</label>
        <textarea
          name="description"
          rows={3}
          defaultValue={item?.description}
          className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-red focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted">
          {item ? "Replace Photo" : "Photo"}
        </label>
        {item?.image && (
          <div className="mt-2 flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" className="h-16 w-16 rounded-lg object-cover" />
            <label className="flex items-center gap-2 text-xs text-muted">
              <input type="checkbox" name="removeImage" /> Remove current photo
            </label>
          </div>
        )}
        <input
          name="image"
          type="file"
          accept="image/*"
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground file:mr-3 file:rounded-full file:border-0 file:bg-red file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        {submitLabel}
      </button>
    </form>
  );
}
