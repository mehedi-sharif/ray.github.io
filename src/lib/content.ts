import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

// Filenames become URLs. Warn (don't throw) so a CMS editor still gets a live page plus a note in the deploy log.
const warnUnsafeSlug = (post: Post) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.id)) {
    console.warn(
      `[blog] "${post.filePath}" should be lowercase ASCII letters, digits and hyphens only; its URL is "/${post.id}/".`,
    );
  }
};

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  posts.forEach(warnUnsafeSlug);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Normalise a path to "/segment/.../" so aliases and live URLs compare equal. */
export const toPath = (p: string) => `/${p.replace(/^\/+|\/+$/g, "")}/`;

/** Plain-text excerpt of a post body, for share-card descriptions. */
export const excerpt = (body = "", length = 160) => {
  const text = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/[*_`>~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length).replace(/\s+\S*$/, "")}…` : text;
};
