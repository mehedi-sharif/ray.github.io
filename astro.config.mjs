import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Hosted on GitHub Pages with the custom domain https://rayhossain.com (DNS on Cloudflare)
export default defineConfig({
  site: "https://rayhossain.com",
  trailingSlash: "ignore",
  vite: { plugins: [tailwindcss()] },
});
