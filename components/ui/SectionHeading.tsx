"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ label, title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      viewport={{ once: true }}
      className={cn("mb-16", align === "center" && "text-center", className)}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.18em] uppercase text-indigo-400 mb-5 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5"
        >
          <span className="w-1 h-1 rounded-full bg-indigo-400" />
          {label}
        </motion.span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 text-base max-w-xl leading-relaxed mt-5 mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500",
        align === "center" && "mx-auto"
      )} />
    </motion.div>
  );
}
