"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/data";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fbfcfe]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <div className="absolute inset-0 bg-rings mask-radial opacity-60" />

          <div className="relative flex flex-col items-center">
            <div className="flex overflow-hidden pb-1">
              {site.name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <div className="relative mt-7 h-[3px] w-44 overflow-hidden rounded-full bg-slate-200/80">
              <motion.span
                className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                initial={{ x: "-120%" }}
                animate={{ x: "260%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-5 text-xs font-medium uppercase tracking-[0.35em] text-slate-400"
            >
              {site.title}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}