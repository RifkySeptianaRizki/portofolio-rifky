"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Helper array to assign different subtle background colors/gradients to project cards
const cardStyles = [
  "bg-gradient-to-br from-[rgba(28,28,28,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(10,15,28,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(28,26,16,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(16,28,21,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(28,16,28,0.3)] to-transparent",
  "bg-gradient-to-br from-[rgba(16,22,28,0.3)] to-transparent",
];

const getTechIconSlug = (tech: string) => {
  const normalized = tech.toLowerCase();
  if (normalized.includes("react") || normalized.includes("next")) return "react";
  if (normalized.includes("node")) return "nodedotjs";
  if (normalized.includes("express")) return "express";
  if (normalized.includes("tailwind")) return "tailwindcss";
  if (normalized.includes("supabase")) return "supabase";
  if (normalized.includes("api") || normalized.includes("rest")) return "postman"; 
  if (normalized.includes("algorithm") || normalized.includes("bracket")) return "leetcode";
  if (normalized.includes("postgres")) return "postgresql";
  if (normalized.includes("mysql") || normalized.includes("sql")) return "mysql";
  if (normalized.includes("laravel")) return "laravel";
  if (normalized.includes("bootstrap")) return "bootstrap";
  if (normalized.includes("php")) return "php";
  if (normalized.includes("flutter")) return "flutter";
  if (normalized.includes("javascript")) return "javascript";
  if (normalized.includes("typescript")) return "typescript";
  return null;
};

export default function Projects() {
  return (
    <div className="p-2 md:p-3">
      <section
        id="projects"
        className="relative w-full overflow-hidden bg-[#050505] rounded-[1.25rem] md:rounded-[1.75rem] flex flex-col pt-16 pb-12 md:pt-20 md:pb-16"
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
                Our recent highlights.
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
              Delivering high-impact digital solutions by pushing the boundaries of modern engineering, intuitive design, and scalable architecture.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] aspect-[4/5] p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2",
                  cardStyles[idx % cardStyles.length]
                )}
                style={{
                  backdropFilter: "blur(24px) saturate(150%)",
                  WebkitBackdropFilter: "blur(24px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15), 0 10px 40px rgba(0,0,0,0.4)"
                }}
              >
                {/* 4px gap background image container */}
                <div className="absolute inset-[4px] rounded-[calc(2rem-4px)] overflow-hidden z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://picsum.photos/seed/${project.id * 123}/800/1000`} alt="Project cover" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Soft gradient that is dark at the bottom for text, but transparent at the top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>

                {/* Abstract hover glow for the card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
                </div>

                {/* Tags (Stack Logos) */}
                <div className="flex flex-wrap justify-end gap-2 relative z-10">
                  {project.stack.map(tech => {
                    const slug = getTechIconSlug(tech);
                    if (!slug) return null;
                    return (
                      <div key={tech} title={tech} className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://cdn.simpleicons.org/${slug}/white`} alt={tech} className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )
                  })}
                </div>

                {/* Title & Description */}
                <div className="relative z-10">
                  <h3 
                    className="text-xl md:text-2xl lg:text-3xl font-display font-bold tracking-tight"
                    style={{
                      background: "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Description (Always Visible) */}
                  <p className="mt-3 text-sm md:text-base text-white/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
