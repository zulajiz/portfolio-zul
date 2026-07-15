import { Instagram, Music2, MessageCircle, Mail } from "lucide-react";
import { site, navItems } from "@/lib/data";

const socials = [
  { icon: Instagram, href: site.instagram, label: "Instagram" },
  { icon: Music2, href: site.tiktok, label: "TikTok" },
  { icon: MessageCircle, href: `https://wa.me/${site.whatsappIntl}`, label: "WhatsApp" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a href="#home" className="inline-flex items-center">
          <span className="text-lg font-semibold text-slate-800">{site.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {site.title} berbasis di {site.location}. Fokus pada keandalan,
              keselamatan, dan efisiensi sistem kelistrikan.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-1 hover:border-brand-300 hover:text-brand-700"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
