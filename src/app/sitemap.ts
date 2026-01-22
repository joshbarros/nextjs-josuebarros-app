import { MetadataRoute } from "next";
import { getArticles } from "@/lib/getArticles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://josuebarros.com";
    const articles = await getArticles();

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
    ];

    const blogRoutes = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes];
}
