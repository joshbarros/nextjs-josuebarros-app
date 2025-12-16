import { useState } from "react";
import { useForm } from "react-hook-form";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { GlassCard } from "./GlassCard";
import { MagneticButton } from "./MagneticButton";
import { toast } from "@/hooks/use-toast";
import { trackEvent, TrackingEvents } from "./Analytics";
import { CalendlyButton, CALENDLY_URL } from "./Calendly";

interface FormData {
  idea: string;
  timeline: string;
  budget: string;
  funding: string;
  email: string;
}

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const handleFormInteraction = () => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackEvent(TrackingEvents.CONTACT_FORM_STARTED, { source: "homepage" });
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmittedEmail(data.email);
      setIsSubmitted(true);

      // Track form submission
      trackEvent(TrackingEvents.CONTACT_FORM_SUBMITTED, {
        budget: data.budget,
        timeline: data.timeline,
        funding: data.funding,
      });

      toast({
        title: "Message sent!",
        description: "I'll review your project and respond within 24 hours.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly at hello@josuebarros.com",
        variant: "destructive",
      });
    }
  };

  const selectClasses = "w-full bg-background-tertiary border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer";
  const inputClasses = "w-full bg-background-tertiary border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 transition-colors";

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 px-6 bg-background-secondary">
        <div className="max-w-lg mx-auto">
          <FadeInWhenVisible>
            <GlassCard className="text-center py-16">
              <div className="text-5xl mb-6">✓</div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Thanks!
              </h3>
              <p className="text-foreground-secondary mb-8">
                I'll review your project and respond within 24 hours.
              </p>
              <div className="border-t border-foreground/10 pt-8 mt-4">
                <p className="text-foreground-secondary mb-4">
                  Want to skip the wait? Book a call now:
                </p>
                <CalendlyButton
                  url={CALENDLY_URL}
                  prefill={{ email: submittedEmail }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                  Schedule a Call
                </CalendlyButton>
              </div>
            </GlassCard>
          </FadeInWhenVisible>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 bg-background-secondary">
      <div className="max-w-lg mx-auto">
        <FadeInWhenVisible>
          <p className="label-mono text-center mb-4">LET'S WORK TOGETHER</p>
          <h2 className="text-headline font-display text-center mb-4">
            Start a <span className="text-gradient">Project</span>
          </h2>
          <p className="text-foreground-secondary text-center mb-12">
            Serious inquiries only. I'll respond within 24 hours.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <GlassCard>
            <form onSubmit={handleSubmit(onSubmit)} onFocus={handleFormInteraction} className="space-y-6">
              {/* Idea */}
              <div>
                <label className="block text-sm text-foreground-secondary mb-2">
                  What's your idea?
                </label>
                <textarea
                  {...register("idea", { required: "Please describe your idea" })}
                  rows={4}
                  placeholder="Describe your product vision..."
                  className={`${inputClasses} resize-none`}
                />
                {errors.idea && (
                  <p className="text-destructive text-sm mt-1">{errors.idea.message}</p>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm text-foreground-secondary mb-2">
                  Timeline?
                </label>
                <select {...register("timeline", { required: true })} className={selectClasses}>
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (1-2 weeks)</option>
                  <option value="1-2months">1-2 months</option>
                  <option value="3+months">3+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm text-foreground-secondary mb-2">
                  Budget range?
                </label>
                <select {...register("budget", { required: true })} className={selectClasses}>
                  <option value="">Select budget</option>
                  <option value="15-25k">$15-25k</option>
                  <option value="25-50k">$25-50k</option>
                  <option value="50-100k">$50-100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>

              {/* Funding */}
              <div>
                <label className="block text-sm text-foreground-secondary mb-2">
                  Do you have funding?
                </label>
                <select {...register("funding", { required: true })} className={selectClasses}>
                  <option value="">Select option</option>
                  <option value="raised">Yes, raised funding</option>
                  <option value="revenue">Yes, revenue-funded</option>
                  <option value="bootstrap">Bootstrapping</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-foreground-secondary mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="you@company.com"
                  className={inputClasses}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <MagneticButton primary type="submit" className="w-full">
                Send Inquiry →
              </MagneticButton>
            </form>
          </GlassCard>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
