import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { categories, authors, articleType } from "../app/blog/_assets/content";

// Function to get all markdown files
function getMarkdownFiles() {
  const postsDirectory = path.join(process.cwd(), "public/blog/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter((fileName) => fileName.endsWith(".md"));
}

// Function to get article data from markdown
async function getArticleFromMarkdown(fileName: string): Promise<articleType> {
  const fullPath = path.join(process.cwd(), "public/blog/posts", fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug: matterResult.data.slug as string,
    title: matterResult.data.title as string,
    description: matterResult.data.description as string,
    categories: (matterResult.data.categories as string[]).map(
      (cat) => categories.find((c) => c.slug === cat)!
    ),
    author: authors.find((a) => a.slug === matterResult.data.author as string)!,
    publishedAt: matterResult.data.publishedAt as string,
    image: {
      urlRelative: matterResult.data.image as string,
      alt: `${matterResult.data.title} illustration`,
    },
    content: contentHtml,
  };
}

// Get all articles
export async function getArticles(): Promise<articleType[]> {
  const fileNames = getMarkdownFiles();
  const articles = await Promise.all(
    fileNames.map((fileName) => getArticleFromMarkdown(fileName))
  );

  // Sort articles by date
  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}