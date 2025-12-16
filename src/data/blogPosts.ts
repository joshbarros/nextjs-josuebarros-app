// Mock data structure - easily replaceable with Strapi/Directus API responses
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-mvps-fail-technical-debt",
    title: "Why Most MVPs Fail: The Hidden Cost of Technical Debt",
    excerpt: "Speed matters, but cutting corners on architecture creates compounding problems. Here's how to ship fast without sacrificing your future.",
    content: `
# Why Most MVPs Fail: The Hidden Cost of Technical Debt

Speed is everything when you're racing to validate your idea. But there's a difference between moving fast and being reckless.

## The Speed vs. Quality Trap

Most founders face a false dichotomy: ship fast with spaghetti code, or take forever building the "perfect" architecture. Neither approach works.

### What Actually Matters

**Week 1-2: Foundation**
- Authentication that scales
- Database schema that won't need complete rewrites
- CI/CD from day one

**Week 3-6: Core Features**
- Focus on the one thing that makes your product unique
- Everything else can be duct tape

**Week 7-10: Polish & Launch**
- Error handling
- Edge cases that real users will hit
- Basic monitoring

## The Real Cost of Shortcuts

I've seen companies spend 6 months "rewriting" codebases that were built in 2 months. That's not technical debt—that's technical bankruptcy.

### Red Flags I Look For

1. No tests on critical business logic
2. Hardcoded values everywhere
3. No separation between environments
4. "It works on my machine" deployment

## My Approach

I build MVPs that can become real products. The extra week upfront saves months down the road.

**The goal isn't perfect code—it's code that won't actively fight against you as you scale.**
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "Engineering",
    readTime: "5 min read",
    publishedAt: "2024-01-15",
    author: {
      name: "Josué Barros",
      avatar: "JB",
    },
  },
  {
    id: "2",
    slug: "choosing-tech-stack-startup",
    title: "How to Choose Your Startup's Tech Stack in 2024",
    excerpt: "React or Vue? Go or Node? The answer depends on one thing most founders ignore: who's going to maintain this code?",
    content: `
# How to Choose Your Startup's Tech Stack in 2024

Every week, a founder asks me: "What's the best tech stack for my startup?" 

My answer is always the same: **It depends on who's going to work on it.**

## The Hiring Reality

The "best" technology means nothing if you can't hire for it. Here's what I recommend based on your situation:

### If You're Hiring Junior Developers
- **Frontend:** React (massive talent pool)
- **Backend:** Node.js or Python
- **Database:** PostgreSQL
- **Hosting:** Vercel or Railway

### If You're Hiring Senior Engineers
- **Frontend:** Whatever they prefer
- **Backend:** Go, Rust, or Elixir (they'll make it work)
- **Database:** PostgreSQL (some things never change)
- **Hosting:** Kubernetes on GCP/AWS

### If It's Just You (For Now)
- **Frontend:** Next.js (full-stack in one)
- **Backend:** Supabase for everything
- **Database:** Included with Supabase
- **Hosting:** Vercel

## Technologies I Always Recommend

1. **TypeScript** — The time savings from catching bugs early is worth the learning curve
2. **PostgreSQL** — Battle-tested, scales further than you think
3. **Docker** — Eliminates "works on my machine" forever

## Technologies I Avoid for MVPs

1. **Microservices** — You don't need them until you really, really do
2. **GraphQL** — REST is fine for 95% of startups
3. **Kubernetes** — Managed services are cheaper than your time

## The Bottom Line

Pick boring technology. Save your innovation budget for your actual product.
    `,
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    category: "Strategy",
    readTime: "4 min read",
    publishedAt: "2024-01-08",
    author: {
      name: "Josué Barros",
      avatar: "JB",
    },
  },
  {
    id: "3",
    slug: "from-idea-to-launch-timeline",
    title: "From Idea to Launch: A Realistic Timeline for Your MVP",
    excerpt: "Forget the 'build in a weekend' hype. Here's what actually happens when you build a product that works.",
    content: `
# From Idea to Launch: A Realistic Timeline for Your MVP

The internet is full of "I built a SaaS in 48 hours" posts. Here's what they don't tell you: most of those products have zero users.

## The Honest Timeline

### Week 1: Discovery & Architecture
- Understanding your actual problem (not what you think it is)
- Designing data models
- Setting up infrastructure
- **Output:** Technical spec, deployed empty shell

### Week 2-3: Core Features
- Authentication & user management
- The ONE feature that defines your product
- Basic admin functionality
- **Output:** Working prototype, invite-only

### Week 4-5: Integration & Polish
- Third-party integrations (payments, email, etc.)
- Error handling
- Loading states (people forget these!)
- **Output:** Beta-ready product

### Week 6-8: Testing & Iteration
- Real user feedback
- Bug fixes
- Performance optimization
- **Output:** Launch-ready product

### Week 9-10: Launch Prep
- Documentation
- Monitoring setup
- Marketing pages
- **Output:** Public launch

## Why This Takes 10 Weeks (Not 2)

The "weekend MVP" crowd is building toys. You're building a business.

### Hidden Time Sinks
- **OAuth integration:** 2-3 days (every time)
- **Email deliverability:** Ongoing battle
- **Payment edge cases:** Refunds, failed charges, subscriptions
- **Mobile responsiveness:** Add 30% to all estimates

## How to Actually Go Faster

1. **Start with design.** Figma before code saves weeks.
2. **Use proven patterns.** Don't reinvent authentication.
3. **Ship incrementally.** Get feedback on day 1, not day 60.
4. **Hire someone who's done it.** (That's where I come in.)

The goal isn't to ship fast—it's to ship *right* the first time.
    `,
    coverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop",
    category: "Process",
    readTime: "6 min read",
    publishedAt: "2024-01-01",
    author: {
      name: "Josué Barros",
      avatar: "JB",
    },
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};
