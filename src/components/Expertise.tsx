"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-[#EAEAEA] relative text-pure-black">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            My expertise &<br/>your vision.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted font-medium text-sm md:text-base max-w-md mx-auto"
          >
            A multidisciplinary approach bridging design aesthetics with robust engineering, ensuring reliable delivery.
          </motion.p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
          {PORTFOLIO_DATA.expertise.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-black/5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 min-h-[280px]"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/30 bg-black/5">
                  <span className="text-xs font-bold">{item.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
