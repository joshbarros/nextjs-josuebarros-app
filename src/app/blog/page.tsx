import { BlogClient } from "@/components/pages/BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Josué Barros",
    description: "Thoughts on building products, engineering practices, and the startup journey.",
};

export default function BlogPage() {
    return <BlogClient />;
}
