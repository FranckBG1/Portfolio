"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { EASE, cn } from "@/lib/utils";

const catStyles: Record<string, { label: string; accent: string; badge: string; text: string; border: string }> = {
  web:     { label: "WEB",     accent: "bg-indigo-500",  badge: "bg-indigo-500/8",  text: "text-indigo-300",  border: "border-indigo-500/20"  },
  mobile:  { label: "MOBILE",  accent: "bg-violet-500",  badge: "bg-violet-500/8",  text: "text-violet-300",  border: "border-violet-500/20"  },
  backend: { label: "BACKEND", accent: "bg-blue-500",    badge: "bg-blue-500/8",    text: "text-blue-300",    border: "border-blue-500/20"    },
  ai:      { label: "AI",      accent: "bg-purple-500",  badge: "bg-purple-500/8",  text: "text-purple-300",  border: "border-purple-500/20"  },
};

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>("stock-management");

  return (
    <section id="projects" className="relative py-32 md:py-44 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.04)" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">
            Projects
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              What I&apos;ve{" "}
              <span className="text-gradient">built.</span>
            </h2>
            
          </div>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col gap-4">
          {projects.map((project, i) => {
            const isOpen = expanded === project.id;
            const cat    = catStyles[project.category];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + i * 0.07, delay: i * 0.08, ease: EASE }}
                viewport={{ once: true }}
                className={cn(
                  "relative rounded-2xl overflow-hidden border transition-all duration-300",
                  isOpen
                    ? "border-indigo-500/22 shadow-[0_0_60px_rgba(99,102,241,0.07)]"
                    : "border-[#1E2040] hover:border-[#2A2D50]"
                )}
                style={{ background: "#09091A" }}
              >
                {/* Category color accent — left strip */}
                <div className={cn("absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl", cat.accent)} />

                <button
                  onClick={() => setExpanded(isOpen ? null : project.id)}
                  className="w-full text-left px-8 py-6 pl-9 flex items-start gap-5"
                >
                  {/* Number badge */}
                  <span
                    className="hidden sm:flex w-9 h-9 rounded-xl shrink-0 items-center justify-center font-mono text-xs font-bold text-indigo-400 mt-0.5"
                    style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.18)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Category + title */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className={cn(
                        "text-xs font-mono font-semibold px-2.5 py-1 rounded-full border",
                        cat.badge, cat.text, cat.border
                      )}>
                        {cat.label}
                      </span>
                      <h3 className="text-base font-semibold text-slate-100">{project.title}</h3>
                    </div>

                    {/* Context preview (closed state only) */}
                    {!isOpen && (
                      <p className="text-xs text-slate-600 line-clamp-1 mb-3">{project.context}</p>
                    )}

                    {/* Stack pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg border border-[#1A1D35] text-slate-500 hover:text-slate-300 hover:border-[#252850] transition-colors duration-150"
                          style={{ background: "#05060E" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 text-slate-600 mt-1"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Expanded details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{   height: 0,      opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-9 pb-8 border-t border-[#1A1D35]">
                        <div className="pt-6 grid sm:grid-cols-3 gap-6">
                          {[
                            { label: "Context",      color: "text-slate-400",   content: project.context },
                            { label: "Contribution", color: "text-indigo-400",  content: project.contribution },
                            { label: "Result",       color: "text-violet-400",  content: project.result },
                          ].map(({ label, color, content }) => (
                            <div key={label}>
                              <p className={cn("text-xs font-mono tracking-widest uppercase mb-3", color)}>
                                {label}
                              </p>
                              <p className="text-sm text-slate-400 leading-relaxed">{content}</p>
                            </div>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 mt-6 pt-5 border-t border-[#1A1D35]">
                          <a
                            href={project.demoUrl}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.4)]"
                            style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" /> Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 border border-[#1E2040] hover:border-indigo-500/35 hover:text-white hover:bg-indigo-500/5 transition-all duration-200"
                          >
                            <Github className="w-3.5 h-3.5" /> GitHub
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
