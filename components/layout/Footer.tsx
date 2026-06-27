import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#05060E" }} className="border-t border-[#141629]">

      {/* ── Main footer body ── */}
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Col 1 — Brand + bio */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-xs shrink-0"
              style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}
            >
              F
            </div>
            <div>
              <p className="text-sm font-bold text-slate-200">Franck NKOMA BAYEMA</p>
              <p className="text-xs text-slate-600">Développeur FullStack</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed max-w-[240px]">
            Ingénieur fullstack en alternance — Java, Spring Boot, Flutter, Angular, Docker, Cloud.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-700">
            <MapPin className="w-3 h-3 text-indigo-400/50 shrink-0" />
            Poitiers · Mobilité nationale
          </div>
        </div>


        {/* Col 3 — Social links */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-1">
            Réseaux
          </p>
          {[
            { Icon: Linkedin, href: "https://linkedin.com/in/franck-nkoma", label: "linkedin.com/in/franck-nkoma" },
            { Icon: Github,   href: "https://github.com/FranckBG1",         label: "github.com/FranckBG1" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs text-slate-500 hover:text-indigo-400 transition-colors duration-200 group"
            >
              <Icon className="w-3.5 h-3.5 text-indigo-400/50 group-hover:text-indigo-400 transition-colors duration-200 shrink-0" />
              {label}
            </a>
          ))}

          {/* Social icon pills */}
          <div className="flex gap-2 mt-2">
            {[
              { Icon: Github,   href: "https://github.com/FranckBG1",         label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/in/franck-nkoma", label: "LinkedIn" },
              { Icon: Mail,     href: "mailto:franckbayema2@gmail.com",        label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1E2040] text-slate-600 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#0D0E1C]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-700">
            © {year} Franck NKOMA BAYEMA — Tous droits réservés
          </p>
          <p className="text-xs text-slate-800 font-mono">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
