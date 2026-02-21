import { MetadataRoute } from "next";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://yashkumarhalder.vercel.app";
    const lastModified = new Date();

    return [
        {
            url: `${baseUrl}/`,
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/tech`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}
