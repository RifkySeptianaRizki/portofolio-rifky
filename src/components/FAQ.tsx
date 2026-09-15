"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-pure-black relative overflow-hidden">
      {/* Massive Red Glow representing the transition back to dark */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-midu-maroon to-transparent opacity-80 blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-off-white">
            Got questions? <span className="text-slate-gray">Let's clarify.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {PORTFOLIO_DATA.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx}
                className={cn(
                  "border border-white/5 bg-[#111] rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-[#151515] border-white/10" : "hover:bg-[#151515]"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 text-slate-gray ml-4">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-gray font-medium leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
