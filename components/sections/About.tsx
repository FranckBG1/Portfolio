"use client";
import { motion } from "framer-motion";
import { Zap, RefreshCw, Eye, Sparkles, TrendingUp, Bot, MapPin, Briefcase } from "lucide-react";
import { EASE } from "@/lib/utils";

const strengths = [
  { icon: Zap,        title: "Autonomie",            desc: "Je m'organise, prends des décisions et avance seul quand il le faut." },
  { icon: RefreshCw,  title: "Adaptabilité",          desc: "Nouveaux contextes, nouvelles stacks, nouvelles équipes — je m'adapte vite." },
  { icon: Eye,        title: "Esprit critique",       desc: "J'analyse et questionne avant d'exécuter, pour mieux proposer." },
  { icon: Sparkles,   title: "Créativité",            desc: "Je cherche des solutions originales et soignées, du design au code." },
  { icon: TrendingUp, title: "Force de proposition",  desc: "J'anticipe les problèmes et propose des améliorations grâce à une veille technique active." },
  { icon: Bot,        title: "IA responsable",        desc: "J'utilise l'IA comme levier, avec recul et sens critique — pour les tâches répétitives et le débogage." },
];

/* Progressive accent: indigo → violet → purple → fuchsia */
const cardStyles = [
  { accent: "#6366F1", border: "rgba(99,102,241,0.25)",  glow: "rgba(99,102,241,0.22)"  },
  { accent: "#7C3AED", border: "rgba(124,58,237,0.25)",  glow: "rgba(124,58,237,0.22)"  },
  { accent: "#8B5CF6", border: "rgba(139,92,246,0.25)",  glow: "rgba(139,92,246,0.22)"  },
  { accent: "#A78BFA", border: "rgba(167,139,250,0.25)", glow: "rgba(167,139,250,0.22)" },
  { accent: "#C084FC", border: "rgba(192,132,252,0.25)", glow: "rgba(192,132,252,0.22)" },
  { accent: "#E879F9", border: "rgba(232,121,249,0.25)", glow: "rgba(232,121,249,0.22)" },
];

const R = 28; // notch radius (px)

/*
 * Each card's notched corners (in 2-col grid).
 * Cards 0-3 → circle #1 at center of top 2×2 block.
 * Cards 2-5 → circle #2 at center of bottom 2×2 block.
 * Cards 2 & 3 participate in both circles → 2 notches each.
 */
const cardCorners = [
  ["br"],          // 0 — bottom-right
  ["bl"],          // 1 — bottom-left
  ["tr", "br"],    // 2 — top-right (circle1) + bottom-right (circle2)
  ["tl", "bl"],    // 3 — top-left  (circle1) + bottom-left  (circle2)
  ["tr"],          // 4 — top-right (circle2)
  ["tl"],          // 5 — top-left  (circle2)
];

/* mask-image per corner — removes a circle of radius R centred at the corner */
const singleMask: Record<string, string> = {
  br: `radial-gradient(circle ${R}px at 100% 100%, transparent ${R - 1}px, black ${R}px)`,
  bl: `radial-gradient(circle ${R}px at 0%   100%, transparent ${R - 1}px, black ${R}px)`,
  tr: `radial-gradient(circle ${R}px at 100% 0%,   transparent ${R - 1}px, black ${R}px)`,
  tl: `radial-gradient(circle ${R}px at 0%   0%,   transparent ${R - 1}px, black ${R}px)`,
};

/*
 * Arc border divs — positioned on the outer wrapper (outside the mask).
 * Each is a 2R×2R full circle clipped to the inward-facing quadrant only,
 * so only the concave arc border is visible in the transparent notch area.
 */
const arcBorder: Record<string, { pos: Record<string,number>; clip: string }> = {
  br: { pos: { bottom: -R, right: -R }, clip: "polygon(0 0, 50% 0, 50% 50%, 0 50%)" },
  bl: { pos: { bottom: -R, left:  -R }, clip: "polygon(50% 0, 100% 0, 100% 50%, 50% 50%)" },
  tr: { pos: { top:  -R,  right: -R  }, clip: "polygon(0 50%, 50% 50%, 50% 100%, 0 100%)" },
  tl: { pos: { top:  -R,  left:  -R  }, clip: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)" },
};

