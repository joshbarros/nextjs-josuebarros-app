# Josué Barros - Personal Portfolio & Blog

A modern, SEO-optimized personal website and blog built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing MVP development services and technical insights.

![Website Preview](https://via.placeholder.com/800x400?text=Josue+Barros+Portfolio)

## 🚀 Features

### Core Website
- **Modern Design**: Clean, responsive UI with dark mode support
- **Performance Optimized**: Built with Next.js App Router for optimal loading
- **SEO Ready**: Comprehensive meta tags, structured data, and Open Graph
- **Contact Integration**: Email forms powered by Resend
- **Analytics**: Plausible Analytics for privacy-focused tracking

### Blog System (ShipFast-TS Inspired)
- **Markdown Content**: LLM-friendly .md files with frontmatter (title, description, categories, author, image, content)
- **Dynamic Categories**: Engineering, Strategy, Process sections with filtering
- **Author Pages**: Complete author profiles with bio, social links, and article listings
- **SEO Optimized**: Automatic meta generation, JSON-LD schema, Open Graph, Twitter Cards
- **Dark Mode Support**: Full dark theme compatibility with prose inversion
- **Fast Generation**: CLI automation for content creation using Gemini AI
- **Responsive Design**: Mobile-first with typography optimization (@tailwindcss/typography)
- **Static Generation**: Pre-rendered blog pages for optimal performance
- **Component Library**: Reusable CardArticle, BadgeCategory, Avatar, HeaderBlog components

### Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **Content**: Markdown with gray-matter + remark
- **Icons**: Lucide React
- **Fonts**: Inter + Space Grotesk
- **Deployment**: Vercel ready

## 📝 Blog Content Management

### Adding New Blog Posts

1. **Create Markdown File**: Add a new `.md` file to `public/blog/posts/`

```markdown
---
slug: "your-post-slug"
title: "Your Amazing Title"
description: "SEO-optimized description (150-160 chars)"
categories: ["engineering", "strategy", "process"]
author: "josue"
publishedAt: "2026-01-22"
image: "https://images.unsplash.com/your-image-url"
---

# Your Heading

Your content in markdown...

## Subheading

- Bullet points
- **Bold text**
- *Italic text*

> Blockquotes work too

Code blocks:
```javascript
console.log("Hello World!");
```

## Implementation Details

The blog system processes this markdown through:
1. **Gray-matter**: Parses frontmatter into structured data
2. **Remark**: Converts markdown to HTML
3. **Next.js SSG**: Pre-renders pages at build time
4. **Tailwind Typography**: Applies consistent styling
5. **Dark Mode**: Automatic prose inversion for dark themes
```
```

2. **Auto-Processing**: The site automatically:
   - Parses frontmatter with gray-matter
   - Converts markdown to HTML with remark
   - Generates SEO metadata
   - Creates sitemap entries
   - Builds category/author relationships

3. **LLM Generation**: Use Gemini CLI or any AI to generate complete posts:
   ```
   Generate a 800-word blog post about [topic] in markdown format with frontmatter including:
   - slug: kebab-case-url
   - title: SEO-optimized title
   - description: compelling summary
   - categories: from [engineering, strategy, process]
   - author: josue
   - publishedAt: today's date
   - image: Unsplash URL
   ```

### SEO Best Practices Implemented

- **On-Page SEO**: Optimized titles, meta descriptions, headings
- **Technical SEO**: Fast loading, mobile responsive, structured data
- **Content SEO**: E-E-A-T focused, comprehensive articles
- **Internal Linking**: Related posts, category navigation
- **Image Optimization**: Alt text, lazy loading, proper sizing
- **Schema Markup**: Article, Person, Service structured data
- **Sitemap & Robots**: Automatic generation and submission

## 📚 Blog Features

### Content Management
- **LLM Integration**: Designed for AI content generation (Gemini CLI compatible)
- **Frontmatter Support**: YAML metadata for SEO and categorization
- **Live Preview**: Instant updates on file save during development
- **Version Control**: All content tracked in Git for collaboration

### Performance & SEO
- **Static Generation**: Pre-built pages for instant loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Schema Markup**: Rich snippets for search results
- **Sitemap Generation**: Automatic XML sitemap updates
- **Robots.txt**: Proper crawler directives

### Developer Experience
- **TypeScript**: Full type safety for content and components
- **Component Reusability**: Modular design for easy customization
- **Responsive Testing**: Mobile-first development approach
- **Build Optimization**: Turbopack for fast development builds

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm/bun

### Installation

```bash
# Clone the repository
git clone https://github.com/joshbarros/nextjs-josuebarros-app.git
cd nextjs-josuebarros-app

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your keys
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # Complete blog system
│   │   │   ├── _assets/       # Blog core files
│   │   │   │   ├── components/ # Blog UI components
│   │   │   │   │   ├── CardArticle.tsx    # Article preview cards
│   │   │   │   │   ├── BadgeCategory.tsx  # Category badges
│   │   │   │   │   ├── Avatar.tsx         # Author avatars
│   │   │   │   │   ├── CardCategory.tsx   # Category cards
│   │   │   │   │   └── HeaderBlog.tsx     # Blog navigation header
│   │   │   │   └── content.tsx            # Categories & authors data
│   │   │   ├── author/[authorId]/        # Author profile pages
│   │   │   │   └── page.tsx              # Dynamic author pages
│   │   │   ├── [slug]/                   # Individual blog posts
│   │   │   │   └── page.tsx              # Article detail pages
│   │   │   ├── layout.tsx                # Blog-specific layout
│   │   │   └── page.tsx                  # Blog listing page
│   │   ├── api/                          # API routes
│   │   └── page.tsx                      # Homepage
│   ├── components/                       # Shared components
│   ├── lib/                              # Utilities
│   │   └── getArticles.ts               # Markdown processing & article loading
│   └── data/                             # Legacy files (deprecated)
├── public/
│   ├── blog/
│   │   └── posts/             # Markdown blog posts
│   └── favicon.ico
├── tailwind.config.ts         # Tailwind with typography
└── next.config.ts
```

## 🔍 SEO Optimization Checklist

### Content Quality
- [x] E-E-A-T focused content (Experience, Expertise, Authoritativeness, Trustworthiness)
- [x] Comprehensive articles (800+ words with proper headings)
- [x] User intent alignment (informational, transactional)
- [x] Internal linking between related posts

### Technical SEO
- [x] Mobile-first responsive design
- [x] Fast loading times (<3s Core Web Vitals)
- [x] SSL certificate (HTTPS)
- [x] XML sitemap auto-generation
- [x] Robots.txt configuration
- [x] Structured data (JSON-LD) for articles

### On-Page SEO
- [x] Optimized title tags (<60 chars) with article-specific titles
- [x] Compelling meta descriptions (150-160 chars) per article
- [x] Proper heading hierarchy (H1, H2, H3) in markdown content
- [x] Keyword optimization (natural integration in frontmatter & content)
- [x] Image alt text and optimization (Unsplash integration)
- [x] Internal linking (related articles, category navigation)
- [x] URL structure optimization (slug-based, descriptive)

### Off-Page SEO
- [x] Social sharing meta tags (Open Graph, Twitter Cards)
- [x] Author authority building (LinkedIn, personal branding)
- [x] External link strategy (relevant, authoritative sources)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Manual Deployment

```bash
# Build
npm run build

# Start production server
npm start
```

### Environment Variables

```bash
# Required
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=josuebarros.com

# Optional
FROM_EMAIL=contact@josuebarros.com
```

## 📊 Analytics & Monitoring

- **Plausible Analytics**: Privacy-focused, GDPR compliant
- **Google Search Console**: Submit sitemap, monitor indexing
- **Core Web Vitals**: Monitor performance metrics
- **SEO Tools**: Regular audits with tools like Screaming Frog

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Josué Barros**
- Website: [josuebarros.com](https://josuebarros.com)
- Email: hello@josuebarros.com
- LinkedIn: [joshbarros](https://linkedin.com/in/joshbarros)

---

*Built with ❤️ using Next.js, TypeScript, and modern web technologies.*
