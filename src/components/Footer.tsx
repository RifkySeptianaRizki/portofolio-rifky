"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail } from "lucide-react";

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-6 overflow-hidden relative border-t border-white/5 flex flex-col">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-[#ffffff] opacity-[0.02] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Left: Heading */}
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight">
              Let's create something<br />extraordinary.
            </h2>
          </div>
          
          {/* Right: Columns */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:gap-12">
            {/* Column 1: Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white/40 tracking-wider uppercase mb-2">Connect</h4>
              <a href={PORTFOLIO_DATA.profile.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a href={PORTFOLIO_DATA.profile.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href={PORTFOLIO_DATA.profile.contact.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
                <InstagramIcon size={16} /> Instagram
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.profile.contact.email}`} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
                <Mail size={16} /> Email
              </a>
            </div>
            
            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white/40 tracking-wider uppercase mb-2">Navigation</h4>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Home</a>
              <a href="#expertise" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Expertise</a>
              <a href="#projects" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Projects</a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors text-sm font-medium">FAQ</a>
            </div>
          </div>
        </div>

        {/* Middle Section: Massive Footer Text */}
        <div className="w-full text-center select-none pointer-events-none flex justify-center mb-16 overflow-hidden">
          <h1 
            className="text-[22vw] font-display font-bold tracking-[0.15em] leading-[0.75] text-transparent bg-clip-text ml-[0.05em]"
            style={{
              backgroundImage: "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.8))"
            }}
          >
            RIFKY
          </h1>
        </div>

        {/* Bottom Section: Copyright & Links */}
        <div className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-medium text-white/40">
          <div className="text-white/60 font-semibold tracking-wide">
            Rifky Septiana Rizki
          </div>
          <div className="flex gap-6">
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
