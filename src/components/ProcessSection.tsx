import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { GlassCard } from "./GlassCard";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We discuss your vision, timeline, and budget. If it's a fit, you get a detailed proposal within 48 hours.",
    hint: "$2k paid discovery available",
  },
  {
    number: "02",
    title: "Build Sprint",
    description: "I work in focused 2-week sprints. You get daily updates, weekly demos, and full transparency.",
    hint: "Typical MVP: 6-10 weeks",
  },
  {
    number: "03",
    title: "Launch & Handoff",
    description: "Deployed, documented, and ready to scale. I stick around for 2 weeks post-launch support.",
    hint: "Full codebase + docs included",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-32 px-6 bg-background-secondary">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <p className="label-mono text-center mb-4">THE PROCESS</p>
          <h2 className="text-headline font-display text-center mb-4">
            From <span className="text-gradient">Idea</span> to <span className="text-gradient">Launch</span>
          </h2>
          <p className="text-foreground-secondary text-center max-w-xl mx-auto mb-16">
            No bloated timelines. No endless meetings. Just focused work that ships.
          </p>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeInWhenVisible key={step.number} delay={index * 0.15}>
              <GlassCard className="h-full text-center">
                <span className="text-5xl font-display font-bold text-gradient mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
                <p className="text-xs font-mono text-secondary">
                  {step.hint}
                </p>
              </GlassCard>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};
