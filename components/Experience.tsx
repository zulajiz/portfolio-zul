"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-28 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
      >
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          description="Pengalaman kerja di lingkungan operasional nyata dengan fokus pada keselamatan dan keandalan sistem."
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 space-y-6"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-7 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-card sm:p-9"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-600 to-brand-900" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Briefcase className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-sm font-semibold text-brand-700">
                    {exp.company}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-sm text-slate-500 sm:items-end">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                  <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}