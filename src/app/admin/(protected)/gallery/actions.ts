"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getGallery, saveGallery, type GalleryItem } from "@/lib/content";
import { uploadImage, deleteBlob, blobConfigured } from "@/lib/blob";
import { galleryCategories, type GalleryCategory } from "@/data/gallery";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCategory(value: string): GalleryCategory {
  return (galleryCategories as string[]).includes(value)
    ? (value as GalleryCategory)
    : galleryCategories[0];
}

export async function createGalleryItem(formData: FormData) {
  if (!blobConfigured()) {
    redirect("/admin/gallery/new?error=storage");
  }

  const title = String(formData.get("title") ?? "").trim();
  if (!title) {
    redirect("/admin/gallery/new?error=title");
  }

  const category = parseCategory(String(formData.get("category") ?? ""));
  const imageFile = formData.get("image") as File | null;

  const items = await getGallery();
  let id = slugify(title);
  let suffix = 2;
  while (items.some((g) => g.id === id)) {
    id = `${slugify(title)}-${suffix++}`;
  }

  let image: string | undefined;
  if (imageFile && imageFile.size > 0) {
    const ext = imageFile.name.split(".").pop() || "jpg";
    image = await uploadImage(`gallery/${id}.${ext}`, imageFile);
  }

  const newItem: GalleryItem = { id, title, category, image };

  await saveGallery([newItem, ...items]);
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function updateGalleryItem(originalId: string, formData: FormData) {
  if (!blobConfigured()) {
    redirect(`/admin/gallery/${originalId}/edit?error=storage`);
  }

  const items = await getGallery();
  const existing = items.find((g) => g.id === originalId);
  if (!existing) {
    redirect("/admin/gallery?error=notfound");
  }

  const title = String(formData.get("title") ?? "").trim();
  const category = parseCategory(String(formData.get("category") ?? ""));
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
    image = await uploadImage(`gallery/${originalId}.${ext}`, imageFile);
  }

  const updated: GalleryItem = {
    ...existing,
    title: title || existing.title,
    category,
    image,
  };

  await saveGallery(items.map((g) => (g.id === originalId ? updated : g)));
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryItem(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const items = await getGallery();
  const existing = items.find((g) => g.id === id);
  if (existing?.image) await deleteBlob(existing.image);
  await saveGallery(items.filter((g) => g.id !== id));
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}
