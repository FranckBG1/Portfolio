"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Infinity as InfinityIcon } from "lucide-react";
import { marqueeRows, techGroups } from "@/data/stack";
import { EASE } from "@/lib/utils";

/* ── CDN logo mapping (devicon + simpleicons for missing/invisible logos) ── */
const TECH_ICONS: Record<string, string> = {
  JavaScript:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Python:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Java:          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  Dart:          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Flutter:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  C:             "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  HTML:          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  Angular:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  Flask:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "Node.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Express:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "REST APIs":   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  JWT:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Docker:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Kubernetes:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  Terraform:     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  Ansible:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  /* simpleicons: colored logos visible on dark backgrounds */
  AWS:           "",
  "Vertex AI":   "https://cdn.simpleicons.org/googlegemini/4285F4",
  "Google Cloud":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  Jenkins:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  Git:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitLab:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  Prometheus:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  Grafana:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
  PostgreSQL:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  MongoDB:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  Neo4j:         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
  SQLite:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  SQL:           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Firebase:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  Jira:          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
};

/* Skills where Franck has the most proficiency — rendered with filled highlight */
const MASTERED = new Set([
  "Java", "Python", "AWS", "Flask", "Flutter", "Dart",
  "Angular", "Spring Boot", "Git", "SQL", "Vertex AI", "REST APIs",
  "Docker", "HTML", "CSS", "JavaScript",
]);

/* ── Tech pill ── */
function TechPill({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const icon     = TECH_ICONS[name];
  const mastered = MASTERED.has(name);
  const sm       = size === "sm";
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border font-mono shrink-0 select-none transition-all duration-200
        ${sm ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"}
        ${mastered
          ? "border-indigo-500/60 text-white hover:border-indigo-400 hover:shadow-[0_0_18px_rgba(99,102,241,0.3)]"
          : "border-[#1E2040] text-slate-400 hover:border-indigo-500/30 hover:text-slate-200 hover:bg-indigo-500/5"
        }`}
      style={mastered
        ? { background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.13) 100%)" }
        : { background: "#09091A" }
      }
    >
      {icon && (
        <img
          src={icon} alt={name}
          width={sm ? 14 : 18} height={sm ? 14 : 18}
          style={{ width: sm ? 14 : 18, height: sm ? 14 : 18, objectFit: "contain" }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}
      {name}
      {mastered && (
        <span
          className={`rounded-full bg-indigo-400 shrink-0 ${sm ? "w-1 h-1" : "w-1.5 h-1.5"}`}
        />
      )}
    </div>
  );
}

/* ── Marquee band — 3 copies, translateX -33.33% = exactly 1 copy ── */
function MarqueeBand({
  label, items, direction, duration, paused,
}: {
  label: string;
  items: string[];
  direction: "left" | "right";
  duration: number;
  paused: boolean;
}) {
  /* 3 copies → 1 copy always offscreen on each side, zero visible repetition */
  const tripled = [...items, ...items, ...items];

  /* split label at "·" for two-line display */
  const [line1, line2] = label.split("·").map((s) => s.trim());

  return (
    <div className="flex items-center">

      {/* ── Label column ── */}
      <div className="w-24 sm:w-32 shrink-0 pr-5 text-right border-r border-indigo-500/10 py-3">
        <p className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-indigo-400/70 leading-5">
          {line1}
          {line2 && <><br /><span className="text-indigo-400/40">{line2}</span></>}
        </p>
      </div>

      {/* ── Scrolling track ── */}
      <div
        className="flex-1 overflow-hidden pl-5"
        style={{
          maskImage:       "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-3 w-max"
          style={{
            animation:          `marquee-${direction} ${duration}s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {tripled.map((name, i) => (
            <TechPill key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main section ── */
export function Stack() {
  const [mode,   setMode]   = useState<"marquee" | "all">("marquee");
  const [paused, setPaused] = useState(false);

  return (
    <section id="stack" className="relative py-32 md:py-44 overflow-hidden">
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.04)" }}
      />

      <div className="relative max-w-8xl mx-auto px-6">

        {/* ── Heading + toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Technologies I{" "}
            <span className="text-gradient">work with.</span>
          </h2>

          {/* Toggle */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-xl border border-[#1E2040]"
            style={{ background: "#09091A" }}
          >
            <button
              onClick={() => setMode("marquee")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                mode === "marquee" ? "text-white" : "text-slate-600 hover:text-slate-400"
              }`}
              style={mode === "marquee" ? { background: "rgba(99,102,241,0.18)", border: "1px solid rgba(99,102,241,0.25)" } : {}}
            >
              <InfinityIcon className="w-4 h-4" /> Animation
            </button>
            <button
              onClick={() => setMode("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                mode === "all" ? "text-white" : "text-slate-600 hover:text-slate-400"
              }`}
              style={mode === "all" ? { background: "rgba(99,102,241,0.18)", border: "1px solid rgba(99,102,241,0.25)" } : {}}
            >
              <LayoutGrid className="w-4 h-4" /> Voir tout
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">

          {/* ── MARQUEE MODE ── */}
          {mode === "marquee" && (
            <motion.div
              key="marquee"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{   opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-col divide-y divide-[#0E0F1C]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {marqueeRows.map((row, i) => (
                <MarqueeBand key={i} {...row} paused={paused} />
              ))}
              
            </motion.div>
          )}

          {/* ── VIEW ALL MODE ── */}
          {mode === "all" && (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{   opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-col gap-8"
            >
              {techGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE, delay: gi * 0.07 }}
                  className="flex gap-0 items-start"
                >
                  {/* Category label */}
                  <div className="w-24 sm:w-32 shrink-0 pr-5 text-right border-r border-indigo-500/10 pt-1">
                    <p className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-indigo-400/70">
                      {group.label.replace("&", "·").split("·").map((s, i) => (
                        <span key={i} className={i > 0 ? "block text-indigo-400/40" : "block"}>{s.trim()}</span>
                      ))}
                    </p>
                  </div>
                  {/* Pills */}
                  <div className="flex-1 pl-5 flex flex-wrap gap-2">
                    {group.technologies.map((tech) => (
                      <TechPill key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
