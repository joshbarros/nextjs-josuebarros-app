import Link from "next/link";
import { getArticles } from "@/lib/getArticles";
import { authors } from "../../_assets/content";
import BadgeCategory from "../../_assets/components/BadgeCategory";
import CardArticle from "../../_assets/components/CardArticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ authorId: string }> }): Promise<Metadata> {
    const { authorId } = await params;
    const author = authors.find((author) => author.slug === authorId);

    if (!author) {
        return {
            title: "Author Not Found",
        };
    }

    return {
        title: `${author.name} | Josué Barros`,
        description: author.description,
    };
}

export async function generateStaticParams() {
    return authors.map((author) => ({
        authorId: author.slug,
    }));
}

export default async function AuthorPage({ params }: { params: Promise<{ authorId: string }> }) {
    const { authorId } = await params;
    const author = authors.find((author) => author.slug === authorId);

    if (!author) {
        notFound();
    }

    const articles = await getArticles();
    const authorArticles = articles.filter((article) =>
        article.author.slug === authorId
    ).sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return (
        <>
            {/* HEADER */}
            <section className="my-12 md:my-20 max-w-[800px]">
                <div className="flex items-center gap-6 mb-6">
                    <div className="avatar">
                        <div className="w-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
                            {author.avatar}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                            {author.name}
                        </h1>
                        <p className="text-base-content/80 text-lg">
                            {author.job}
                        </p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-base-content/80 md:text-lg max-w-[700px] leading-relaxed">
                        {author.description}
                    </p>
                </div>

                {/* SOCIAL LINKS */}
                {author.socials && author.socials.length > 0 && (
                    <div className="flex gap-4 mt-6">
                        {author.socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-sm"
                            >
                                {social.name === "LinkedIn" && (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                )}
                                {social.name === "Email" && (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                                <span className="ml-2">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* ARTICLES BY THIS AUTHOR */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    Articles by {author.name}
                </h2>

                {authorArticles.length > 0 ? (
                    <div className="grid lg:grid-cols-2 gap-8">
                        {authorArticles.map((article, i) => (
                            <CardArticle
                                article={article}
                                key={article.slug}
                                isImagePriority={i <= 2}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-base-content/60">
                        No articles published yet.
                    </p>
                )}
            </section>
        </>
    );
}