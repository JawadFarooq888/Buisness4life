"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getPortfolio, savePortfolio } from "@/lib/content";
import { uploadImage, deleteBlob, blobConfigured } from "@/lib/blob";
import { portfolioCategories, type PortfolioCategory, type PortfolioProject } from "@/data/portfolio";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCategory(value: string): PortfolioCategory {
  return (portfolioCategories as string[]).includes(value)
    ? (value as PortfolioCategory)
    : portfolioCategories[0];
}

function parseServices(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function createPortfolioItem(formData: FormData) {
  if (!blobConfigured()) {
    redirect("/admin/portfolio/new?error=storage");
  }

  const title = String(formData.get("title") ?? "").trim();
  if (!title) {
    redirect("/admin/portfolio/new?error=title");
  }

  const category = parseCategory(String(formData.get("category") ?? ""));
  const location = String(formData.get("location") ?? "").trim();
  const servicesUsed = parseServices(String(formData.get("servicesUsed") ?? ""));
  const description = String(formData.get("description") ?? "").trim();
  const imageFile = formData.get("image") as File | null;

  const items = await getPortfolio();
  let slug = slugify(title);
  let suffix = 2;
  while (items.some((p) => p.slug === slug)) {
    slug = `${slugify(title)}-${suffix++}`;
  }

  let image: string | undefined;
  if (imageFile && imageFile.size > 0) {
    const ext = imageFile.name.split(".").pop() || "jpg";
    image = await uploadImage(`portfolio/${slug}.${ext}`, imageFile);
  }

  const newItem: PortfolioProject = {
    slug,
    title,
    category,
    location: location || undefined,
    servicesUsed,
    description,
    image,
  };

  await savePortfolio([newItem, ...items]);
  revalidatePath("/portfolio");
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
  redirect("/admin/portfolio");
}

export async function updatePortfolioItem(originalSlug: string, formData: FormData) {
  if (!blobConfigured()) {
    redirect(`/admin/portfolio/${originalSlug}/edit?error=storage`);
  }

  const items = await getPortfolio();
  const existing = items.find((p) => p.slug === originalSlug);
  if (!existing) {
    redirect("/admin/portfolio?error=notfound");
  }

  const title = String(formData.get("title") ?? "").trim();
  const category = parseCategory(String(formData.get("category") ?? ""));
  const location = String(formData.get("location") ?? "").trim();
  const servicesUsed = parseServices(String(formData.get("servicesUsed") ?? ""));
  const description = String(formData.get("description") ?? "").trim();
  const imageFile = formData.get("image") as File | null;
  const removeImage = formData.get("removeImage") === "on";

  let image = existing.image;

  if (removeImage && image) {
    await deleteBlob(image);
    image = undefined;
  }

  if (imageFile && imageFile.size > 0) {
    if (image) await deleteBlob(image);
    const ext = imageFile.name.split(".").pop() || "jpg";
    image = await uploadImage(`portfolio/${originalSlug}.${ext}`, imageFile);
  }

  const updated: PortfolioProject = {
    ...existing,
    title: title || existing.title,
    category,
    location: location || undefined,
    servicesUsed: servicesUsed.length ? servicesUsed : existing.servicesUsed,
    description: description || existing.description,
    image,
  };

  await savePortfolio(items.map((p) => (p.slug === originalSlug ? updated : p)));
  revalidatePath("/portfolio");
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
  redirect("/admin/portfolio");
}

export async function deletePortfolioItem(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  const items = await getPortfolio();
  const existing = items.find((p) => p.slug === slug);
  if (existing?.image) await deleteBlob(existing.image);
  await savePortfolio(items.filter((p) => p.slug !== slug));
  revalidatePath("/portfolio");
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
  redirect("/admin/portfolio");
}
