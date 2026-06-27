"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { EASE } from "@/lib/utils";

const socials = [
  { Icon: Github,   href: "https://github.com/FranckBG1",           label: "GitHub",   external: true  },
  { Icon: Linkedin, href: "https://linkedin.com/in/franck-nkoma",   label: "LinkedIn", external: true  },
  { Icon: Mail,     href: "mailto:franckbayema2@gmail.com",          label: "Email",    external: false },
];

/* ── Name animation constants ── */
const LINE1   = "Franck".split("");
const LINE2   = "NKOMA.".split("");
const STAGGER = 0.08;   // seconds between each letter
const LETTER_DUR = 5; // seconds per letter animation
/* last letter finishes at: (total-1)*STAGGER + LETTER_DUR */
const APPEAR_MS = Math.round(((LINE1.length + LINE2.length - 1) * STAGGER + LETTER_DUR) * 1000);
const HOLD_MS   = 3600; // pause after full reveal
const EXIT_MS   = 420;  // exit fade duration
const GAP_MS    = 180;  // brief gap before restart

export function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const [show,    setShow]    = useState(true);
  const [animKey, setAnimKey] = useState(0);

  /* ── Loop the name animation ── */
  useEffect(() => {
    const exitTimer  = setTimeout(() => setShow(false), APPEAR_MS + HOLD_MS);
    const resetTimer = setTimeout(() => {
      setShow(true);
      setAnimKey((k) => k + 1);
    }, APPEAR_MS + HOLD_MS + EXIT_MS + GAP_MS);
    return () => { clearTimeout(exitTimer); clearTimeout(resetTimer); };
  }, [animKey]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-[10%]  w-[6000px] h-[600px] rounded-full bg-indigo-500/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[140px]" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05060E]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 w-full pt-28 pb-20">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-[1fr_300px] lg:gap-20 lg:items-center">

          {/* ── Left: content ── */}
          <div className="flex flex-col items-center gap-8 text-center order-2 lg:order-1">
           

            {/* Name – letter-by-letter animated, loops every ~5.6s */}
            <h1
              key={animKey}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight"
            >
              {/* Line 1 – white */}
              <span className="block">
                {LINE1.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block text-slate-100"
                    initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                    animate={
                      show
                        ? { opacity: 1, y: 0,   filter: "blur(0px)" }
                        : { opacity: 0, y: -14, filter: "blur(6px)" }
                    }
                    transition={
                      show
                        ? { delay: i * STAGGER, duration: LETTER_DUR, ease: [0.22, 1, 0.36, 1] }
                        : { duration: EXIT_MS / 1000, ease: [0.4, 0, 0.6, 1] }
                    }
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>

              {/* Line 2 – soft violet wave per letter */}
              <span className="block">
                {LINE2.map((letter, i) => (
                  <motion.span
                    key={i}
                    /* CSS color-wave animation — each letter offset for flowing gradient */
                    className="letter-wave"
                    style={{ animationDelay: `${-i * 0.7}s` }}
                    initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                    animate={
                      show
                        ? { opacity: 1, y: 0,   filter: "blur(0px)" }
                        : { opacity: 0, y: -14, filter: "blur(6px)" }
                    }
                    transition={
                      show
                        ? { delay: (LINE1.length + i) * STAGGER, duration: LETTER_DUR, ease: [0.22, 1, 0.36, 1] }
                        : { duration: EXIT_MS / 1000, ease: [0.4, 0, 0.6, 1] }
                    }
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
              className="text-xl sm:text-2xl text-slate-400 font-light max-w-lg"
            >
              Junior{" "}
              <span className="text-indigo-400 font-medium">Full-Stack</span>{" "}
              Software Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
              className="text-slate-500 max-w-md leading-relaxed"
            >
              Étudiant en dernière année, ingénieur fullstack en alternance à Poitiers — je conçois, développe et déploie des applications web, mobiles et des APIs, sur le cloud et on-premise.
            </motion.p>

          </div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
            className="flex justify-center items-center animate-float-y order-1 lg:order-2"
          >
            <div className="relative">
              {/* Ambient glow */}
              <div
                className="absolute -inset-6 rounded-full blur-2xl opacity-25 pointer-events-none"
                style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}
              />

              {/* Gradient ring border — responsive size */}
              <div
                className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full p-[2px] lg:p-[3px]"
                style={{
                  background: "linear-gradient(135deg,#6366F1 0%,#8B5CF6 50%,#A78BFA 100%)",
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                  style={{ background: "#07080F" }}
                >
                  {!photoError ? (
                    <img
                      src="/Photo.png"
                      alt="Franck"
                      className="w-full h-full object-cover"
                      onError={() => setPhotoError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl lg:text-5xl font-black text-gradient">FNB</span>
                      <span className="hidden lg:block text-[10px] font-mono text-slate-600 tracking-widest uppercase">
                        Add photo to /public/Photo.png
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Badge: Open to Work — emerald green */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-[10px] lg:text-xs font-semibold text-white whitespace-nowrap shadow-lg bg-emerald-600/90 border border-emerald-400/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-70" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300" />
                </span>
                Open to Work
              </div>

              {/* Badge: Location — bas droite */}
              <div className="absolute top-25 -right-24 sm:top-28 sm:-right-24 lg:top-44 lg:-right-48 glass px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[9px] sm:text-xs text-indigo-400 font-mono border border-[#1E2040] whitespace-nowrap">
                Poitiers · Mobilité Nationale
              </div>

              {/* Badge: Full-Stack — milieu gauche */}
              <div className="absolute top-12 -left-20 sm:top-16 sm:-left-20 lg:top-24 lg:-left-35 glass px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[9px] sm:text-xs text-indigo-400 font-mono border border-indigo-500/20 whitespace-nowrap">
                Full-Stack Web/Mobile
              </div>

              {/* Badge: Disponibilité */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-semibold text-amber-300 whitespace-nowrap border border-amber-400/25 bg-amber-500/10 backdrop-blur-sm">
              Disponible dès septembre
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-700 hover:text-indigo-400 transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to about"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
