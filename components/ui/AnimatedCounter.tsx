"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  loop?: boolean;
  loopDelay?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1500,
  loop = false,
  loopDelay = 30000,
}: AnimatedCounterProps) {
  const [count, setCount]         = useState(0);
  const { ref, inView }           = useInView({ triggerOnce: true });
  const rafRef                    = useRef<number>(0);
  const timerRef                  = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!inView) return;

    const animate = () => {
      setCount(0);
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else if (loop) {
          timerRef.current = setTimeout(animate, loopDelay);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, [inView, value, duration, loop, loopDelay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
