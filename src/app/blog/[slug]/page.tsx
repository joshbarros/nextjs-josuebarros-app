import Link from "next/link";
import { getArticles } from "@/lib/getArticles";
import BadgeCategory from "../_assets/components/BadgeCategory";
import Avatar from "../_assets/components/Avatar";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const articles = await getArticles();
    const article = articles.find((article) => article.slug === slug);

    if (!article) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${article.title} | Josué Barros`,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: [
                {
                    url: article.image.urlRelative,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const articles = await getArticles();
    const article = articles.find((article) => article.slug === slug);

    if (!article) {
        notFound();
    }

    const articlesRelated = articles
        .filter(
            (a) =>
                a.slug !== slug &&
                a.categories.some((c) =>
                    article.categories.map((c) => c.slug).includes(c.slug)
                )
        )
        .sort(
            (a, b) =>
                new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
        )
        .slice(0, 3);

    return (
        <>
            {/* GO BACK LINK */}
            <div>
                <Link
                    href="/blog"
                    className="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
                    title="Back to Blog"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to Blog
                </Link>
            </div>

            <article>
                {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}
                <section className="my-12 md:my-20 max-w-[800px]">
                    <div className="flex items-center gap-4 mb-6">
                        {article.categories.map((category) => (
                            <BadgeCategory
                                category={category}
                                key={category.slug}
                                link={false}
                            />
                        ))}
                        <span className="text-base-content/80" itemProp="datePublished">
                            {new Date(article.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
                        {article.title}
                    </h1>

                    <p className="text-base-content/80 md:text-lg max-w-[700px]">
                        {article.description}
                    </p>
                </section>

                <div className="flex flex-col md:flex-row">
                    {/* SIDEBAR WITH AUTHORS AND 3 RELATED ARTICLES */}
                    <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-base-content/10">
                        <p className="text-base-content/80 text-sm mb-2 md:mb-3">
                            Posted by
                        </p>
                        <Avatar article={article} />

                        {articlesRelated.length > 0 && (
                            <div className="hidden md:block mt-12">
                                <p className=" text-base-content/80 text-sm  mb-2 md:mb-3">
                                    Related reading
                                </p>
                                <div className="space-y-2 md:space-y-5">
                                    {articlesRelated.map((article) => (
                                        <div className="" key={article.slug}>
                                            <p className="mb-0.5">
                                                <Link
                                                    href={`/blog/${article.slug}`}
                                                    className="link link-hover hover:link-primary font-medium"
                                                    title={article.title}
                                                    rel="bookmark"
                                                >
                                                    {article.title}
                                                </Link>
                                            </p>
                                            <p className="text-base-content/80 max-w-full text-sm">
                                                {article.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* ARTICLE CONTENT */}
                    <section
                        className="w-full max-md:pt-4 md:pr-20 space-y-12 md:space-y-20 prose prose-lg max-w-none dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>
            </article>
        </>
    );
}
