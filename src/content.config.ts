import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const timeline = z.array(
  z.object({ title: z.string(), place: z.string(), period: z.string(), content: z.string() }),
);
const percentList = z.array(z.object({ value: z.string(), label: z.string() }));

const homepage = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      image: z.string(),
      content: z.string(),
    }),
    about: z.object({
      enable: z.boolean(),
      title: z.string(),
      lead: z.string(),
      content: z.string(),
      tools: z.array(z.object({ name: z.string(), note: z.string(), value: z.string().optional() })),
    }),
    projects: z.object({ enable: z.boolean(), title: z.string() }),
    experience: z.object({ enable: z.boolean(), title: z.string(), items: timeline }),
    stats: z.object({ enable: z.boolean(), items: percentList }),
    ticker: z.object({ enable: z.boolean(), words: z.array(z.string()) }),
    education: z.object({ enable: z.boolean(), title: z.string(), items: timeline }),
    writing: z.object({ enable: z.boolean(), title: z.string(), limit: z.number() }),
    skills: z.object({ enable: z.boolean(), items: percentList }),
    contact: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string(),
      address: z.string(),
      email: z.string(),
      website: z.string(),
      form_action: z.string(),
      button_label: z.string(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^-]*.{md,mdx}", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string().optional(),
    weight: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^-]*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    category: z.string(),
    draft: z.boolean().default(false),
    // Old URLs for this post. Renaming a file? Add its old path here so shared links keep working.
    aliases: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { homepage, projects, blog };
