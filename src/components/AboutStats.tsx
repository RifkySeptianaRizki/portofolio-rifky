"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutStats() {
  return (
    <section id="about" className="py-24 md:py-32 bg-deep-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs md:text-sm font-mono tracking-[0.2em] text-muted uppercase"
          >
            / ABOUT N. 01
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-display font-medium leading-tight text-off-white"
            >
              {PORTFOLIO_DATA.profile.mission}
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-12">
            {PORTFOLIO_DATA.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl md:text-7xl font-display font-bold text-vibrant-amber tracking-tighter">
                  {metric.value}
                </span>
                <span className="text-sm font-medium text-slate-gray uppercase tracking-widest max-w-[200px]">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
