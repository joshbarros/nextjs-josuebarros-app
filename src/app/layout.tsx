import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/Analytics";
import { PersonSchema, ServiceSchema, WebsiteSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Josué Barros | Full-Stack Engineer & MVP Builder",
  description: "I build high-quality MVPs and web applications. Full-stack engineer specialized in React, Next.js, and Node.js.",
  keywords: ["Full-Stack Engineer", "React Developer", "Next.js", "MVP Builder", "Web Development"],
  authors: [{ name: "Josué Barros" }],
  openGraph: {
    title: "Josué Barros | Full-Stack Engineer & MVP Builder",
    description: "I build high-quality MVPs and web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Josué Barros Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josué Barros",
    description: "Full-Stack Engineer & MVP Builder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <PersonSchema />
        <ServiceSchema />
        <WebsiteSchema />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <CustomCursor />
          <Navigation />
          {children}
          <Footer />
          <Toaster />
          <Analytics domain="josuebarros.com" />
        </Providers>
      </body>
    </html>
  );
}
