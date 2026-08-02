import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles-data";
import { demoBanks } from "@/lib/bank-data";

const BASE_URL = "https://parakarne.com";
const LAST_MODIFIED = new Date("2026-08-02T09:00:00+03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "tum-konular/",
    "hakkimizda/",
    "iletisim/",
    "gizlilik/",
    "kvkk/",
    "kullanim-sartlari/",
    "itiraz-sureci/",
  ];

  return [
    ...staticPages.map((path, index) => ({
      url: `${BASE_URL}/${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: index === 0 ? "daily" as const : "monthly" as const,
      priority: index === 0 ? 1 : index === 1 ? 0.9 : 0.6,
    })),
    ...articles.map((article) => ({
      url: `${BASE_URL}/${article.slug}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...demoBanks.map((bank) => ({
      url: `${BASE_URL}/banka/${bank.id}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
