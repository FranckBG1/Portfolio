"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { education } from "@/data/education";
import { EASE } from "@/lib/utils";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.04)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">
            Formation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Mon <span className="text-gradient">parcours.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              viewport={{ once: true }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-[18px] top-1 w-4 h-4 rounded-full border-2 border-indigo-500 flex items-center justify-center"
                style={{ background: edu.current ? "#6366F1" : "#09091A" }}
              >
                {edu.current && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>

              {/* Card */}
              <div
                className="rounded-2xl border border-[#1E2040] p-6 transition-all duration-300 hover:border-indigo-500/30"
                style={{ background: "#09091A" }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
                    >
                      <GraduationCap className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{edu.school}</h3>
                      <p className="text-xs text-indigo-400 font-mono mt-0.5">{edu.period}</p>
                    </div>
                  </div>
                  {edu.current && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      En cours
                    </span>
                  )}
                </div>

                {/* Degree */}
                <p className="text-sm font-semibold text-slate-200 mb-1">{edu.degree}</p>
                {edu.specialization && (
                  <p className="text-xs text-slate-500 mb-4">Spécialisation : {edu.specialization}</p>
                )}

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4">
                  <MapPin className="w-3 h-3 text-indigo-400/50 shrink-0" />
                  {edu.location}
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/60 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
