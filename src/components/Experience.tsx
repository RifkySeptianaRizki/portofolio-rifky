"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-pure-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-off-white mb-8 max-w-4xl"
          >
            A partner you can trust. <span className="text-slate-gray">High standards. Reliable delivery.</span>
          </motion.h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#111111] rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/5"
            >
              <div>
                <div className="text-midu-red mb-8 opacity-50">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.714 4.103-9.609 9.983-9.609v3.913c-3.111 0-5.051 1.748-5.051 4.783h5.051v8.304h-9.983zm-14.017 0v-7.391c0-5.714 4.103-9.609 9.983-9.609v3.913c-3.111 0-5.051 1.748-5.051 4.783h5.051v8.304h-9.983z" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {exp.role}
                </h3>
                <p className="text-slate-gray font-medium leading-relaxed mb-12">
                  {exp.description}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{exp.company}</h4>
                  <span className="text-sm text-slate-gray">{exp.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
