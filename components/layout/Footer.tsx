import { LucideGithub, LucideLinkedin, Mail, MapPin } from "lucide-react";

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
        <div className="flex flex-col gap-4 md:col-start-3">
          <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-indigo-400">
            Réseaux
          </p>

          {/* Icon buttons */}
          <div className="flex gap-3">
            {[
              { Icon: LucideGithub,   href: "https://github.com/FranckBG1",         label: "GitHub",   color: "text-slate-200",  hoverColor: "hover:text-white"         },
              { Icon: LucideLinkedin, href: "https://linkedin.com/in/franck-nkoma", label: "LinkedIn",  color: "text-[#0A66C2]",  hoverColor: "hover:text-blue-400"      },
              { Icon: Mail,           href: "mailto:franckbayema2@gmail.com",        label: "Email",    color: "text-indigo-400", hoverColor: "hover:text-indigo-300"    },
            ].map(({ Icon, href, label, color, hoverColor }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className={`w-14 h-14 flex items-center justify-center rounded-xl border border-[#252845] bg-[#0D0F1E] ${color} ${hoverColor} hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-200`}
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>

          {/* Text links */}
          <div className="flex flex-col gap-2">
            {[
              { Icon: LucideLinkedin, href: "https://linkedin.com/in/franck-nkoma", label: "linkedin.com/in/franck-nkoma" },
              { Icon: LucideGithub,   href: "https://github.com/FranckBG1",         label: "github.com/FranckBG1" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors duration-200 group"
              >
                <Icon className="w-3.5 h-3.5 shrink-0 text-indigo-400/60 group-hover:text-indigo-400 transition-colors" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      
      
    </footer>
  );
}
