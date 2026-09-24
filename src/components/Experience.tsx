"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper array to assign different subtle background colors/gradients to cards
const cardStyles = [
  "bg-gradient-to-br from-[rgba(28,28,28,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(10,15,28,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(28,26,16,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(16,28,21,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(28,16,28,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(16,22,28,0.3)] to-transparent",
];

export default function Experience() {
  return (
    <div className="p-2 md:p-3">
      <section
        id="experience"
        className="relative w-full overflow-hidden bg-[#050505] rounded-[2rem] flex flex-col pt-16 pb-12 md:pt-20 md:pb-16"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="noise-overlay" />
        
        {/* Subtle top glow */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[60%] h-[30%] bg-[#ffffff] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-8 leading-[1.1]"
            >
              <span 
                style={{
                  background: "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.8))"
                }}
              >
                A partner you can trust.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base font-medium mx-auto text-center max-w-3xl"
              style={{ color: "rgba(200,200,200,0.6)" }}
            >
              High standards. Reliable delivery. Proven track record in professional environments.
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="relative max-w-5xl mx-auto mt-12 md:mt-20">
            {/* Elegant Minimalist Vertical Line */}
            <div className="absolute left-[15px] md:left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            <div className="flex flex-col gap-6 md:gap-8">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-12 md:pl-20 group pt-4 md:pt-6"
                >
                  {/* L-shaped connector from vertical line to card */}
                  <div className="absolute left-[15px] md:left-[23px] top-[10px] md:top-[16px] w-[33px] md:w-[57px] h-[36px] md:h-[40px] border-l-2 border-b-2 border-white/20 rounded-bl-[1.5rem] md:rounded-bl-[2rem] z-0 transition-colors duration-500 group-hover:border-white/50" />

                  {/* Elegant Timeline Dot */}
                  <div className="absolute left-[-1px] md:left-[7px] top-[-2px] md:top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-white/50 group-hover:bg-white/[0.05]">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/40 group-hover:bg-white transition-all duration-500 group-hover:scale-[1.2]" />
                  </div>

                  {/* Elegant Content Card */}
                  <div className="flex flex-col p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/[0.05] bg-white/[0.015] transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.03] group-hover:-translate-y-1 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-display font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2.5 mt-2">
                          {/* Placeholder for future company logo */}
                          <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <Briefcase size={12} className="text-white/50" />
                          </div>
                          <h4 className="text-sm md:text-base text-white/60 italic font-medium uppercase tracking-wider">{exp.company}</h4>
                        </div>
                      </div>
                      
                      <div className="self-start shrink-0 mt-1 md:mt-0">
                        <span className="inline-block text-xs md:text-sm font-medium tracking-widest text-white/40 border border-white/10 bg-white/[0.03] px-4 py-1.5 rounded-full uppercase">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
