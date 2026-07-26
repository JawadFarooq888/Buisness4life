import { getJson, putJson } from "@/lib/blob";
import { portfolio as staticPortfolio, type PortfolioProject } from "@/data/portfolio";
import { galleryItems as staticGallery, type GalleryCategory } from "@/data/gallery";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image?: string;
};

const PORTFOLIO_KEY = "data/portfolio.json";
const GALLERY_KEY = "data/gallery.json";

export async function getPortfolio(): Promise<PortfolioProject[]> {
  const dynamic = await getJson<PortfolioProject[]>(PORTFOLIO_KEY);
  return dynamic ?? staticPortfolio;
}

export async function savePortfolio(items: PortfolioProject[]) {
  await putJson(PORTFOLIO_KEY, items);
}

export async function getGallery(): Promise<GalleryItem[]> {
  const dynamic = await getJson<GalleryItem[]>(GALLERY_KEY);
  return dynamic ?? staticGallery;
}

export async function saveGallery(items: GalleryItem[]) {
  await putJson(GALLERY_KEY, items);
}
