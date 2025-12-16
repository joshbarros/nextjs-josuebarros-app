import Link from "next/link";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-foreground/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <FadeInWhenVisible>
          <div className="text-center md:text-left">
            <p className="font-display font-semibold text-foreground">
              Josué Barros
            </p>
            <p className="text-foreground-secondary text-sm">
              MVP Builder • Full-Stack Engineer
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/joshbarros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-foreground text-sm relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@josuebarros.com"
              className="text-foreground-secondary hover:text-foreground text-sm relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Email
            </a>
          </div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible delay={0.2}>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-xs">
            <Link
              href="/privacy"
              className="text-foreground-muted hover:text-foreground-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-foreground-muted hover:text-foreground-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-center text-foreground-muted text-xs">
            © {new Date().getFullYear()} Josué Barros. Building the future, one MVP at a time.
          </p>
        </div>
      </FadeInWhenVisible>
    </footer>
  );
};
