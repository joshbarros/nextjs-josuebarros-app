"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { MagneticButton } from "./MagneticButton";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address").max(255);

interface NewsletterSignupProps {
  variant?: "inline" | "card";
}

export const NewsletterSignup = ({ variant = "card" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate email
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsLoading(true);

    // Simulate API call - replace with actual newsletter service integration
    // (e.g., Mailchimp, ConvertKit, Resend, or your own backend)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]");
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers));
      }

      setIsSubscribed(true);
      setEmail("");

      toast({
        title: "Welcome aboard!",
        description: "You'll receive my best insights directly in your inbox.",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            placeholder="Enter your email"
            className="w-full bg-background-secondary border border-foreground/10 rounded-full px-5 py-3 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 transition-colors"
            maxLength={255}
            disabled={isLoading || isSubscribed}
          />
          {error && (
            <p className="absolute -bottom-6 left-4 text-destructive text-xs">{error}</p>
          )}
        </div>
        <MagneticButton
          primary
          type="submit"
          className="!px-6 !py-3"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isSubscribed ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Subscribed
            </>
          ) : (
            <>
              Subscribe
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </MagneticButton>
      </form>
    );
  }

  return (
    <GlassCard className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isSubscribed ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-success" />
              </motion.div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                You&apos;re in!
              </h3>
              <p className="text-foreground-secondary">
                Check your inbox for a welcome email. I&apos;ll share my best insights on building products.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-6">
                <span className="label-mono mb-3 block">STAY UPDATED</span>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">
                  Get insights delivered
                </h3>
                <p className="text-foreground-secondary text-sm md:text-base">
                  Join founders and engineers who receive my weekly thoughts on building products that ship.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    placeholder="your@email.com"
                    className="w-full bg-background-tertiary border border-foreground/10 rounded-lg px-4 py-3.5 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 transition-colors"
                    maxLength={255}
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="text-destructive text-sm mt-2">{error}</p>
                  )}
                </div>

                <MagneticButton
                  primary
                  type="submit"
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe to Newsletter
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </MagneticButton>

                <p className="text-foreground-muted text-xs text-center">
                  No spam. Unsubscribe anytime. I respect your inbox.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlassCard>
  );
};
