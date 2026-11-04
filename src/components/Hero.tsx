"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Grid3X3, ArrowRight, User, Folder, Sparkles, Clock, HelpCircle, Mail, FileText, Download, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const ParticleOrb = dynamic(() => import("./ParticleOrb"), { ssr: false });
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const CV_SLIDES = ["/cv-page-1.webp", "/cv-page-2.webp"];
const HERO_ROLES = ["Software Engineer", "Full-Stack Developer"];

export default function Hero() {
  const [time, setTime] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState(HERO_ROLES[0]);
  const [isDeletingRole, setIsDeletingRole] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [cvSlideIndex, setCvSlideIndex] = useState(0);
  const [cvScale, setCvScale] = useState(1);
  const [cvTranslate, setCvTranslate] = useState({ x: 0, y: 0 });
  const [cvDragOffset, setCvDragOffset] = useState(0);
  const [isCvDragging, setIsCvDragging] = useState(false);
  const [isCvPinching, setIsCvPinching] = useState(false);
  const cvTouchStartRef = useRef({
    x: 0,
    y: 0,
    dist: 0,
    scale: 1,
    transX: 0,
    transY: 0,
  });
  const cvLastTapRef = useRef(0);

  useEffect(() => {
    setCvScale(1);
    setCvTranslate({ x: 0, y: 0 });
    setCvDragOffset(0);
    setIsCvDragging(false);
  }, [cvSlideIndex, isCvModalOpen]);

  useEffect(() => {
    if (!isCvModalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCvModalOpen(false);
      else if (e.key === "ArrowRight") setCvSlideIndex((p) => Math.min(CV_SLIDES.length - 1, p + 1));
      else if (e.key === "ArrowLeft") setCvSlideIndex((p) => Math.max(0, p - 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCvModalOpen]);

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

  useEffect(() => {
    const currentFullRole = HERO_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeletingRole && typedRole === currentFullRole) {
      timeout = setTimeout(() => setIsDeletingRole(true), 2200);
    } else if (isDeletingRole && typedRole === "") {
      timeout = setTimeout(() => {
        setIsDeletingRole(false);
        setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
      }, 280);
    } else {
      const nextText = isDeletingRole
        ? currentFullRole.slice(0, typedRole.length - 1)
        : currentFullRole.slice(0, typedRole.length + 1);
      timeout = setTimeout(() => {
        setTypedRole(nextText);
      }, isDeletingRole ? 38 : 75);
    }

    return () => clearTimeout(timeout);
  }, [typedRole, isDeletingRole, roleIndex]);

  return (
    <div className="p-2 md:p-3 h-[85svh] md:h-screen">
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
          {/* Left: Lihat CV (Liquid Glass Capsule — Transparent) */}
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              setCvSlideIndex(0);
              setIsCvModalOpen(true);
            }}
            className="pointer-events-auto group relative flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.97] overflow-hidden cursor-pointer"
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
            
            <FileText size={13} strokeWidth={2.5} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10 tracking-wide drop-shadow-sm">Lihat CV</span>
          </button>

          {/* Right: Menu & Hubungi Saya Pill (Liquid Glass Capsule) */}
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
              className="relative z-10 flex items-center gap-1.5 text-white text-[13px] font-bold px-4 py-2 hover:bg-white/10 transition-colors drop-shadow-sm cursor-pointer"
            >
              <Grid3X3 size={13} strokeWidth={2.5} /> Menu
            </button>
            <a
              href="mailto:rifkiseptianarizki@gmail.com"
              className="relative z-10 hidden sm:flex items-center gap-1.5 text-white/85 hover:text-white text-[12px] font-semibold px-3.5 sm:px-4 py-2 border-l border-white/20 hover:bg-white/10 transition-colors drop-shadow-sm"
            >
              <Plus size={12} strokeWidth={3} />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </motion.nav>

        {/* CV Preview & Download Modal (A4 Exact Fit + Slide Carousel) */}
        <AnimatePresence>
          {isCvModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsCvModalOpen(false)}
              className="fixed inset-0 z-[220] flex items-start justify-center pt-8 px-2 pb-2 sm:items-center sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overscroll-contain touch-none"
              role="dialog"
              aria-modal="true"
              aria-label="Preview CV Rifky Septiana Rizki"
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[94vw] max-w-[440px] md:max-w-[95vw] md:w-auto h-auto md:h-[92vh] max-h-[94dvh] md:max-h-[900px] bg-[#121212] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-3 border-b border-white/10 bg-[#121212] shrink-0 z-20">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="hidden xs:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/15 items-center justify-center shrink-0">
                      <FileText size={14} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[11px] sm:text-sm font-bold text-white truncate">
                        CV Rifky Septiana Rizki
                      </h3>
                      <p className="text-[9px] sm:text-[11px] text-white/50 truncate">
                        Halaman {cvSlideIndex + 1}/{CV_SLIDES.length} • Ukuran A4
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <a
                      href="/cv"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-white/90 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 transition-colors"
                      title="Buka PDF di tab baru"
                    >
                      <ExternalLink size={12} />
                      <span>Buka PDF</span>
                    </a>
                    <a
                      href="/CV-Rifky-Septiana-Rizki.pdf"
                      download="CV Rifky Septiana Rizki.pdf"
                      className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-black bg-white hover:bg-white/90 transition-all shadow-md active:scale-95"
                    >
                      <Download size={12} strokeWidth={2.5} />
                      <span>Download</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsCvModalOpen(false)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Tutup preview CV"
                    >
                      <X size={15} />
                    </button>
                  </div>
                </div>

                {/* A4 Vertical Preview Stage with Next/Prev Slide Carousel */}
                <div className="w-full md:flex-1 md:min-h-0 bg-[#0a0a0a] p-3 sm:p-5 md:px-6 flex items-center justify-center md:gap-4 overflow-hidden">
                  {/* Left Arrow Outside PDF (Desktop) */}
                  <button
                    type="button"
                    onClick={() => setCvSlideIndex((p) => Math.max(0, p - 1))}
                    disabled={cvSlideIndex === 0}
                    className={`hidden md:flex w-10 h-10 rounded-full border items-center justify-center shadow-lg transition-all shrink-0 ${
                      cvSlideIndex > 0
                        ? "bg-white/10 hover:bg-white/20 text-white border-white/20 active:scale-95 cursor-pointer"
                        : "bg-white/[0.03] text-white/20 border-white/5 cursor-not-allowed"
                    }`}
                    aria-label="Halaman CV sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  <div
                    className="relative w-full md:w-auto md:h-full aspect-[210/297] rounded-xl sm:rounded-2xl bg-white overflow-hidden select-none border border-white/15 shadow-[0_12px_45px_rgba(0,0,0,0.75)] touch-none flex items-center justify-center"
                    onTouchStart={(e) => {
                      if (e.touches.length === 2) {
                        setIsCvPinching(true);
                        setIsCvDragging(false);
                        setCvDragOffset(0);
                        const dist = Math.hypot(
                          e.touches[0].clientX - e.touches[1].clientX,
                          e.touches[0].clientY - e.touches[1].clientY
                        );
                        cvTouchStartRef.current = {
                          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                          y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
                          dist,
                          scale: cvScale,
                          transX: cvTranslate.x,
                          transY: cvTranslate.y,
                        };
                      } else if (e.touches.length === 1) {
                        const now = Date.now();
                        if (now - cvLastTapRef.current < 280) {
                          if (cvScale > 1.15) {
                            setCvScale(1);
                            setCvTranslate({ x: 0, y: 0 });
                          } else {
                            setCvScale(2.2);
                          }
                          cvLastTapRef.current = 0;
                          return;
                        }
                        cvLastTapRef.current = now;
                        cvTouchStartRef.current = {
                          x: e.touches[0].clientX,
                          y: e.touches[0].clientY,
                          dist: 0,
                          scale: cvScale,
                          transX: cvTranslate.x,
                          transY: cvTranslate.y,
                        };
                        if (cvScale <= 1.05) {
                          setIsCvDragging(true);
                        }
                      }
                    }}
                    onTouchMove={(e) => {
                      if (e.touches.length === 2) {
                        const dist = Math.hypot(
                          e.touches[0].clientX - e.touches[1].clientX,
                          e.touches[0].clientY - e.touches[1].clientY
                        );
                        const factor = dist / (cvTouchStartRef.current.dist || 1);
                        const newScale = Math.min(Math.max(1, cvTouchStartRef.current.scale * factor), 4);
                        setCvScale(newScale);
                        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                        setCvTranslate({
                          x: cvTouchStartRef.current.transX + (midX - cvTouchStartRef.current.x),
                          y: cvTouchStartRef.current.transY + (midY - cvTouchStartRef.current.y),
                        });
                      } else if (e.touches.length === 1) {
                        if (cvScale > 1.05) {
                          setCvTranslate({
                            x: cvTouchStartRef.current.transX + (e.touches[0].clientX - cvTouchStartRef.current.x),
                            y: cvTouchStartRef.current.transY + (e.touches[0].clientY - cvTouchStartRef.current.y),
                          });
                        } else if (isCvDragging) {
                          const deltaX = e.touches[0].clientX - cvTouchStartRef.current.x;
                          setCvDragOffset(deltaX);
                        }
                      }
                    }}
                    onTouchEnd={() => {
                      setIsCvPinching(false);
                      if (cvScale < 1.1) {
                        setCvScale(1);
                        setCvTranslate({ x: 0, y: 0 });
                      }
                      if (isCvDragging) {
                        setIsCvDragging(false);
                        if (cvDragOffset < -40 && cvSlideIndex < CV_SLIDES.length - 1) {
                          setCvSlideIndex((p) => p + 1);
                        } else if (cvDragOffset > 40 && cvSlideIndex > 0) {
                          setCvSlideIndex((p) => p - 1);
                        }
                        setCvDragOffset(0);
                      }
                    }}
                  >
                    {/* Horizontal Carousel Track */}
                    <div
                      className="flex w-full h-full"
                      style={{
                        transform: `translateX(calc(-${cvSlideIndex * 100}% + ${cvDragOffset}px))`,
                        transition: isCvDragging ? "none" : "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
                        willChange: "transform",
                      }}
                    >
                      {CV_SLIDES.map((pageSrc, idx) => {
                        const isCurrent = idx === cvSlideIndex;
                        const currentScale = isCurrent ? cvScale : 1;
                        const currentX = isCurrent ? cvTranslate.x : 0;
                        const currentY = isCurrent ? cvTranslate.y : 0;
                        return (
                          <div
                            key={pageSrc}
                            className="w-full h-full shrink-0 relative overflow-hidden bg-white flex items-center justify-center"
                            onDoubleClick={() => {
                              if (cvScale > 1.15) {
                                setCvScale(1);
                                setCvTranslate({ x: 0, y: 0 });
                              } else {
                                setCvScale(2.2);
                              }
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={pageSrc}
                              alt={`CV Rifky Septiana Rizki - Halaman ${idx + 1}`}
                              draggable={false}
                              style={{
                                transform: `translate(${currentX}px, ${currentY}px) scale(${currentScale})`,
                                transition: isCvPinching || isCvDragging ? "none" : "transform 0.25s ease-out",
                                willChange: "transform",
                              }}
                              className="w-full h-full object-contain select-none pointer-events-none"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Reset Zoom button */}
                    {cvScale > 1.15 && (
                      <button
                        type="button"
                        onClick={() => {
                          setCvScale(1);
                          setCvTranslate({ x: 0, y: 0 });
                        }}
                        className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-md z-20 cursor-pointer active:scale-95 transition-transform"
                      >
                        Reset Zoom ({Math.round(cvScale * 100)}%)
                      </button>
                    )}

                    {/* Bottom Pagination Dots (Mobile & Desktop) */}
                    <div className="flex absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md z-20">
                      {CV_SLIDES.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCvSlideIndex(dotIdx);
                          }}
                          className={`rounded-full transition-all cursor-pointer ${
                            cvSlideIndex === dotIdx
                              ? "w-4 h-1.5 bg-white"
                              : "w-1.5 h-1.5 bg-white/45 hover:bg-white/80"
                          }`}
                          aria-label={`Ke halaman ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Arrow Outside PDF (Desktop) */}
                  <button
                    type="button"
                    onClick={() => setCvSlideIndex((p) => Math.min(CV_SLIDES.length - 1, p + 1))}
                    disabled={cvSlideIndex === CV_SLIDES.length - 1}
                    className={`hidden md:flex w-10 h-10 rounded-full border items-center justify-center shadow-lg transition-all shrink-0 ${
                      cvSlideIndex < CV_SLIDES.length - 1
                        ? "bg-white/10 hover:bg-white/20 text-white border-white/20 active:scale-95 cursor-pointer"
                        : "bg-white/[0.03] text-white/20 border-white/5 cursor-not-allowed"
                    }`}
                    aria-label="Halaman CV berikutnya"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                  <span className="text-white/40 text-[11px] font-medium">Sumedang, Jawa Barat</span>
                </div>

                {/* Main Links */}
                <div className="flex flex-col gap-1">
                  {[
                    { name: "Pengalaman", icon: Clock, href: "#experience" },
                    { name: "Proyek", icon: Folder, href: "#projects" },
                    { name: "Keahlian", icon: Sparkles, href: "#expertise" },
                    { name: "Tanya Jawab", icon: HelpCircle, href: "#faq" }
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

                {/* Connect */}
                <div className="mt-4">
                  <h3 className="text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-4">Kontak</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                    {[
                      { name: 'LinkedIn', icon: LinkedinIcon, href: PORTFOLIO_DATA.profile.contact.linkedin },
                      { name: 'GitHub', icon: GithubIcon, href: PORTFOLIO_DATA.profile.contact.github },
                      { name: 'Instagram', icon: InstagramIcon, href: PORTFOLIO_DATA.profile.contact.instagram },
                      { name: 'Email', icon: Mail, href: `mailto:${PORTFOLIO_DATA.profile.contact.email}` }
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <a 
                          key={i} 
                          href={item.href} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="group flex items-center gap-3 px-4 py-3 rounded-full opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden text-white/90 hover:text-white text-sm font-medium"
                          style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                          }}
                        >
                          <Icon size={18} className="text-white/80 group-hover:text-white transition-colors" />
                          {item.name}
                        </a>
                      );
                    })}
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
            className="absolute z-20 right-[-8%] left-auto md:left-[-7%] lg:left-[9%] md:right-auto bottom-[4%] md:bottom-[-5%] lg:bottom-[-22%] w-[110%] sm:w-[60%] md:w-[50%] lg:w-[75%] h-[100%] md:h-[95%] lg:h-[130%] pointer-events-none select-none"
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
                className="w-full h-full object-contain object-right-bottom md:object-left-bottom opacity-95"
                style={{
                  maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)"
                }}
              />
            </div>
          </motion.div>

          {/* ─── GLOWING ANIMATED PARTICLE ORB (Top Left on Mobile, Behind Head on Desktop) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="absolute z-10 top-[1%] left-[-1%] md:top-[5%] md:left-[6%] lg:top-[0%] lg:left-[19%] pointer-events-none scale-[1.15] md:scale-[1.2] lg:scale-[1.7]"
          >
            <ParticleOrb />
          </motion.div>

          {/* ─── HEADLINE (center-right, vertically centered in upper half) ─── */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 top-[46%] md:top-[8%] left-[5%] md:left-auto right-auto md:right-[2%] lg:right-[3%] w-[88%] sm:w-[80%] md:max-w-[600px] lg:max-w-[750px] text-[16px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-left"
          >
            <div
              className="relative z-10"
              style={{
                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.8)) drop-shadow(0px 0px 8px rgba(200,215,225,0.25))",
              }}
            >
              <span className="inline-grid items-baseline text-left align-baseline mr-[0.26em]">
                <span
                  aria-hidden="true"
                  className="col-start-1 row-start-1 invisible pointer-events-none select-none whitespace-nowrap pr-[4px]"
                >
                  Full-Stack Developer
                </span>
                <span
                  className="col-start-1 row-start-1 whitespace-nowrap"
                  style={{
                    letterSpacing: roleIndex === 0 ? "0.032em" : "-0.02em",
                    wordSpacing: roleIndex === 0 ? "0.04em" : "0em",
                  }}
                >
                  <span
                    style={{
                      backgroundImage: "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,1) 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {typedRole}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-block w-[2px] h-[0.85em] bg-white/90 ml-[2px] align-baseline translate-y-[0.08em] animate-pulse"
                  />
                </span>
              </span>
              <span
                style={{
                  backgroundImage: "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,1) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                berfokus pada pengembangan web end-to-end dan integrasi API,{" "}
              </span>
              <span
                style={{
                  backgroundImage: "linear-gradient(110deg, rgba(200,200,200,0.9) 0%, rgba(150,150,150,0.5) 20%, rgba(200,200,200,0.8) 40%, rgba(100,100,100,0.3) 60%, rgba(180,180,180,0.7) 80%, rgba(200,200,200,0.9) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                didukung kepemimpinan aktif di lingkungan kampus dan masyarakat.
              </span>
            </div>
          </motion.h1>

          {/* ─── BOTTOM INFO BAR (Metrics) ─── */}
          <div className="absolute bottom-[22%] md:bottom-[56%] left-0 right-0 z-30 flex items-start justify-between px-5 md:px-10 gap-2 md:gap-4">
            
            {/* Metric 1 (Left) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-0.5 md:gap-1 w-1/3"
            >
              <span className="text-white font-medium text-[15px] md:text-[18px] tracking-wide">06</span>
              <span className="text-white/60 text-[10px] md:text-[12px] leading-[1.3]">
                Proyek Web &<br />
                Sistem Digital
              </span>
            </motion.div>

            {/* Metric 2 (Center) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col gap-0.5 md:gap-1 w-1/3 items-center text-center"
            >
              <span className="text-white font-medium text-[15px] md:text-[18px] tracking-wide">3,68</span>
              <span className="text-white/60 text-[10px] md:text-[12px] leading-[1.3]">
                IPK S1 Informatika<br />
                Universitas Sebelas April
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
                Tahun Pengalaman<br />
                Web & Organisasi
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
                  mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
                  WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
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
                  mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
                  WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Ctext x='51.5%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Satoshi, sans-serif' font-weight='900' font-size='130' letter-spacing='18' fill='white'%3ERIFKY%3C/text%3E%3C/svg%3E\") center bottom / 100% auto no-repeat",
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
                <text x="51.5%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="130" letterSpacing="18" fill="none" stroke="url(#glassEdgeMobile)" strokeWidth="1.5">RIFKY</text>
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
