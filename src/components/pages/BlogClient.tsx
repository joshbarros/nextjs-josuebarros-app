"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search, X } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { GlassCard } from "@/components/GlassCard";
import { TiltCard } from "@/components/TiltCard";
import { FloatingOrbs } from "@/components/FloatingOrbs";

export const BlogClient = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories
    const categories = useMemo(() => {
        const cats = new Set(blogPosts.map((post) => post.category));
        return Array.from(cats);
    }, []);

    // Filter posts based on search and category
    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesSearch =
                searchQuery === "" ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory =
                selectedCategory === null || post.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const featuredPost = filteredPosts[0];
    const otherPosts = filteredPosts.slice(1);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory(null);
    };

    const hasActiveFilters = searchQuery !== "" || selectedCategory !== null;

    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 overflow-hidden">
                <FloatingOrbs />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <FadeInWhenVisible>
                        <p className="label-mono text-center mb-4">INSIGHTS & IDEAS</p>
                        <h1 className="text-headline font-display text-center mb-6">
                            The <span className="text-gradient">Blog</span>
                        </h1>
                        <p className="text-foreground-secondary text-center max-w-xl mx-auto mb-10">
                            Thoughts on building products, engineering practices, and the startup journey.
                        </p>
                    </FadeInWhenVisible>

                    {/* Search and Filters */}
                    <FadeInWhenVisible delay={0.1}>
                        <div className="max-w-2xl mx-auto space-y-4">
                            {/* Search Input */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-background-secondary border border-foreground/10 rounded-full pl-12 pr-12 py-3.5 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 transition-colors"
                                    maxLength={100}
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>

                            {/* Category Filters */}
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === null
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-background-tertiary text-foreground-secondary hover:text-foreground hover:bg-background-secondary"
                                        }`}
                                >
                                    All
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-background-tertiary text-foreground-secondary hover:text-foreground hover:bg-background-secondary"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Active filters indicator */}
                            {hasActiveFilters && (
                                <div className="flex items-center justify-center gap-2 text-sm text-foreground-secondary">
                                    <span>
                                        {filteredPosts.length} {filteredPosts.length === 1 ? "result" : "results"}
                                    </span>
                                    <span className="text-foreground-muted">•</span>
                                    <button
                                        onClick={clearFilters}
                                        className="text-primary hover:text-primary/80 transition-colors"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* No Results */}
            <AnimatePresence mode="wait">
                {filteredPosts.length === 0 ? (
                    <motion.section
                        key="no-results"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="px-6 py-20"
                    >
                        <div className="max-w-md mx-auto text-center">
                            <GlassCard>
                                <div className="py-8">
                                    <Search className="w-12 h-12 text-foreground-muted mx-auto mb-4" />
                                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                                        No articles found
                                    </h3>
                                    <p className="text-foreground-secondary mb-6">
                                        Try adjusting your search or filter to find what you&apos;re looking for.
                                    </p>
                                    <button
                                        onClick={clearFilters}
                                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            </GlassCard>
                        </div>
                    </motion.section>
                ) : (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Featured Post */}
                        {featuredPost && (
                            <section className="px-6 pb-16 pt-8">
                                <div className="max-w-6xl mx-auto">
                                    <FadeInWhenVisible>
                                        <Link href={`/blog/${featuredPost.slug}`}>
                                            <TiltCard>
                                                <GlassCard className="p-0 overflow-hidden group">
                                                    <div className="grid md:grid-cols-2 gap-0">
                                                        <div className="aspect-video md:aspect-auto overflow-hidden">
                                                            <img
                                                                src={featuredPost.coverImage}
                                                                alt={featuredPost.title}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </div>
                                                        <div className="p-8 flex flex-col justify-center">
                                                            <span className="label-mono mb-4">{featuredPost.category}</span>
                                                            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                                                                {featuredPost.title}
                                                            </h2>
                                                            <p className="text-foreground-secondary mb-6 line-clamp-3">
                                                                {featuredPost.excerpt}
                                                            </p>
                                                            <div className="flex items-center gap-4 text-sm text-foreground-muted">
                                                                <span className="flex items-center gap-1.5">
                                                                    <Calendar className="w-4 h-4" />
                                                                    {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                                                                        month: "short",
                                                                        day: "numeric",
                                                                        year: "numeric",
                                                                    })}
                                                                </span>
                                                                <span className="flex items-center gap-1.5">
                                                                    <Clock className="w-4 h-4" />
                                                                    {featuredPost.readTime}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </GlassCard>
                                            </TiltCard>
                                        </Link>
                                    </FadeInWhenVisible>
                                </div>
                            </section>
                        )}

                        {/* Other Posts Grid */}
                        {otherPosts.length > 0 && (
                            <section className="px-6 pb-32">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {otherPosts.map((post, index) => (
                                            <FadeInWhenVisible key={post.id} delay={index * 0.1}>
                                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                                    <TiltCard className="h-full">
                                                        <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
                                                            <div className="aspect-video overflow-hidden">
                                                                <img
                                                                    src={post.coverImage}
                                                                    alt={post.title}
                                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                />
                                                            </div>
                                                            <div className="p-6 flex flex-col flex-1">
                                                                <span className="label-mono mb-3">{post.category}</span>
                                                                <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                                    {post.title}
                                                                </h3>
                                                                <p className="text-foreground-secondary text-sm mb-4 line-clamp-2 flex-1">
                                                                    {post.excerpt}
                                                                </p>
                                                                <div className="flex items-center justify-between text-sm text-foreground-muted mt-auto">
                                                                    <span>{post.readTime}</span>
                                                                    <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                                                        Read <ArrowRight className="w-4 h-4" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </GlassCard>
                                                    </TiltCard>
                                                </Link>
                                            </FadeInWhenVisible>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};
