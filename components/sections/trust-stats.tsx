"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years in hospitality" },
  { value: "300+", label: "Holidays Planned" },
  { value: "50+", label: "Destinations covered" },
];

export function TrustStats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-7xl px-6 pb-8 sm:px-8 lg:px-12"
    >
      <div className="rounded-4xl border border-[#efe2dc] bg-[#fff8f5] p-6 shadow-[0_20px_70px_rgba(17,17,17,0.05)] sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-[#f0d6d1] bg-white p-5 text-center"
            >
              <p className="text-3xl font-semibold text-[#17120f]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#c20b0b]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
