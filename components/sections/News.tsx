"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import type { NewsEvent } from "@/types";
import { newsEvents } from "@/data/news";
import { formatDate, labelColors, EASE, cn } from "@/lib/utils";

export function News() {
  return (
    <section id="news" className="relative py-32 md:py-44 overflow-hidden">
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.04)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-5">
            News &amp; Events
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            What I&apos;ve been{" "}
            <span className="text-gradient">up to.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop center line */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top"
            style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(139,92,246,0.2), transparent)" }}
          />

          {/* Mobile left line */}
          <div
            aria-hidden
            className="md:hidden absolute left-4 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.35), transparent)" }}
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {newsEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Desktop alternating layout */}
                  <div className="hidden md:grid grid-cols-2 gap-16 items-start">
                    {isLeft ? (
                      <>
                        <div className="flex justify-end">
                          <EventCard event={event} />
                        </div>
                        <div className="pt-4 pl-8">
                          <p className="text-xs font-mono text-indigo-400 tracking-wide">
                            {formatDate(event.date)}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pt-4 pr-8 text-right">
                          <p className="text-xs font-mono text-indigo-400 tracking-wide">
                            {formatDate(event.date)}
                          </p>
                        </div>
                        <EventCard event={event} />
                      </>
                    )}
                  </div>

                  {/* Desktop center dot */}
                  <div
                    aria-hidden
                    className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full z-10 items-center justify-center"
                    style={{ background: "#6366F1", border: "3px solid #05060E" }}
                  />

                  {/* Mobile layout */}
                  <div className="md:hidden pl-10">
                    <div
                      aria-hidden
                      className="absolute left-4 top-3 w-2.5 h-2.5 rounded-full -translate-x-1/2"
                      style={{ background: "#6366F1", border: "2px solid #05060E" }}
                    />
                    <p className="text-xs font-mono text-indigo-400 mb-3">{formatDate(event.date)}</p>
                    <EventCard event={event} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: NewsEvent }) {
  return (
    <div className="glass-card rounded-2xl p-6 max-w-sm w-full">
      <span className={cn(
        "inline-flex text-xs font-mono font-medium px-2.5 py-1 rounded-full border capitalize mb-4",
        labelColors[event.label]
      )}>
        {event.label}
      </span>
      <h3 className="text-base font-semibold text-slate-100 leading-snug mb-3">
        {event.title}
      </h3>
      <div className="flex flex-wrap gap-3 mb-3">
        <span className="flex items-center gap-1.5 text-xs text-slate-600">
          <Calendar className="w-3 h-3 text-indigo-400/70 shrink-0" />
          {formatDate(event.date)}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-600">
          <MapPin className="w-3 h-3 text-indigo-400/70 shrink-0" />
          {event.location}
        </span>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">{event.description}</p>
    </div>
  );
}
