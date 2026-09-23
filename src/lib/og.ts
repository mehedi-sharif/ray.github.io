import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { config } from "@/lib/utils";

export interface OgImage { url: string; width: number; height: number; type: string }

const publicDir = new URL("../../public/", import.meta.url);
const cache = new Map<string, OgImage | null>();

// Facebook needs width/height/type up front, or the first share of a URL renders with no image.
// It also rejects SVG and anything under 600px wide, so those fall back to the default share image.
async function read(path: string): Promise<OgImage | null> {
  if (cache.has(path)) return cache.get(path)!;
  let result: OgImage | null = null;
  try {
    const file = fileURLToPath(new URL(path.replace(/^\/+/, ""), publicDir));
    const { width, height, format } = await sharp(file).metadata();
    if (width && height && format && format !== "svg" && width >= 600) {
      result = {
        url: new URL(path, config.site.base_url).href,
        width,
        height,
        type: `image/${format === "jpg" ? "jpeg" : format}`,
      };
    }
  } catch {
    result = null;
  }
  cache.set(path, result);
  return result;
}

export async function getOgImage(path?: string): Promise<OgImage | null> {
  return (path && (await read(path))) || read(config.site.og_image);
}
