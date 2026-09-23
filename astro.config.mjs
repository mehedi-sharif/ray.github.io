import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: https://mehedi-sharif.github.io/ray.github.io/
export default defineConfig({
  site: "https://mehedi-sharif.github.io",
  base: "/ray.github.io",
  trailingSlash: "ignore",
  vite: { plugins: [tailwindcss()] },
});
