"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { EASE } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Home",    href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Stack",   href: "#stack" },
  { label: "Projects",href: "#projects" },
  { label: "Certifs", href: "#certifications" },
  { label: "News",    href: "#news" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((i) => i.href.replace("#", ""));

const CV_OPTIONS = [
  { label: "🇫🇷 Français", href: "/cv_NKOMA_Franck_Fullstack_Developpeur.pdf" },
  { label: "🇬🇧 English",  href: "/cv_Franck_NKOMA_Software_Engineer.pdf" },
];

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [cvOpen,     setCvOpen]     = useState(false);
  const cvRef                       = useRef<HTMLDivElement>(null);
  const activeSection               = useActiveSection(sectionIds);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) setCvOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#07080F]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_1px_60px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-8 h-[72px] grid grid-cols-[1fr_auto_1fr] items-center">

          {/* Gauche : vide */}
          <div />

          {/* Centre : liens parfaitement centrés */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => {
              const active = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <motion.button
                    onClick={() => go(item.href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1,   y:   0 }}
                    transition={{ duration: 0.4, delay: 0.05 * i, ease: EASE }}
                    className={cn(
                      "relative group flex flex-col items-center gap-0.5 py-1 text-sm font-medium transition-colors duration-300 cursor-pointer",
                      active ? "text-white" : "text-slate-500 hover:text-slate-200"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "h-px rounded-full transition-all duration-300",
                        active
                          ? "w-full bg-gradient-to-r from-indigo-500 to-violet-500"
                          : "w-0 group-hover:w-full bg-gradient-to-r from-indigo-500/60 to-violet-500/60"
                      )}
                    />
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-3 w-1 h-1 rounded-full bg-indigo-400"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                      />
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* Droite : CTA + hamburger */}
          <div className="flex items-center justify-end gap-4">

            {/* CV dropdown — desktop */}
            <motion.div
              ref={cvRef}
              className="relative hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1,  scale: 1   }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
            >
              <button
                onClick={() => setCvOpen(!cvOpen)}
                className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl font-semibold text-white relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(99,102,241,0.55)]"
                style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
                />
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                </span>
                <span className="relative">Mon CV</span>
                <ChevronDown className={cn("relative w-3.5 h-3.5 transition-transform duration-200", cvOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1    }}
                    exit={{    opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: EASE }}
                    className="absolute right-0 mt-2 w-44 rounded-xl border border-[#1E2040] shadow-xl overflow-hidden"
                    style={{ background: "#0D0F1E" }}
                  >
                    {CV_OPTIONS.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setCvOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-indigo-500/10 transition-colors duration-150"
                      >
                        <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        {label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/6 transition-colors duration-200"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen
                  ? <motion.span key="x"    initial={{ rotate: -90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:90,  opacity:0 }} transition={{ duration:0.2 }}><X    size={20}/></motion.span>
                  : <motion.span key="menu" initial={{ rotate:  90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:-90, opacity:0 }} transition={{ duration:0.2 }}><Menu size={20}/></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1,  y:   0, scale: 1    }}
            exit={{    opacity: 0,  y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl border border-white/8 bg-[#0D0F1C]/95 backdrop-blur-2xl shadow-2xl"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => {
                const active = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => go(item.href)}
                      className={cn(
                        "w-full text-left px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200",
                        active
                          ? "text-white bg-indigo-500/12 border border-indigo-500/20"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2 pb-1 flex flex-col gap-2">
                {CV_OPTIONS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    {label}
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
