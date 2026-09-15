"use client";

import { motion } from "framer-motion";
import { Plus, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="flex items-center justify-between">
        
        {/* Logo Left */}
        <a href="#" className="flex items-center gap-2 text-xl font-display font-bold tracking-tight text-white hover-trigger">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
          </svg>
          rifky
        </a>

        {/* Center Pill */}
        <div className="hidden md:flex items-center gap-4 bg-[#111] border border-white/5 rounded-full px-4 py-2">
          <button className="flex items-center gap-2 text-white text-sm font-medium hover-trigger">
            <Menu size={14} /> Menu
          </button>
          <span className="text-white/30 text-xs pl-4 border-l border-white/10">
            Available for work
          </span>
        </div>

        {/* Right Button */}
        <a
          href="mailto:rifkiseptianarizki@gmail.com"
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform hover-trigger"
        >
          <Plus size={16} strokeWidth={3} /> Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
