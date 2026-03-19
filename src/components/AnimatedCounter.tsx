import React, { useEffect, useRef } from 'react';
import { useInView, motion, useSpring, useTransform, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (e.g., "99.9%" -> 99.9, "%")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const hasDecimal = value.includes('.');
  const decimalPlaces = hasDecimal ? value.split('.')[1].length : 0;

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, numericValue, {
        duration: duration,
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = v.toFixed(decimalPlaces);
          }
        },
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, duration, decimalPlaces]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
};

export default AnimatedCounter;
