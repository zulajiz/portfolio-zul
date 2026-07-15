"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, MessageCircle, Music2, Sparkles, MapPin } from "lucide-react";
import { site } from "@/lib/data";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

const socials = [
  { icon: Instagram, href: site.instagram, label: "Instagram" },
  { icon: Music2, href: site.tiktok, label: "TikTok" },
  {
    icon: MessageCircle,
    href: `https://wa.me/${site.whatsappIntl}`,
    label: "WhatsApp",
  },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-36 sm:px-6"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for work
          </motion.span>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-sm font-medium text-slate-400"
          >
            Halo saya
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-2 text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-slate-800 sm:text-[4.25rem]"
          >
            {site.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-3 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-300" />
            <p className="text-lg font-semibold text-gradient sm:text-xl">
              {site.title}
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-[1.05rem]"
          >
            {site.shortBio}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-brand-600" />
            {site.location}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-600 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-300 hover:text-brand-700 hover:shadow-soft"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative w-full max-w-sm animate-float">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-brand-200/45 via-sky-100/40 to-brand-100/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-card backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/utama.jpg"
                  alt={site.name}
                  width={520}
                  height={640}
                  priority
                  className="h-[440px] w-full object-cover sm:h-[520px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl glass px-4 py-3 shadow-soft">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{site.name}</p>
                    <p className="text-xs font-medium text-slate-500">{site.title}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
