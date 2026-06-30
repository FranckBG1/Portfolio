"use client";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, Users, Code2, ChevronLeft, ChevronRight, X, Camera, Play, Trophy } from "lucide-react";
import type { NewsEvent } from "@/types";
import { newsEvents } from "@/data/news";
import { EASE, cn } from "@/lib/utils";

/* ── Types ── */
type Category  = "all" | "hackathon" | "forum" | "challenge";
type MediaKind = "photo" | "video";
interface MediaItem { kind: MediaKind; src: string }

/* ── YouTube helpers ── */
const isYouTube  = (url: string) => url.includes("youtube.com") || url.includes("youtu.be");
const ytId       = (url: string) => url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1] ?? null;
const ytThumb    = (url: string) => { const id = ytId(url); return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : ""; };
const ytEmbed    = (url: string) => { const id = ytId(url); return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url; };
const buildMedia = (e: NewsEvent): MediaItem[] => [
  ...e.photos.map(src => ({ kind: "photo" as const, src })),
  ...(e.videos ?? []).map(src => ({ kind: "video" as const, src })),
];

/* ── Highlighted description ── */
function HighlightedText({ text, accent }: { text: string; accent: string }) {
  const RE = /(Top\s+\d+|\d+(?:er|ère|ème|e)(?:\s+du\s+\w+)?|la\s+finale|finaliste|Finaliste|speech\s+de\s+présentation|plus d['']une dizaine|communication|dizaine de salons)/g;
  const parts: { t: string; h: boolean }[] = [];
  let last = 0, m: RegExpExecArray | null;
  while ((m = RE.exec(text)) !== null) {
    if (m.index > last) parts.push({ t: text.slice(last, m.index), h: false });
    parts.push({ t: m[0], h: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ t: text.slice(last), h: false });
  return (
    <>
      {parts.map((p, i) =>
        p.h
          ? <span key={i} style={{ color: accent }} className="font-semibold">{p.t}</span>
          : <span key={i}>{p.t}</span>
      )}
    </>
  );
}

/* ── Config ── */
const SLIDE_MS = 4500; // ms per slide

const TABS: { key: Category; label: string; Icon?: React.ElementType }[] = [
  { key: "all",       label: "Tout"       },
  { key: "hackathon", label: "Hackathons", Icon: Zap   },
  { key: "forum",     label: "Forums",     Icon: Users },
  { key: "challenge", label: "Challenges", Icon: Code2 },
];



const CAT: Record<string, {
  badge: string; text: string; border: string;
  strip: string; from: string; via: string; Icon: React.ElementType;
}> = {
  hackathon: { badge: "bg-orange-500/10", text: "text-orange-300", border: "border-orange-500/25", strip: "#F97316", from: "rgba(249,115,22,0.22)", via: "rgba(249,115,22,0.04)", Icon: Zap   },
  forum:     { badge: "bg-teal-500/10",   text: "text-teal-300",   border: "border-teal-500/25",   strip: "#14B8A6", from: "rgba(20,184,166,0.22)",  via: "rgba(20,184,166,0.04)",  Icon: Users },
  challenge: { badge: "bg-violet-500/10", text: "text-violet-300", border: "border-violet-500/25", strip: "#8B5CF6", from: "rgba(139,92,246,0.22)",  via: "rgba(139,92,246,0.04)",  Icon: Code2 },
};

/* ══════════════════════════════════════
   SLIDE MEDIA — renders one item in the hero
══════════════════════════════════════ */
function SlideMedia({ item, cat }: { item: MediaItem; cat: typeof CAT[string] }) {
  if (item.kind === "video") {
    if (isYouTube(item.src)) {
      return (
        <div className="relative w-full h-full">
          <img src={ytThumb(item.src)} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-12 h-12 rounded-full bg-black/65 border border-white/20 flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
          </div>
        </div>
      );
    }
    /* Local video — preload="metadata" shows the first frame as preview */
    return (
      <div className="relative w-full h-full">
        <video
          src={item.src}
          preload="metadata"
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="w-12 h-12 rounded-full bg-black/65 border border-white/20 flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>
    );
  }
  return <img src={item.src} alt="" className="w-full h-full object-cover" />;
}

/* ══════════════════════════════════════
   THUMBNAIL ITEM
══════════════════════════════════════ */
function ThumbItem({ item }: { item: MediaItem }) {
  if (item.kind === "video") {
    if (isYouTube(item.src)) {
      return (
        <div className="relative w-full h-full">
          <img src={ytThumb(item.src)} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Play className="w-3 h-3 text-white fill-white" />
          </div>
        </div>
      );
    }
    return (
      <div className="relative w-full h-full">
        <video src={item.src} preload="metadata" muted playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <Play className="w-3 h-3 text-white fill-white" />
        </div>
      </div>
    );
  }
  return <img src={item.src} alt="" className="w-full h-full object-cover" />;
}

/* ══════════════════════════════════════
   PHOTO PLACEHOLDER
══════════════════════════════════════ */
function PhotoPlaceholder({ cat }: { cat: typeof CAT[string] }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden"
      style={{ background: `linear-gradient(145deg, ${cat.from}, ${cat.via}, transparent)` }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `radial-gradient(circle, ${cat.strip} 1px, transparent 1px)`, backgroundSize: "20px 20px" }}
      />
      <cat.Icon className="relative w-10 h-10 opacity-25" style={{ color: cat.strip }} />
      <span className="relative text-[10px] font-mono text-slate-700 tracking-widest uppercase">Photos · Vidéos à ajouter</span>
    </div>
  );
}

