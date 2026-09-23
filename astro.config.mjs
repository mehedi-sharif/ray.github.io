import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Hosted on GitHub Pages with the custom domain https://rayhossain.com (DNS on Cloudflare)
export default defineConfig({
  site: "https://rayhossain.com",
  trailingSlash: "ignore",
  // Old post URLs from before posts were renamed to title-based slugs
  redirects: {
    "/blog/post-1": "/blog/what-10m-in-ad-spend-taught-me",
    "/blog/post-2": "/blog/writing-hooks-that-stop-the-scroll",
    "/blog/post-3": "/blog/from-problem-to-profit",
    "/blog/post-4": "/blog/creative-vs-targeting",
    "/blog/post-5": "/blog/staying-a-lifetime-learner",
  },
  vite: { plugins: [tailwindcss()] },
});
