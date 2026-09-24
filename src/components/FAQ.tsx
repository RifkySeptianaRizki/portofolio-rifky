"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="p-2 md:p-3">
      <section
        id="faq"
        className="relative w-full overflow-hidden bg-[#050505] rounded-[2rem] flex flex-col pt-16 pb-12 md:pt-20 md:pb-24"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="noise-overlay" />
        
        {/* Subtle top glow */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[60%] h-[30%] bg-[#ffffff] opacity-[0.03] blur-[100px] rounded-full pointer-events-none z-0" />

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
                Got questions?
              </span>
              <br />
              <span className="text-white/40 font-medium">Let's clarify.</span>
            </motion.h2>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {PORTFOLIO_DATA.faq.map((item, idx) => {
              const isOpen = openIndex === idx;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl transition-all duration-300",
                    isOpen ? "bg-white/[0.04] border-white/10" : "bg-white/[0.01] border-white/[0.05] hover:bg-white/[0.02]"
                  )}
                  style={{
                    backdropFilter: "blur(24px) saturate(150%)",
                    WebkitBackdropFilter: "blur(24px) saturate(150%)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left relative z-10"
                  >
                    <span className={cn(
                      "text-base md:text-lg font-display font-medium tracking-tight transition-colors duration-300",
                      isOpen ? "text-white" : "text-white/70 group-hover:text-white/90"
                    )}>
                      {item.question}
                    </span>
                    <div className={cn(
                      "flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                      isOpen ? "bg-white text-black border-transparent" : "bg-white/5 text-white/50 border-white/10 group-hover:bg-white/10"
                    )}>
                      {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-white/50 font-light leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
