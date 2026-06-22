import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fukuii.com";
  const lastModified = new Date().toISOString();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/features`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/roadmap`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/stack`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/architecture`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/guide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
