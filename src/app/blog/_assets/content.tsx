// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
  slug: string;
  title: string;
  titleShort?: string;
  description: string;
  descriptionShort?: string;
};

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs: { [key: string]: string } = {
  engineering: "engineering",
  strategy: "strategy",
  process: "process",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories: categoryType[] = [
  {
    slug: categorySlugs.engineering,
    title: "Engineering",
    titleShort: "Engineering",
    description: "Technical insights on building MVPs, choosing tech stacks, and engineering best practices.",
    descriptionShort: "Technical insights and best practices.",
  },
  {
    slug: categorySlugs.strategy,
    title: "Strategy",
    titleShort: "Strategy",
    description: "Business strategy, product decisions, and startup growth tactics.",
    descriptionShort: "Business and product strategy.",
  },
  {
    slug: categorySlugs.process,
    title: "Process",
    titleShort: "Process",
    description: "Project management, timelines, and the realities of building software products.",
    descriptionShort: "Project management and timelines.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

export type authorType = {
  slug: string;
  name: string;
  job: string;
  description: string;
  avatar: string;
  socials?: {
    name: string;
    icon: string; // Simple string identifier
    url: string;
  }[];
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs: {
  [key: string]: string;
} = {
  josue: "josue",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors: authorType[] = [
  {
    slug: authorSlugs.josue,
    name: "Josué Barros",
    job: "Full-Stack Engineer & MVP Builder",
    description: "Full-Stack Engineer specialized in React, Next.js, and Node.js. I build high-quality MVPs and web applications.",
    avatar: "JB",
    socials: [
      {
        name: "LinkedIn",
        icon: "linkedin", // Simple string identifier
        url: "https://www.linkedin.com/in/joshbarros",
      },
      {
        name: "Email",
        icon: "email",
        url: "mailto:hello@josuebarros.com",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

export type articleType = {
  slug: string;
  title: string;
  description: string;
  categories: categoryType[];
  author: authorType;
  publishedAt: string;
  image: {
    urlRelative: string;
    alt: string;
  };
  content: string; // HTML content
};