/* Card border-radius: 16px everywhere except notched corners (0) */
function getBR(corners: string[]): string {
  return ["tl","tr","br","bl"]
    .map(c => corners.includes(c) ? "0px" : "16px")
    .join(" ");
}


export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 right-0 w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none -translate-y-1/2"
        style={{ background: "rgba(139,92,246,0.04)" }}
      />

      <div className="relative max-w-8xl mx-auto px-6">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">
            About me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Building with{" "}
            <span className="text-gradient">purpose.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left: bio ── */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
              viewport={{ once: true }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              Ingénieur fullstack en alternance chez Wave Up Health, étudiant à ESIGELEC campus de Poitiers dans la dominante Développement logiciel — test et qualité (Promo 2026). Je conçois des applications web, mobiles et des APIs REST — avec une attention particulière à la qualité, aux tests et au déploiement cloud.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-500 leading-relaxed"
            >
              En entreprise, j&apos;ai conçu, déployé et maintenu des applications mobiles complètes — de l&apos;architecture à la mise en production. J&apos;ai ensuite travaillé sur la conception d&apos;APIs robustes pour piloter ces applications. En parallèle, plusieurs projets web m&apos;ont amené à intervenir aussi bien côté backend que frontend, me forgeant un profil résolument fullstack. Tout cela avec des stacks variées que vous pourrez découvrir plus bas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {[
                { Icon: MapPin,    text: "Poitiers · Mobilité nationale" },
                { Icon: Briefcase, text: "Recherche un CDI" },
              ].map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E2040] text-slate-400 text-sm"
                  style={{ background: "#09091A" }}
                >
                  <Icon className="w-3.5 h-3.5 text-indigo-400" />
                  {text}
                </span>
              ))}
              <span
                className="inline-flex items-center px-4 py-2 rounded-full border border-[#1E2040] text-slate-400 text-sm"
                style={{ background: "#09091A" }}
              >
                Web · Mobile · Cloud · DevOps
              </span>
            </motion.div>
          </div>

          {/* ── Right: bento grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {strengths.map((s, i) => {
              const cs      = cardStyles[i];
              const isRight = i % 2 === 1;
              const corners = cardCorners[i];

              /* Build nested mask layers (one per corner, applied outside-in).
                 Nesting is the cross-browser way to intersect multiple masks. */
              const cardInner = (
                <div
                  className={`relative p-5 flex flex-col gap-4 h-full ${isRight ? "items-end text-right" : "items-start"}`}
                  style={{
                    background: "rgba(9,9,26,0.55)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${cs.border}`,
                    borderRadius: getBR(corners),
                  }}
                >
                  {/* Gradient hover overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      borderRadius: getBR(corners),
                      background: `linear-gradient(135deg, ${cs.accent}22 0%, transparent 65%)`,
                    }}
                  />
                  {/* Icon */}
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${cs.accent}25, ${cs.accent}40)`,
                      border: `1px solid ${cs.accent}55`,
                    }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: cs.accent }} />
                  </div>
                  <div className="relative flex flex-col gap-1">
                    <h3 className="font-semibold text-slate-100 leading-snug text-sm">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );

              /* Wrap in one mask div per corner (nested = intersection, cross-browser) */
              const maskedCard = corners.reduceRight<React.ReactNode>(
                (child, corner) => (
                  <div
                    key={corner}
                    style={{
                      WebkitMaskImage: singleMask[corner],
                      maskImage: singleMask[corner],
                    }}
                  >
                    {child}
                  </div>
                ),
                cardInner
              );

              return (
                <motion.div
                  key={s.title}
                  className="group relative cursor-default"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    y: -14,
                    scale: 1.07,
                    zIndex: 10,
                    boxShadow: `0 32px 64px rgba(0,0,0,0.65), 0 0 48px ${cs.glow}`,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.08 }}
                  viewport={{ once: true }}
                >
                  {maskedCard}

                  {/* Arc borders on outer wrapper — visible in the transparent notch areas */}
                  {corners.map(corner => (
                    <div
                      key={corner}
                      className="absolute pointer-events-none"
                      style={{
                        ...arcBorder[corner].pos,
                        width:        R * 2,
                        height:       R * 2,
                        borderRadius: "50%",
                        border:       `1.5px solid ${cs.accent}`,
                        clipPath:     arcBorder[corner].clip,
                        opacity:      0.65,
                      }}
                    />
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
