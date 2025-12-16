"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  return (
    <motion.div
      className={`glass-card p-6 ${className}`}
      whileHover={hover ? {
        scale: 1.01,
        borderColor: "hsla(239, 84%, 67%, 0.3)",
      } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
