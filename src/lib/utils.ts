import config from "@/config/config.json";
import menu from "@/config/menu.json";

export { config, menu };

export const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

// Prefix root-relative paths ("/images/a.png", "/#about") with the configured base path.
export const url = (path = "/") => {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
};
