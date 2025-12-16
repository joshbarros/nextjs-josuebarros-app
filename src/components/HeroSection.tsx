import { motion } from "framer-motion";
import { SplitText } from "./SplitText";
import { MagneticButton } from "./MagneticButton";
import { FloatingOrbs } from "./FloatingOrbs";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingOrbs />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 z-[1]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="label-mono mb-6"
        >
          FULLCYCLE ENGINEER • DESIGN TO DEPLOY
        </motion.p>
        
        {/* Headline */}
        <h1 className="text-hero font-display text-foreground mb-8">
          <SplitText text="I build products from zero to launch" delay={0.6} />
        </h1>
        
        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-subhead text-foreground max-w-2xl mx-auto mb-12"
        >
          From Architecture to Observability. Design, Backend, Frontend, DevOps, Deploy. The full cycle.
        </motion.p>
        
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton primary onClick={() => scrollToSection("contact")}>
            Start a Project → $15k+
          </MagneticButton>
          <MagneticButton onClick={() => scrollToSection("work")}>
            See My Work
          </MagneticButton>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};