/* ══════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════ */
function Lightbox({ event, index, onClose, onNav }: {
  event: NewsEvent; index: number; onClose: () => void; onNav: (i: number) => void;
}) {
  const media = buildMedia(event);
  const item  = media[index];
  const cat   = CAT[event.label] ?? CAT.hackathon;

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % media.length);
      if (e.key === "ArrowLeft")  onNav((index - 1 + media.length) % media.length);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [index, media.length, onClose, onNav]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/94 backdrop-blur-md"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors">
        <X className="w-4 h-4" />
      </button>

      <div className="relative w-full max-w-4xl flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            {item?.kind === "video" ? (
              isYouTube(item.src) ? (
                <iframe src={ytEmbed(item.src)} className="w-full rounded-2xl shadow-2xl" style={{ aspectRatio: "16/9", maxHeight: "65vh" }} allow="autoplay; fullscreen" allowFullScreen />
              ) : (
                <video src={item.src} controls autoPlay muted={event.label === "forum" || event.label === "challenge"} className="max-h-[65vh] w-auto max-w-full rounded-2xl shadow-2xl" />
              )
            ) : (
              <img src={item?.src} alt={`${event.title} — ${index + 1}`} className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
            )}
          </motion.div>
        </AnimatePresence>

        {media.length > 1 && (
          <>
            <button onClick={() => onNav((index - 1 + media.length) % media.length)} className="absolute -left-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-black/70 text-white hover:border-white/30 hover:bg-black/90 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => onNav((index + 1) % media.length)} className="absolute -right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-black/70 text-white hover:border-white/30 hover:bg-black/90 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <div className="mt-6 w-full max-w-4xl flex flex-col items-center gap-4" onClick={e => e.stopPropagation()}>
        <div className="text-center">
          <span className={cn("text-xs font-mono uppercase tracking-widest", cat.text)}>{event.label}</span>
          <p className="text-white font-semibold mt-1">{event.title}</p>
          <p className="text-slate-600 text-xs mt-0.5">{item?.kind === "video" ? "Vidéo" : "Photo"} {index + 1} / {media.length}</p>
        </div>
        {media.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto py-1 px-1 max-w-full">
            {media.map((m, j) => (
              <button key={j} onClick={() => onNav(j)} className={cn("shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 flex items-center justify-center", j === index ? "border-white/60 scale-110" : "border-white/10 opacity-50 hover:opacity-80")}>
                <ThumbItem item={m} />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   EVENT CARD — with auto-slider
══════════════════════════════════════ */
function EventCard({ event, featured = false, onOpen }: {
  event: NewsEvent; featured?: boolean; onOpen: (event: NewsEvent, index: number) => void;
}) {
  const cat    = CAT[event.label] ?? CAT.hackathon;
  const media  = buildMedia(event);
  const photos = event.photos;
  const videos = event.videos ?? [];
  const date   = new Date(event.date);
  const month  = date.toLocaleDateString("fr-FR", { month: "short" });
  const year   = date.getFullYear();

  /* ── Slider state ── */
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused,   setPaused]   = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    if (media.length <= 1 || paused) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(
      () => setSlideIdx(i => (i + 1) % media.length),
      SLIDE_MS,
    );
    return () => clearInterval(intervalRef.current);
  }, [media.length, paused]);

  const STRIP_MAX  = 4;
  const stripItems = media.slice(0, STRIP_MAX);
  const overflow   = media.length > STRIP_MAX ? media.length - STRIP_MAX : 0;

  return (
    <div
      className={cn(
        "group relative h-full flex flex-col rounded-2xl border border-[#1E2040] overflow-hidden",
        "transition-all duration-300 hover:border-[#2A2D50] hover:shadow-[0_16px_56px_rgba(0,0,0,0.55)]",
        featured && "lg:flex-row",
      )}
      style={{ background: "#09091A" }}
    >
      {/* ── Hero area ── */}
      <div
        className={cn(
          "relative overflow-hidden shrink-0",
          featured ? "lg:w-[55%] h-52 lg:h-auto" : "h-44",
          media.length > 0 ? "cursor-pointer" : "cursor-default",
        )}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onClick={() => media.length > 0 && onOpen(event, slideIdx)}
      >
        {media.length > 0 ? (
          <>
            {/* Crossfade stack — all frames rendered, only active is opaque */}
            <div className="absolute inset-0">
              {media.map((m, j) => (
                <div
                  key={j}
                  className="absolute inset-0"
                  style={{
                    opacity:    j === slideIdx ? 1 : 0,
                    zIndex:     j === slideIdx ? 1 : 0,
                    transition: "opacity 0.85s ease-in-out",
                  }}
                >
                  <SlideMedia item={m} cat={cat} />
                </div>
              ))}
            </div>

            {/* Dark vignette */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

            {/* Media counts */}
            {(photos.length > 0 || videos.length > 0) && (
              <div className="absolute bottom-8 right-3 z-20 flex items-center gap-1.5 pointer-events-none">
                {photos.length > 0 && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 text-white text-[10px] font-mono backdrop-blur-sm border border-white/10">
                    <Camera className="w-3 h-3" />{photos.length}
                  </span>
                )}
                {videos.length > 0 && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 text-white text-[10px] font-mono backdrop-blur-sm border border-white/10">
                    <Play className="w-3 h-3 fill-white" />{videos.length}
                  </span>
                )}
              </div>
            )}

            {/* Slide indicator pills */}
            {media.length > 1 && (
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 pointer-events-none">
                {media.map((_, j) => (
                  <span
                    key={j}
                    className="h-[3px] rounded-full bg-white transition-all duration-500"
                    style={{ width: j === slideIdx ? 18 : 5, opacity: j === slideIdx ? 0.9 : 0.28 }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <PhotoPlaceholder cat={cat} />
        )}

        {/* Category badge */}
        <span className={cn(
          "absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm",
          cat.badge, cat.text, cat.border,
        )}>
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cat.strip }} />
          {event.label}
        </span>

        {/* Color strip */}
        <div className={cn("absolute left-0 top-0 bottom-0 w-[3px] z-20", featured ? "lg:hidden" : "")} style={{ background: cat.strip }} />
        {featured && <div className="hidden lg:block absolute top-0 left-0 right-0 h-[3px] z-20" style={{ background: cat.strip }} />}
      </div>

      {/* ── Content ── */}
      <div className={cn("flex flex-col gap-3 p-5 flex-1", featured && "lg:p-7")}>
        {/* Date pill */}
        <span
          className="self-start inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ color: cat.strip, background: cat.from, border: `1px solid ${cat.strip}35` }}
        >
          {month} {year}
        </span>

        <h3 className={cn("font-semibold text-slate-100 leading-snug", featured ? "text-xl lg:text-2xl" : "text-sm")}>
          {event.title}
        </h3>

        {/* Result badge */}
        {event.result && (
          <span
            className="self-start inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
            style={{ color: cat.strip, background: cat.from, border: `1.5px solid ${cat.strip}55` }}
          >
            <Trophy className="w-3.5 h-3.5" />
            {event.result}
          </span>
        )}

        <p className={cn(
          "text-slate-500 leading-relaxed overflow-y-auto news-desc-scroll",
          featured ? "text-sm max-h-32" : "text-xs max-h-[4.5rem]",
        )}>
          <HighlightedText text={event.description} accent={cat.strip} />
        </p>

        <div className="flex-1" />

        {/* Thumbnail strip */}
        {media.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
            {stripItems.map((m, j) => (
              <button
                key={j}
                onClick={() => { setSlideIdx(j); onOpen(event, j); }}
                className={cn(
                  "shrink-0 w-10 h-10 rounded-lg overflow-hidden border transition-all duration-200 flex items-center justify-center",
                  j === slideIdx ? "border-white/35 scale-105" : "border-[#1E2040] hover:border-white/20",
                )}
              >
                <ThumbItem item={m} />
              </button>
            ))}
            {overflow > 0 && (
              <button
                onClick={() => onOpen(event, STRIP_MAX)}
                className="shrink-0 w-10 h-10 rounded-lg border border-[#1E2040] flex items-center justify-center text-[10px] font-mono text-slate-600 hover:border-white/20 hover:text-slate-400 transition-all"
                style={{ background: "#05060E" }}
              >
                +{overflow}
              </button>
            )}
          </div>
        )}

        {/* Footer — location */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#111320]">
          <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: cat.strip, opacity: 0.85 }} />
          <span className="text-xs font-medium text-slate-400">{event.location}</span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════ */
export function News() {
  const [active,   setActive]   = useState<Category>("all");
  const [lightbox, setLightbox] = useState<{ event: NewsEvent; index: number } | null>(null);

  const filtered  = useMemo(() => active === "all" ? newsEvents : newsEvents.filter(e => e.label === active), [active]);
  const openMedia  = useCallback((event: NewsEvent, index: number) => setLightbox({ event, index }), []);
  const closeMedia = useCallback(() => setLightbox(null), []);
  const navMedia   = useCallback((next: number) => setLightbox(prev => prev ? { ...prev, index: next } : null), []);

  return (
    <>
      <section id="news" className="relative py-32 md:py-44 overflow-hidden">
        <div aria-hidden className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: "rgba(99,102,241,0.04)" }} />

        <div className="relative w-full max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} viewport={{ once: true }} className="text-center mb-12">
            <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">News &amp; Events</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">
              What I&apos;ve been <span className="text-gradient">up to.</span>
            </h2>

           

            {/* Tabs */}
            <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-[#1E2040]" style={{ background: "#09091A" }}>
              {TABS.map(({ key, label, Icon }) => {
                const isActive = active === key;
                const count    = key === "all" ? newsEvents.length : newsEvents.filter(e => e.label === key).length;
                return (
                  <button key={key} onClick={() => setActive(key)}
                    className={cn("flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer", isActive ? "text-white" : "text-slate-600 hover:text-slate-400")}
                    style={isActive ? { background: "rgba(99,102,241,0.18)", border: "1px solid rgba(99,102,241,0.25)" } : {}}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    {label}
                    <span className={cn("text-[10px] font-mono px-1.5 py-0.5 rounded-md", isActive ? "bg-white/10 text-white/60" : "bg-[#1A1D35] text-slate-600")}>{count}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28, ease: EASE }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr"
            >
              {filtered.map((event, i) => {
                const featured = active === "all" && i === 0;
                return (
                  <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, ease: EASE, delay: i * 0.05 }}
                    className={cn(featured ? "sm:col-span-2 lg:col-span-2" : "")}
                  >
                    <EventCard event={event} featured={featured} onOpen={openMedia} />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox event={lightbox.event} index={lightbox.index} onClose={closeMedia} onNav={navMedia} />}
      </AnimatePresence>
    </>
  );
}
