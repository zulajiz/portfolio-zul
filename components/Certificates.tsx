"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-5 py-28 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
      >
        <SectionHeading
          eyebrow="Achievements"
          title="Certificates & Awards"
          description="Rekam jejak pembelajaran dan sertifikasi yang mendukung kompetensi di bidang kelistrikan."
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.image}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-3 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-700 opacity-0 shadow-soft transition-all duration-500 group-hover:opacity-100">
                <Award className="h-4 w-4" />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}