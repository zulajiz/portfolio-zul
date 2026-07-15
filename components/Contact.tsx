"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  User,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const contactInfo = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Lokasi", value: site.location, href: undefined },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsapp,
    href: `https://wa.me/${site.whatsappIntl}`,
  },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const key = site.web3formsKey;

    // Fallback: kalau access key belum diisi, buka email client (mailto).
    if (!key || key === "YOUR_WEB3FORMS_ACCESS_KEY") {
      const body = encodeURIComponent(
        `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${site.email}?subject=Kontak dari Portfolio&body=${body}`;
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: "Pesan baru dari Portfolio",
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-slate-50/60 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100/70";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="flex flex-col items-center text-center"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description="Punya proyek kelistrikan atau ingin berdiskusi? Kirim pesan dan saya akan segera membalas."
          className="mx-auto"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-16 overflow-hidden rounded-[2rem] border border-slate-100 bg-white/70 shadow-card backdrop-blur"
      >
        <div className="grid lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-950 p-8 text-white lg:col-span-2 sm:p-10"
          >
            <div className="absolute inset-0 bg-rings opacity-20" />
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold">Mari berkolaborasi</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100">
                Solusi kelistrikan yang aman, andal, dan efisien. Hubungi saya
                melalui kanal di bawah ini.
              </p>

              <div className="mt-9 space-y-3">
                {contactInfo.map((item) => {
                  const inner = (
                    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-brand-200">
                          {item.label}
                        </p>
                        <p className="truncate text-sm font-semibold">
                          {item.value}
                        </p>
                      </div>
                      {item.href && (
                        <ArrowUpRight className="h-4 w-4 text-brand-200 opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="p-8 lg:col-span-3 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Nama
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama lengkap"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@contoh.com"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Pesan
              </label>
              <div className="relative">
                <MessageSquare className="pointer-events-none absolute left-3 top-4 h-4 w-4 text-slate-400" />
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tulis pesan Anda..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100/70"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Kirim Pesan
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}