"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#expertise" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-40 p-4 md:p-6"
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

          {/* Desktop Center Pill */}
          <div className="hidden md:flex items-center gap-6 bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-2.5">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <span className="text-white/20 text-xs pl-6 border-l border-white/10">
              Available for work
            </span>
          </div>

          {/* Right Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:rifkiseptianarizki@gmail.com"
              className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform hover-trigger"
            >
              <Plus size={16} strokeWidth={3} /> Get in touch
            </a>
            
            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-full text-white"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            
            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0a0a0a] border-l border-white/5 z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-white font-display font-bold tracking-tight">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
                <span className="text-white/40 text-sm uppercase tracking-wider font-semibold">Say Hello</span>
                <a
                  href="mailto:rifkiseptianarizki@gmail.com"
                  className="flex items-center gap-2 text-white bg-white/5 px-4 py-3 rounded-xl font-medium justify-center"
                >
                  <Plus size={16} /> Get in touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
