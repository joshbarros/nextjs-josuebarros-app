import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export const CountUp = ({ target, suffix = "", duration = 2 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(Math.round(value * 100) / 100);
        },
      });

      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-gradient font-display">
      {displayValue.toFixed(target % 1 !== 0 ? 2 : 0)}{suffix}
    </span>
  );
};
