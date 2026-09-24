"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Expertise() {
  return (
    <div className="p-2 md:p-3">
      <section
        id="expertise"
        className="relative w-full overflow-hidden bg-[#050505] rounded-[1.25rem] md:rounded-[1.75rem] flex flex-col pt-16 pb-12 md:pt-20 md:pb-16"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="noise-overlay" />
        
        {/* Subtle top glow */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[60%] h-[30%] bg-[#ffffff] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 max-w-2xl">
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
                My expertise &<br/>your vision.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-medium text-sm md:text-base max-w-md mx-auto"
              style={{
                color: "rgba(200,200,200,0.7)"
              }}
            >
              A multidisciplinary approach bridging design aesthetics with robust engineering, ensuring reliable delivery.
            </motion.p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 gap-4 w-full max-w-4xl">
            {PORTFOLIO_DATA.expertise.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-[1.25rem] md:rounded-[1.5rem] p-6 md:p-8 flex flex-row items-center gap-4 md:gap-8 justify-between group overflow-hidden transition-transform duration-500 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(24px) saturate(150%)",
                  WebkitBackdropFilter: "blur(24px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.3)"
                }}
              >
                {/* Subtle internal gradient glow that follows hover (simulated via CSS opacity) */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex-1">
                  <h3 
                    className="text-lg md:text-xl font-bold mb-2 tracking-tight"
                    style={{
                      background: "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-medium text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: "rgba(200,200,200,0.6)" }}>
                    {item.description}
                  </p>
                </div>
                
                <div className="relative z-10 shrink-0 self-start md:self-center hidden sm:flex">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 bg-white/5 group-hover:border-white/50 group-hover:text-white transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <span className="text-xs md:text-sm font-bold">{item.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
