"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MagneticButton } from "./MagneticButton";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-xl text-foreground">
            JB
          </Link>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
            >
              Process
            </button>
            <Link
              href="/blog"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <MagneticButton
              primary
              onClick={handleContactClick}
              className="!px-5 !py-2.5 text-sm"
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-16 right-0 bottom-0 w-full max-w-sm bg-background border-l border-foreground/10"
            >
              <nav className="flex flex-col p-6 pt-8">
                <button
                  onClick={() => scrollToSection("work")}
                  className="py-4 text-left text-lg font-medium text-foreground-secondary hover:text-foreground transition-colors border-b border-foreground/5"
                >
                  Work
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="py-4 text-left text-lg font-medium text-foreground-secondary hover:text-foreground transition-colors border-b border-foreground/5"
                >
                  Process
                </button>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 text-left text-lg font-medium text-foreground-secondary hover:text-foreground transition-colors border-b border-foreground/5"
                >
                  Blog
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="py-4 text-left text-lg font-medium text-foreground-secondary hover:text-foreground transition-colors border-b border-foreground/5"
                >
                  Contact
                </button>

                <div className="mt-8">
                  <button
                    onClick={handleContactClick}
                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    Let&apos;s Talk
                  </button>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/joshbarros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
