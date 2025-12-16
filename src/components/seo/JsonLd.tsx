interface PersonSchemaProps {
  name?: string;
  url?: string;
  image?: string;
  description?: string;
  email?: string;
  jobTitle?: string;
  sameAs?: string[];
}

export const PersonSchema = ({
  name = "Josué Barros",
  url = "https://josuebarros.com",
  image = "https://josuebarros.com/avatar.png",
  description = "Full-Stack Engineer & MVP Builder. I build high-quality MVPs and web applications, specialized in React, Next.js, and Node.js.",
  email = "hello@josuebarros.com",
  jobTitle = "Full-Stack Engineer",
  sameAs = [
    "https://www.linkedin.com/in/joshbarros",
  ],
}: PersonSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    image,
    description,
    email,
    jobTitle,
    sameAs,
    knowsAbout: [
      "MVP Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Go",
      "Python",
      "Cloud Architecture",
      "DevOps",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Software Engineering",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ServiceSchemaProps {
  name?: string;
  provider?: string;
  url?: string;
  description?: string;
  serviceType?: string;
  areaServed?: string;
  priceRange?: string;
}

export const ServiceSchema = ({
  name = "MVP Development Services",
  provider = "Josué Barros",
  url = "https://josuebarros.com",
  description = "Custom MVP development services including full-stack web applications, mobile apps, and technical consulting. Projects start at $15,000.",
  serviceType = "Software Development",
  areaServed = "Worldwide",
  priceRange = "$15,000+",
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider: {
      "@type": "Person",
      name: provider,
      url,
    },
    description,
    serviceType,
    areaServed,
    priceRange,
    offers: {
      "@type": "Offer",
      price: "15000",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "15000",
        priceCurrency: "USD",
        minPrice: "15000",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
  modifiedAt?: string;
  authorName?: string;
  authorUrl?: string;
}

export const ArticleSchema = ({
  title,
  description,
  url,
  imageUrl = "https://josuebarros.com/og-image.png",
  publishedAt,
  modifiedAt,
  authorName = "Josué Barros",
  authorUrl = "https://josuebarros.com",
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: imageUrl,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
}

export const WebsiteSchema = ({
  name = "Josué Barros",
  url = "https://josuebarros.com",
  description = "Full-Stack Engineer & MVP Builder. Building high-quality MVPs and web applications.",
}: WebsiteSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
