"use client";
import { motion } from "framer-motion";
import { Package, Layers, Container, Trophy } from "lucide-react";
import { highlights, strengthTags } from "@/data/highlights";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { EASE } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = { Package, Layers, Container, Trophy };

export function Highlights() {
  return (
    <section id="highlights" className="relative py-32 md:py-44 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.04)" }}
      />

      <div className="relative max-w-8xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">
            Highlights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            What I{" "}
            <span className="text-gradient">bring.</span>
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-12 mb-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1E2040]">
            {highlights.map((h, i) => {
              const Icon = iconMap[h.icon] ?? Package;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center lg:px-8 gap-3"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-1"
                    style={{
                      background: "linear-gradient(135deg,rgba(99,102,241,0.18),rgba(139,92,246,0.18))",
                      border: "1px solid rgba(99,102,241,0.22)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <p className="text-4xl sm:text-5xl font-black text-white leading-none">
                    {typeof h.value === "number"
                      ? <AnimatedCounter value={h.value} suffix={h.suffix ?? ""} loop={h.loop} loopDelay={30000} />
                      : <span className="text-gradient">{h.value}</span>
                    }
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{h.label}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1 max-w-[140px]">{h.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Strength tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {strengthTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
              viewport={{ once: true }}
              className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 border border-[#1E2040] hover:border-indigo-500/35 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all duration-200 cursor-default"
              style={{ background: "#09091A" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
