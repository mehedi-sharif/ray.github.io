import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Hosted on GitHub Pages with the custom domain https://rayhossain.com (DNS on Cloudflare)
export default defineConfig({
  site: "https://rayhossain.com",
  trailingSlash: "ignore",
  // Old post URLs (/blog/post-N and /blog/<slug>) now live at /<slug>
  redirects: {
    "/blog/post-1": "/what-10m-in-ad-spend-taught-me",
    "/blog/post-2": "/writing-hooks-that-stop-the-scroll",
    "/blog/post-3": "/from-problem-to-profit",
    "/blog/post-4": "/creative-vs-targeting",
    "/blog/post-5": "/staying-a-lifetime-learner",
    "/blog/creative-vs-targeting": "/creative-vs-targeting",
    "/blog/from-problem-to-profit": "/from-problem-to-profit",
    "/blog/staying-a-lifetime-learner": "/staying-a-lifetime-learner",
    "/blog/what-10m-in-ad-spend-taught-me": "/what-10m-in-ad-spend-taught-me",
    "/blog/writing-hooks-that-stop-the-scroll": "/writing-hooks-that-stop-the-scroll",
  },
  vite: { plugins: [tailwindcss()] },
});
