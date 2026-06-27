"use client";
import { motion } from "framer-motion";
import { ExternalLink, BadgeCheck, Clock } from "lucide-react";
import { certifications } from "@/data/certifications";
import { EASE } from "@/lib/utils";

/* emoji fallbacks for certs without devicons */
const FALLBACK_EMOJI: Record<string, string> = {
  inr:   "🌿",
  toeic: "🇬🇧",
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.04)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">
            Certifications
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Certifié &amp;{" "}
            <span className="text-gradient">reconnu.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-[#1E2040] hover:border-indigo-500/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)]"
              style={{ background: "rgba(9,9,26,0.7)", backdropFilter: "blur(12px)" }}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold ${
                    cert.status === "active"
                      ? "bg-emerald-500/8 border border-emerald-500/20 text-emerald-400"
                      : "bg-amber-500/8 border border-amber-500/20 text-amber-400"
                  }`}
                >
                  {cert.status === "active" ? (
                    <BadgeCheck className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {cert.status === "active" ? "Obtenu" : "En cours"}
                </div>

                <ExternalLink className="w-3.5 h-3.5 text-slate-700 group-hover:text-indigo-400 transition-colors duration-200" />
              </div>

              {/* Badge + name */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl"
                  style={{
                    background: "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.15))",
                    border:     "1px solid rgba(99,102,241,0.22)",
                  }}
                >
                  {cert.badge ? (
                    <img
                      src={cert.badge}
                      alt={cert.issuer}
                      width={28} height={28}
                      style={{ width: 28, height: 28, objectFit: "contain" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const span = document.createElement("span");
                        span.textContent = FALLBACK_EMOJI[cert.id] ?? "🏅";
                        e.currentTarget.parentElement?.appendChild(span);
                      }}
                    />
                  ) : (
                    <span>{FALLBACK_EMOJI[cert.id] ?? "🏅"}</span>
                  )}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-100 leading-snug group-hover:text-white transition-colors duration-200">
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{cert.issuer}</p>
                  {cert.detail && (
                    <p className="text-[10px] font-mono text-indigo-400/70 mt-0.5">{cert.detail}</p>
                  )}
                </div>
              </div>

              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 inset-x-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,0.5),transparent)" }} />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-[11px] text-slate-700 font-mono mt-8"
        >
          Clique sur une certification pour voir la page officielle · Liens Credly disponibles sur mon LinkedIn
        </motion.p>
      </div>
    </section>
  );
}
