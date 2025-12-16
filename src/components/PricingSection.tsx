import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { TiltCard } from "./TiltCard";
import { MagneticButton } from "./MagneticButton";

export const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-md mx-auto">
        <FadeInWhenVisible>
          <TiltCard>
            <div className="glass-card p-10 text-center glow glow-hover">
              <p className="label-mono mb-6">PROJECTS START AT</p>
              <div className="text-7xl md:text-8xl font-display font-bold text-gradient mb-6">
                $15k
              </div>
              <p className="text-foreground-secondary mb-8">
                2-3 projects per quarter. Paid discovery available.
              </p>
              <MagneticButton primary onClick={scrollToContact} className="w-full">
                Check Availability
              </MagneticButton>
            </div>
          </TiltCard>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
