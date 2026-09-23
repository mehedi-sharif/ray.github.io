import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { parse } from "yaml";
import config from "./src/config/config.json" with { type: "json" };

// Hosted on GitHub Pages; the custom domain is set in the repo's Pages settings.
const site = config.site.base_url;

// Redirect stubs (from `aliases` in blog frontmatter) are noindex, so keep them out of the sitemap.
// Parse frontmatter with `yaml`, not a regex: CRLF, BOMs and flow lists must all work.
const blogDir = new URL("./src/content/blog/", import.meta.url);
const aliasPaths = new Set(
  readdirSync(blogDir)
    .filter((f) => /\.mdx?$/.test(f))
    .flatMap((f) => {
      const raw = readFileSync(new URL(f, blogDir), "utf8").replace(/^﻿/, "");
      const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const data = fm ? parse(fm[1]) ?? {} : {};
      return (data.aliases ?? []).map((a) => `/${String(a).replace(/^\/+|\/+$/g, "")}/`);
    }),
);

export default defineConfig({
  site,
  trailingSlash: "ignore",
  integrations: [
    sitemap({ filter: (page) => !aliasPaths.has(new URL(page).pathname) }),
  ],
  vite: { plugins: [tailwindcss()] },
});
