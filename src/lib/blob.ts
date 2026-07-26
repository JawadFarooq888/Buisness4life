import { put, del, list } from "@vercel/blob";

export function blobConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function getJson<T>(pathname: string): Promise<T | null> {
  if (!blobConfigured()) return null;
  try {
    const { blobs } = await list({ prefix: pathname, limit: 1 });
    const match = blobs.find((b) => b.pathname === pathname);
    if (!match) return null;
    const res = await fetch(match.url, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function putJson(pathname: string, data: unknown) {
  await put(pathname, JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function uploadImage(pathname: string, file: File): Promise<string> {
  const { url } = await put(pathname, file, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  return url;
}

export async function deleteBlob(url: string) {
  try {
    await del(url);
  } catch {
    // already deleted or invalid url — ignore
  }
}
