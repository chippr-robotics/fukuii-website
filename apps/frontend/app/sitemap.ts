import type { MetadataRoute } from "next";
import { execSync } from "child_process";

function gitDate(): string {
  try {
    const iso = execSync("git log -1 --format=%cI", { encoding: "utf8" }).trim();
    return iso || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fukuii.com";
  const lastModified = gitDate();

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
      url: `${base}/docs/quickstart`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
