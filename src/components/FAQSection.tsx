import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { GlassCard } from "./GlassCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the $15k minimum?",
    answer: "The $15k minimum covers a full MVP build including architecture design, development, deployment, documentation, and 2 weeks of post-launch support. This typically includes frontend, backend, database setup, authentication, and core business logic. Complex integrations or enterprise features may adjust the final scope.",
  },
  {
    question: "How long does a typical MVP take to build?",
    answer: "Most MVPs take 6-10 weeks from kickoff to launch. I work in focused 2-week sprints with weekly demos so you can see progress in real-time. Timeline depends on complexity—a simple SaaS might be 6 weeks, while something with mobile apps or complex integrations could be 10-12 weeks.",
  },
  {
    question: "Do you offer paid discovery?",
    answer: "Yes. For $2,000, I'll spend a week diving deep into your idea—validating the technical approach, architecting the solution, and delivering a detailed spec document with timeline and cost estimates. This is deducted from the project total if we proceed.",
  },
  {
    question: "What happens after launch?",
    answer: "Every project includes 2 weeks of post-launch support for bug fixes and minor adjustments. After that, I offer monthly retainer packages starting at $3k/month for ongoing development, or I can help you hire and onboard a full-time engineer to take over.",
  },
  {
    question: "Why only 2-3 projects per quarter?",
    answer: "I'm selective because I operate as a fractional CTO, not an agency. Each client gets my direct attention—no project managers, no handoffs. This constraint ensures quality and allows me to be deeply involved in every technical decision.",
  },
  {
    question: "What if my project isn't a good fit?",
    answer: "Not every project is right for this model. If you're pre-idea, need ongoing maintenance only, or have a budget under $15k, I'll be upfront about it. I'm happy to recommend alternative solutions or connect you with developers in my network who might be a better fit.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInWhenVisible>
          <p className="label-mono text-center mb-4">COMMON QUESTIONS</p>
          <h2 className="text-headline font-display text-center mb-4">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
          <p className="text-foreground-secondary text-center max-w-xl mx-auto mb-12">
            Straight answers to help you decide if we're a good fit.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <GlassCard className="p-2 md:p-6" hover={false}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-foreground/10"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5 text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-secondary text-sm md:text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
