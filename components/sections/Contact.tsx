"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Phone } from "lucide-react";
import { EASE } from "@/lib/utils";

const EMAIL = "franckbayema2@gmail.com";

const links = [
  {
    Icon:    Mail,
    label:   "Email",
    display: EMAIL,
    href:    `mailto:${EMAIL}`,
  },
  {
    Icon:    Linkedin,
    label:   "LinkedIn",
    display: "franck-nkoma",
    href:    "https://linkedin.com/in/franck-nkoma",
  },
  {
    Icon:    Github,
    label:   "GitHub",
    display: "FranckBG1",
    href:    "https://github.com/FranckBG1",
  },
  {
    Icon:    Phone,
    label:   "Téléphone",
    display: "07 80 60 72 69",
    href:    "tel:+33780607269",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.05)" }}
      />

      <div className="relative max-w-8xl mx-auto px-6">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          viewport={{ once: true }}
          className="block text-center text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-12"
        >
          Contact
        </motion.span>

        {/* ── Split layout ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT — headline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-[0.92] tracking-tight">
              LET&apos;S BUILD<br />
              <span className="text-gradient">SOMETHING</span><br />
              GREAT.
            </h2>

            <p className="text-slate-500 leading-relaxed max-w-sm">
              Ouvert à un CDI, CDD ou une mission freelance. Je réponds rapidement — contacte-moi par le moyen qui te convient.
            </p>

            {/* Availability chips */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {["CDI", "Remote OK", "Mobilité nationale"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-indigo-400/60 shrink-0" />
              Poitiers · Mobilité nationale
            </div>
          </motion.div>

          {/* RIGHT — contact links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {links.map(({ Icon, label, display, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined}
                rel={label === "LinkedIn" || label === "GitHub" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.18 + i * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-[#1E2040] hover:border-indigo-500/35 hover:bg-indigo-500/4 transition-all duration-250"
                style={{ background: "rgba(9,9,26,0.6)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border:     "1px solid rgba(99,102,241,0.18)",
                  }}
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-600 font-mono tracking-widest uppercase mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 truncate">
                    {display}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-indigo-400 shrink-0 transition-colors duration-200" />
              </motion.a>
            ))}

            {/* Main CTA */}
            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-2 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.45)]"
              style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}
            >
              <Mail className="w-4 h-4" />
              Envoyer un email
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
