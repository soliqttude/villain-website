import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/commands", "/status", "/faq", "/support", "/terms", "/privacy"];
  return routes.map((route) => ({
    url: `https://villain.best${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
