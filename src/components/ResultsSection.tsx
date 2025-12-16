import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { CountUp } from "./CountUp";

const metrics = [
  { value: 65, suffix: "%", label: "Faster render times delivered" },
  { value: 30, suffix: "%", label: "Infrastructure cost reduction" },
  { value: 40, suffix: "%", label: "Improved data availability" },
  { value: 99.99, suffix: "%", label: "System uptime achieved" },
];

export const ResultsSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <p className="label-mono text-center mb-4">PROVEN RESULTS</p>
          <h2 className="text-headline font-display text-center mb-16">
            Impact That <span className="text-gradient">Matters</span>
          </h2>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <FadeInWhenVisible key={metric.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3">
                  <CountUp target={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-foreground-secondary text-sm">
                  {metric.label}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};
