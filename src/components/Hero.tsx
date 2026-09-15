"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Grid3X3, ArrowRight, User, Folder, Sparkles, Clock } from "lucide-react";
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Hero() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 md:p-3 h-screen">
      <section
        className="relative w-full h-full overflow-hidden bg-[#050505] rounded-[1.25rem] md:rounded-[1.75rem] flex flex-col"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="noise-overlay" />
        {/* ─── NAVBAR (Fixed & Sticky) ─── */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="fixed top-2 md:top-3 left-2 right-2 md:left-3 md:right-3 z-[100] flex items-center justify-between px-5 md:px-10 py-5 md:py-6 pointer-events-none"
        >
          {/* Logo */}
          {/* Left: Get in touch (Liquid Glass Capsule — Transparent) */}
          <a
            href="mailto:rifkiseptianarizki@gmail.com"
            className="pointer-events-auto group relative flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Top curved highlight reflection */}
            <div 
              className="absolute pointer-events-none"
              style={{
                top: "1px",
                left: "8%",
                right: "8%",
                height: "45%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",
                borderRadius: "0 0 50% 50% / 0 0 100% 100%",
                filter: "blur(1px)",
              }}
            />
            
            {/* Bottom subtle inner shadow for depth */}
            <div 
              className="absolute bottom-0 left-[5%] right-[5%] pointer-events-none"
              style={{
                height: "30%",
                background: "linear-gradient(0deg, rgba(0,0,0,0.05) 0%, transparent 100%)",
                borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              }}
            />

            {/* Bottom-right glass gleam — realistic crescent */}
            <div 
              className="absolute pointer-events-none"
              style={{
                bottom: "1px",
                right: "2px",
                width: "18px",
                height: "18px",
                borderBottom: "3px solid rgba(255, 255, 255, 0.25)",
                borderRight: "3px solid rgba(255, 255, 255, 0.25)",
                borderBottomRightRadius: "18px",
                maskImage: "linear-gradient(to top left, black 20%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to top left, black 20%, transparent 80%)",
                filter: "blur(1.5px)",
              }}
            />
            
            <Plus size={13} strokeWidth={3.5} className="relative z-10 group-hover:rotate-90 transition-transform duration-500" />
            <span className="relative z-10 tracking-wide drop-shadow-sm">Get in touch</span>
          </a>

          {/* Right: Menu & Status Pill (Liquid Glass Capsule) */}
          <div 
            className="pointer-events-auto relative flex items-center rounded-full overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Top curved highlight reflection */}
            <div 
              className="absolute pointer-events-none"
              style={{
                top: "1px",
                left: "8%",
                right: "8%",
                height: "45%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",
                borderRadius: "0 0 50% 50% / 0 0 100% 100%",
                filter: "blur(1px)",
              }}
            />
            
            {/* Bottom subtle inner shadow for depth */}
            <div 
              className="absolute bottom-0 left-[5%] right-[5%] pointer-events-none"
              style={{
                height: "30%",
                background: "linear-gradient(0deg, rgba(0,0,0,0.05) 0%, transparent 100%)",
                borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              }}
            />

            {/* Bottom-right glass gleam — realistic crescent */}
            <div 
              className="absolute pointer-events-none"
              style={{
                bottom: "1px",
                right: "2px",
                width: "18px",
                height: "18px",
                borderBottom: "3px solid rgba(255, 255, 255, 0.25)",
                borderRight: "3px solid rgba(255, 255, 255, 0.25)",
                borderBottomRightRadius: "18px",
                maskImage: "linear-gradient(to top left, black 20%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to top left, black 20%, transparent 80%)",
                filter: "blur(1.5px)",
              }}
            />

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-10 flex items-center gap-1.5 text-white text-[13px] font-bold px-4 py-2 hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              <Grid3X3 size={13} strokeWidth={2.5} /> Menu
            </button>
            <span className="relative z-10 hidden sm:flex text-white/70 text-[12px] font-medium px-4 py-2 border-l border-white/20 drop-shadow-sm">
              Open for projects
            </span>
          </div>
        </motion.nav>

        {/* Full-screen Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Invisible backdrop to close menu when clicking outside */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[105] pointer-events-auto"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.05, filter: "blur(10px)", borderRadius: "100px" }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  filter: "blur(0px)", 
                  borderRadius: "32px",
                  transition: { type: "spring", damping: 24, stiffness: 280, mass: 0.8 }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.05, 
                  filter: "blur(10px)", 
                  borderRadius: "100px",
                  transition: { duration: 0.3, ease: "backIn" }
                }}
                className="fixed top-[90px] md:top-[100px] right-[28px] md:right-[52px] w-[90vw] md:w-[450px] z-[110] overflow-hidden pointer-events-auto"
                style={{
                  transformOrigin: "calc(100% - 30px) -10px",
                  background: "linear-gradient(180deg, rgba(25,25,25,0.4) 0%, rgba(15,15,15,0.2) 100%)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
                  backdropFilter: "blur(30px)",
                  WebkitBackdropFilter: "blur(30px)",
                }}
              >
              {/* Top-left glass gleam */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  top: "1px",
                  left: "1px",
                  width: "50px",
                  height: "50px",
                  borderTop: "2px solid rgba(255, 255, 255, 0.5)",
                  borderLeft: "2px solid rgba(255, 255, 255, 0.5)",
                  borderTopLeftRadius: "32px",
                  maskImage: "linear-gradient(to bottom right, black 10%, transparent 60%)",
                  WebkitMaskImage: "linear-gradient(to bottom right, black 10%, transparent 60%)",
                  filter: "blur(1px)",
                }}
              />

              {/* Bottom-right glass gleam */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  bottom: "1px",
                  right: "1px",
                  width: "50px",
                  height: "50px",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
                  borderRight: "2px solid rgba(255, 255, 255, 0.5)",
                  borderBottomRightRadius: "32px",
                  maskImage: "linear-gradient(to top left, black 10%, transparent 60%)",
                  WebkitMaskImage: "linear-gradient(to top left, black 10%, transparent 60%)",
                  filter: "blur(1px)",
                }}
              />

              <div className="p-8 pb-10 flex flex-col gap-6 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <Grid3X3 size={14} className="text-white/60" />
                    <span className="text-white text-sm font-semibold tracking-wide">Menu</span>
                  </div>
                  <span className="text-white/40 text-[11px] font-medium">1/5 slots for August</span>
                </div>

                {/* Main Links */}
                <div className="flex flex-col gap-1">
                  {[
                    { name: "About", icon: User, href: "#about" },
                    { name: "Projects", icon: Folder, href: "#projects" },
                    { name: "Expertise", icon: Sparkles, href: "#expertise" },
                    { name: "Experience", icon: Clock, href: "#experience" }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                    <a 
                      key={i} 
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/10 transition-colors"
                    >
                      <span className="text-[28px] font-medium text-white/90 group-hover:text-white transition-colors">{item.name}</span>
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
                        style={{
                          background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                        }}
                      >
                        <Icon className="text-white/60 group-hover:text-white transition-colors" size={20} />
                      </div>
                    </a>
                  )})}
                </div>

                {/* Social Media */}
                <div className="mt-4">
                  <h3 className="text-white/30 text-[11px] font-semibold mb-4 uppercase tracking-wider">Social media</h3>
                  <div className="flex gap-4">
                    {[
                      { name: 'LinkedIn', icon: LinkedinIcon, href: "#" },
                      { name: 'Twitter', icon: TwitterIcon, href: "#" },
                      { name: 'Instagram', icon: InstagramIcon, href: "#" }
                    ].map(({ name, icon: Icon, href }) => (
                      <a key={name} href={href} className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" aria-label={name}>
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Dummy placeholder to maintain flex layout while nav is fixed */}
        <div className="h-[76px] md:h-[88px] w-full shrink-0 pointer-events-none" />

        {/* ─── CONTENT AREA (fills remaining space) ─── */}
        <div className="relative flex-1 flex flex-col">

          {/* ─── PROFILE IMAGE ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 left-[-2%] md:left-[-7%] lg:left-[9%] bottom-[8%] md:bottom-[-5%] lg:bottom-[-22%] w-[102%] sm:w-[60%] md:w-[50%] lg:w-[75%] h-[90%] md:h-[95%] lg:h-[130%] pointer-events-none select-none"
          >
            {/* Ambient soft light glow behind the person */}
            <div className="absolute left-[10%] bottom-[15%] w-[60%] h-[60%] bg-[#ffffff] opacity-[0.05] blur-[100px] rounded-full z-0" />

            {/* Wrapper for drop-shadow so it doesn't get cut off by maskImage bounds */}
            <div 
              className="relative z-10 w-full h-full"
              style={{ filter: "drop-shadow(0px 0px 65px rgba(255, 255, 255, 0.15))" }}
            >
              <img 
                src="/profil-rifky.png" 
                alt="Rifky Septian Arizki" 
                className="w-full h-full object-contain object-left-bottom opacity-95"
                style={{
                  maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)"
                }}
              />
            </div>
          </motion.div>

          {/* ─── HEADLINE (center-right, vertically centered in upper half) ─── */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 top-[20%] md:top-[5%] right-[3%] md:right-[5%] lg:right-[6%] max-w-[265px] sm:max-w-[320px] md:max-w-[500px] lg:max-w-[650px] text-[19px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-right md:text-left"
          >
            <span 
              style={{
                background: "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.9)) drop-shadow(0px 1px 1px rgba(255,255,255,0.4))"
              }}
            >
              Fresh graduate in Informatics.{" "}
            </span>
            <span 
              style={{
                background: "linear-gradient(110deg, rgba(200,200,200,0.9) 0%, rgba(150,150,150,0.5) 20%, rgba(200,200,200,0.8) 40%, rgba(100,100,100,0.3) 60%, rgba(180,180,180,0.7) 80%, rgba(200,200,200,0.9) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.9)) drop-shadow(0px 1px 1px rgba(255,255,255,0.2))"
              }}
            >
              Specializing in full-stack web development, UI/UX design, and robust IT system maintenance.
            </span>
          </motion.h1>

          {/* ─── BOTTOM INFO BAR (Metrics) ─── */}
          <div className="absolute bottom-[23%] md:bottom-[56%] left-0 right-0 z-30 flex items-start justify-between px-5 md:px-10 gap-2 md:gap-4">
            
            {/* Metric 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-0.5 md:gap-1 w-1/3"
            >
              <span className="text-white font-medium text-[15px] md:text-[18px] tracking-wide">3.68</span>
              <span className="text-white/60 text-[10px] md:text-[12px] leading-[1.3]">
                GPA (Cum Laude)<br />
                Informatika UNSAP
              </span>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col gap-0.5 md:gap-1 w-1/3 items-center text-center"
            >
              <span className="text-white font-medium text-[15px] md:text-[18px] tracking-wide">06+</span>
              <span className="text-white/60 text-[10px] md:text-[12px] leading-[1.3]">
                Production &<br />
                Community Projects
              </span>
            </motion.div>

            {/* Metric 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col gap-0.5 md:gap-1 w-1/3 items-end text-right"
            >
              <span className="text-white font-medium text-[15px] md:text-[18px] tracking-wide">03+</span>
              <span className="text-white/60 text-[10px] md:text-[12px] leading-[1.3]">
                Years Dev &<br />
                Leadership Exp.
              </span>
            </motion.div>

          </div>


          {/* ─── GIANT TEXT "RIFKY" (MOBILE) ─── */}
          {/* Uses 100% auto so it never gets cut off horizontally on tall phone screens */}
          <div className="md:hidden absolute z-20 bottom-[0%] left-0 right-0 w-full overflow-hidden pointer-events-none select-none" style={{ height: "45%" }}>
            {/* Warm glow aura */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 2.5, delay: 0.3 }}
              className="absolute inset-0"
              style={{ filter: "blur(40px)" }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.8) 100%)",
                  filter: "blur(16px)",
                  mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
                  WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
                }}
              />
            </motion.div>
            {/* Sharp text (Liquid Glass) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              style={{ filter: "drop-shadow(0px 12px 24px rgba(0,0,0,0.8))" }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 100%)",
                  backdropFilter: "blur(16px) saturate(120%)",
                  WebkitBackdropFilter: "blur(16px) saturate(120%)",
                  mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
                  WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
                }}
              />
              <svg 
                className="absolute left-0 bottom-0 w-full pointer-events-none" 
                viewBox="0 0 500 150" 
                preserveAspectRatio="xMidYMax meet"
              >
                <defs>
                  <linearGradient id="glassEdgeMobile" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                    <stop offset="40%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="60%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
                  </linearGradient>
                </defs>
                <text x="51.5%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="130" letterSpacing="18" fill="none" stroke="url(#glassEdgeMobile)" strokeWidth="1.5">RIFKY</text>
              </svg>
            </motion.div>
          </div>

          {/* ─── GIANT TEXT "RIFKY" (DESKTOP) ─── */}
          {/* Uses cover so it expands massively and fills the screen edges on laptops */}
          <div className="hidden md:block absolute z-20 bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none select-none" style={{ height: "65%" }}>
            {/* Warm glow aura */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 2.5, delay: 0.3 }}
              className="absolute inset-0"
              style={{ filter: "blur(60px)" }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.8) 100%)",
                  filter: "blur(16px)",
                  mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='140' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center / cover no-repeat",
                  WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='140' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center / cover no-repeat",
                }}
              />
            </motion.div>
            {/* Sharp text (Liquid Glass) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              style={{ filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.8))" }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 100%)",
                  backdropFilter: "blur(16px) saturate(120%)",
                  WebkitBackdropFilter: "blur(16px) saturate(120%)",
                  mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='140' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center / cover no-repeat",
                  WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='140' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center / cover no-repeat",
                }}
              />
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                viewBox="0 0 500 150" 
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="glassEdgeDesktop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                    <stop offset="40%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="60%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
                  </linearGradient>
                </defs>
                <text x="51.5%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="140" letterSpacing="18" fill="none" stroke="url(#glassEdgeDesktop)" strokeWidth="1.5">RIFKY</text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
