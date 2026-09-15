"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Helper array to assign different subtle background colors/gradients to project cards
const cardStyles = [
  "bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a]",
  "bg-gradient-to-br from-[#0a0f1c] to-[#050505]",
  "bg-gradient-to-br from-[#1c1a10] to-[#0a0a0a]",
  "bg-gradient-to-br from-[#101c15] to-[#050505]",
  "bg-gradient-to-br from-[#1c101c] to-[#0a0a0a]",
  "bg-gradient-to-br from-[#10161c] to-[#050505]",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-pure-black relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-off-white mb-8"
          >
            Our highlights. <span className="text-slate-gray">Recent projects we're proud of.</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl gap-8 text-sm md:text-base text-slate-gray font-medium">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 md:text-left"
            >
              Building digital solutions that empower communities and optimize operations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 md:text-right"
            >
              Every project is an opportunity to push boundaries in engineering and design.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] aspect-square md:aspect-[4/5] lg:aspect-square p-8 md:p-10 flex flex-col justify-between border border-white/5",
                cardStyles[idx % cardStyles.length]
              )}
            >
              {/* Abstract mesh glow for the card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-end gap-2 relative z-10">
                <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {project.role}
                </span>
              </div>

              {/* Title & Tech */}
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-sm font-medium text-slate-gray">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-sm font-medium text-slate-gray">+{project.stack.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
