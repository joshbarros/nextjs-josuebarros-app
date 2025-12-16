import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { TiltCard } from "./TiltCard";
import { GlassCard } from "./GlassCard";
import { Zap, Palette, Settings, Cloud, Wrench, Database } from "lucide-react";

const capabilities = [
  { icon: Zap, label: "LANGUAGES", content: "Go • Java • Python • TypeScript" },
  { icon: Palette, label: "FRONTEND", content: "React • Next.js • React Native" },
  { icon: Settings, label: "BACKEND", content: "Spring Boot • FastAPI • Node.js" },
  { icon: Cloud, label: "CLOUD", content: "GCP • Azure • AWS" },
  { icon: Wrench, label: "DEVOPS", content: "Kubernetes • Docker • Terraform" },
  { icon: Database, label: "DATA", content: "Kafka • Redis • PostgreSQL" },
];

export const CapabilitiesSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <h2 className="text-headline font-display text-center mb-16">
            Full-Stack <span className="text-gradient">Capabilities</span>
          </h2>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <FadeInWhenVisible key={cap.label} delay={index * 0.08}>
              <TiltCard>
                <GlassCard className="h-full">
                  <cap.icon className="w-8 h-8 text-primary mb-4" />
                  <p className="label-mono mb-3">{cap.label}</p>
                  <p className="text-foreground text-lg">{cap.content}</p>
                </GlassCard>
              </TiltCard>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};
