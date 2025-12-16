"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getRecentPosts } from "@/data/blogPosts";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { GlassCard } from "@/components/GlassCard";
import { MagneticButton } from "@/components/MagneticButton";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { toast } from "@/hooks/use-toast";
import type { BlogPost } from "@/data/blogPosts";

export const BlogPostClient = ({ post }: { post: BlogPost }) => {
    const recentPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug);

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
            });
        } else {
            await navigator.clipboard.writeText(window.location.href);
            toast({
                title: "Link copied!",
                description: "The article link has been copied to your clipboard.",
            });
        }
    };

    // Simple markdown-like rendering
    const renderContent = (content: string) => {
        const lines = content.trim().split("\n");
        const elements: React.ReactNode[] = [];
        let currentList: string[] = [];
        let listType: "ul" | "ol" | null = null;
        let elementKey = 0;

        const flushList = () => {
            if (currentList.length > 0 && listType) {
                const ListTag = listType;
                elements.push(
                    <ListTag key={`list-${elementKey++}`} className={listType === "ol" ? "list-decimal" : "list-disc"}>
                        {currentList.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ListTag>
                );
                currentList = [];
                listType = null;
            }
        };

        lines.forEach((line) => {
            const trimmed = line.trim();

            if (trimmed.startsWith("# ")) {
                flushList();
                elements.push(
                    <h1 key={`h1-${elementKey++}`} className="text-3xl md:text-4xl font-display font-bold text-foreground mt-8 mb-6">
                        {trimmed.slice(2)}
                    </h1>
                );
            } else if (trimmed.startsWith("## ")) {
                flushList();
                elements.push(
                    <h2 key={`h2-${elementKey++}`} className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
                        {trimmed.slice(3)}
                    </h2>
                );
            } else if (trimmed.startsWith("### ")) {
                flushList();
                elements.push(
                    <h3 key={`h3-${elementKey++}`} className="text-xl font-display font-semibold text-foreground mt-6 mb-3">
                        {trimmed.slice(4)}
                    </h3>
                );
            } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                flushList();
                elements.push(
                    <p key={`strong-${elementKey++}`} className="text-foreground font-semibold my-4">
                        {trimmed.slice(2, -2)}
                    </p>
                );
            } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                if (listType !== "ul") {
                    flushList();
                    listType = "ul";
                }
                currentList.push(trimmed.slice(2));
            } else if (/^\d+\.\s/.test(trimmed)) {
                if (listType !== "ol") {
                    flushList();
                    listType = "ol";
                }
                currentList.push(trimmed.replace(/^\d+\.\s/, ""));
            } else if (trimmed === "") {
                flushList();
            } else {
                flushList();
                // Handle inline bold
                const formatted = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                elements.push(
                    <p
                        key={`p-${elementKey++}`}
                        className="text-foreground-secondary leading-relaxed my-4"
                        dangerouslySetInnerHTML={{ __html: formatted }}
                    />
                );
            }
        });

        flushList();
        return elements;
    };

    return (
        <main className="bg-background min-h-screen">
            {/* Article Header */}
            <article className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <FadeInWhenVisible>
                        {/* Back link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>

                        {/* Category */}
                        <span className="label-mono mb-4 block">{post.category}</span>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-foreground-secondary mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                                    {post.author.avatar}
                                </div>
                                <span className="font-medium text-foreground">{post.author.name}</span>
                            </div>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </FadeInWhenVisible>

                    {/* Cover Image */}
                    <FadeInWhenVisible delay={0.1}>
                        <div className="aspect-video rounded-lg overflow-hidden mb-12">
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeInWhenVisible>

                    {/* Content */}
                    <FadeInWhenVisible delay={0.2}>
                        <div className="prose-custom">
                            {renderContent(post.content)}
                        </div>
                    </FadeInWhenVisible>

                    {/* Share */}
                    <FadeInWhenVisible delay={0.3}>
                        <div className="mt-12 pt-8 border-t border-foreground/10 flex items-center justify-between">
                            <p className="text-foreground-secondary">
                                Found this useful? Share it with others.
                            </p>
                            <MagneticButton onClick={handleShare} className="!px-4 !py-2">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                            </MagneticButton>
                        </div>
                    </FadeInWhenVisible>

                    {/* Newsletter Signup */}
                    <FadeInWhenVisible delay={0.4}>
                        <div className="mt-16">
                            <NewsletterSignup />
                        </div>
                    </FadeInWhenVisible>
                </div>
            </article>

            {/* Related Posts */}
            {recentPosts.length > 0 && (
                <section className="px-6 pb-32 bg-background-secondary py-20">
                    <div className="max-w-6xl mx-auto">
                        <FadeInWhenVisible>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
                                Continue Reading
                            </h2>
                        </FadeInWhenVisible>

                        <div className="grid md:grid-cols-2 gap-8">
                            {recentPosts.slice(0, 2).map((relatedPost, index) => (
                                <FadeInWhenVisible key={relatedPost.id} delay={index * 0.1}>
                                    <Link href={`/blog/${relatedPost.slug}`} className="group block">
                                        <GlassCard className="p-0 overflow-hidden">
                                            <div className="flex gap-4 p-4">
                                                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={relatedPost.coverImage}
                                                        alt={relatedPost.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <span className="text-xs font-mono text-secondary uppercase tracking-wider mb-1">
                                                        {relatedPost.category}
                                                    </span>
                                                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <span className="text-sm text-foreground-muted mt-1">
                                                        {relatedPost.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </Link>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};
