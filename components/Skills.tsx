"use client";

import { motion } from "framer-motion";
import {
  Cable,
  Wrench,
  ShieldCheck,
  FileCog,
  CircuitBoard,
  PanelsTopLeft,
  Gauge,
  HardHat,
  Zap,
} from "lucide-react";
import { skills } from "@/lib/data";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const meta = [
  { icon: Cable, blurb: "Pemasangan jalur & titik listrik", level: 90 },
  { icon: Wrench, blurb: "Analisa & perbaikan gangguan", level: 88 },
  { icon: ShieldCheck, blurb: "Perawatan berkala terjadwal", level: 85 },
  { icon: FileCog, blurb: "Interpretasi skema kelistrikan", level: 82 },
  { icon: PanelsTopLeft, blurb: "Perakitan & perawatan panel", level: 86 },
  { icon: CircuitBoard, blurb: "Wiring & komponen panel", level: 84 },
  { icon: Gauge, blurb: "Pengukuran arus & tegangan", level: 90 },
  { icon: HardHat, blurb: "Prosedur keselamatan kerja", level: 92 },
];

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
          className="lg:sticky lg:top-28"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Expertise
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-[2.5rem] sm:leading-tight"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate-500"
          >
            Keahlian teknis yang mendukung pekerjaan instalasi, pemeliharaan, dan
            troubleshooting kelistrikan secara aman dan efisien.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-6 text-white shadow-card"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Zap className="h-5 w-5" />
            </span>
            <p className="mt-4 text-3xl font-bold">8+</p>
            <p className="text-sm font-medium text-brand-100">
              Kompetensi inti kelistrikan
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-4 sm:grid-cols-2"
        >
          {skills.map((skill, i) => {
            const m = meta[i % meta.length];
            const Icon = m.icon;
            return (
              <motion.div
                key={skill}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/85 p-5 shadow-sm backdrop-blur transition-shadow duration-300 hover:border-brand-100 hover:shadow-soft"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">{skill}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      {m.blurb}
                    </p>
                  </div>
                </div>
                <div className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}