import { env } from "@/lib/utils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const map = [
    {
      url: `${env.baseUrl}`,
    },
    {
      url: `${env.baseUrl}/about`,
    },
    {
      url: `${env.baseUrl}/portfolio`,
    },
    {
      url: `${env.baseUrl}/contact`,
    },
  ];

  return [...map];
}
