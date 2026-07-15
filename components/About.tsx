"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";

const highlights = [
  "Instalasi & inspeksi kelistrikan",
  "Troubleshooting sistem",
  "Pemeliharaan preventif",
  "Standar K3 kelistrikan",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28 sm:px-6">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-5 rounded-[2.75rem] bg-gradient-to-br from-brand-100/50 via-sky-100/40 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-card backdrop-blur">
            <div className="overflow-hidden rounded-[1.6rem]">
              <Image
                src="/fotodua.jpg"
                alt="About Zul Ajiz"
                width={520}
                height={560}
                className="h-[440px] w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-2xl glass px-5 py-3 shadow-soft">
            <p className="text-2xl font-bold text-brand-700">100%</p>
            <p className="text-xs font-medium text-slate-500">Safety First</p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="About Me"
              title="Teliti, adaptif, dan berorientasi keselamatan"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-slate-500"
          >
            {site.longBio}
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-600" />
                {h}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9">
            <a
              href="/cv.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}