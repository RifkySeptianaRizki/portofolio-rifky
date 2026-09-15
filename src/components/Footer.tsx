"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-pure-black pt-20 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Contact Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-20 text-sm font-medium text-slate-gray">
          <div className="flex gap-8 mb-8 md:mb-0">
            <a href={PORTFOLIO_DATA.profile.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={PORTFOLIO_DATA.profile.contact.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.profile.contact.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Rifky Septiana Rizki.<br/>All rights reserved.
          </div>
        </div>

        {/* Massive Footer Text */}
        <div className="w-full text-center select-none pointer-events-none mt-10">
          <h1 className="text-[25vw] font-black leading-[0.75] tracking-tighter text-footer-glow">
            RIFKY
          </h1>
        </div>
      </div>
    </footer>
  );
}
