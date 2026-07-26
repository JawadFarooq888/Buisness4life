/**
 * One-time migration: uploads the existing local images in public/portfolio
 * and public/gallery to Vercel Blob storage, then writes data/portfolio.json
 * and data/gallery.json so the admin panel takes over from there.
 *
 * Usage: npm run seed   (requires BLOB_READ_WRITE_TOKEN in .env.local)
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";
import { portfolio } from "../src/data/portfolio";
import { galleryItems } from "../src/data/gallery";

try {
  process.loadEnvFile(".env.local");
} catch {
  // .env.local not found — assume env vars are already set some other way
}

async function uploadLocalImage(localPath: string, blobPathname: string): Promise<string | undefined> {
  const absolute = path.join(process.cwd(), "public", localPath);
  try {
    const file = await readFile(absolute);
    const { url } = await put(blobPathname, file, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
    });
    console.log(`Uploaded ${localPath} -> ${url}`);
    return url;
  } catch (err) {
    console.warn(`Skipping ${localPath}: ${(err as Error).message}`);
    return undefined;
  }
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "BLOB_READ_WRITE_TOKEN is not set. Add it to .env.local (pull it with `vercel env pull .env.local`) and re-run.",
    );
    process.exit(1);
  }

  console.log(`Seeding ${portfolio.length} portfolio projects...`);
  const seededPortfolio = await Promise.all(
    portfolio.map(async (item) => {
      if (!item.image) return item;
      const url = await uploadLocalImage(item.image, `portfolio/${item.slug}${path.extname(item.image)}`);
      return { ...item, image: url ?? item.image };
    }),
  );

  console.log(`Seeding ${galleryItems.length} gallery photos...`);
  const seededGallery = await Promise.all(
    galleryItems.map(async (item) => {
      if (!item.image) return item;
      const url = await uploadLocalImage(item.image, `gallery/${item.id}${path.extname(item.image)}`);
      return { ...item, image: url ?? item.image };
    }),
  );

  await put("data/portfolio.json", JSON.stringify(seededPortfolio, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  await put("data/gallery.json", JSON.stringify(seededGallery, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  console.log("Done! The admin panel now manages this content from Blob storage.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
