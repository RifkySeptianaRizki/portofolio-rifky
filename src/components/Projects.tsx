"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from "lucide-react";

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
  if (normalized.includes("vite")) return "vite";
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
  if (normalized.includes("ai") || normalized.includes("ocr")) return "openai";
  if (normalized.includes("analytics")) return "googleanalytics";
  if (normalized.includes("responsive")) return "html5";
  if (normalized.includes("rbac")) return "auth0";
  if (normalized.includes("financial") || normalized.includes("ledger")) return "stripe";
  if (normalized.includes("css")) return "css";
  return null;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);

  const openProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveSlideIndex(0);
    setSlideDirection(1);
  };

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const nextSlide = useCallback(() => {
    if (!selectedProject) return;
    setSlideDirection(1);
    setActiveSlideIndex((prev) => (prev + 1) % selectedProject.slides.length);
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (!selectedProject) return;
    setSlideDirection(-1);
    setActiveSlideIndex((prev) =>
      prev === 0 ? selectedProject.slides.length - 1 : prev - 1
    );
  }, [selectedProject]);

  const isModalOpen = Boolean(selectedProject);

  // Lock background page scroll strictly while modal is open & prevent scroll chaining on Mobile/Desktop
  useEffect(() => {
    if (!isModalOpen) return;

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevHtmlOverscroll = html.style.overscrollBehavior;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyOverscroll = body.style.overscrollBehavior;

    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

    let touchStartY = 0;
    let touchStartX = 0;

    const getActiveScrollContainer = () => {
      return window.innerWidth < 768
        ? mobileScrollRef.current
        : desktopScrollRef.current;
    };

    const handleWindowScroll = () => {
      if (window.scrollY !== scrollY) {
        window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const scrollEl = getActiveScrollContainer();
      const target = e.target as Node | null;

      if (!scrollEl || !target || !scrollEl.contains(target)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const isScrollable = scrollHeight > clientHeight;
      const isAtTop = e.deltaY < 0 && scrollTop <= 0;
      const isAtBottom =
        e.deltaY > 0 && Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (!isScrollable || isAtTop || isAtBottom) {
        e.preventDefault();
      }
      e.stopPropagation();
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const deltaY = touchStartY - currentY; // > 0 means scrolling down
      const deltaX = Math.abs(touchStartX - currentX);

      touchStartY = currentY;
      touchStartX = currentX;

      // Allow horizontal swipes for slide carousel
      if (deltaX > Math.abs(deltaY)) {
        return;
      }

      const scrollEl = getActiveScrollContainer();
      const target = e.target as Node | null;

      if (!scrollEl || !target || !scrollEl.contains(target)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const isScrollable = scrollHeight > clientHeight;
      const isAtTop = deltaY < 0 && scrollTop <= 0;
      const isAtBottom =
        deltaY > 0 && Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (!isScrollable || isAtTop || isAtBottom) {
        e.preventDefault();
      }
      e.stopPropagation();
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);

      html.style.overflow = prevHtmlOverflow;
      html.style.overscrollBehavior = prevHtmlOverscroll;
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;

      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    };
  }, [isModalOpen]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProjectModal();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, closeProjectModal, nextSlide, prevSlide]);

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

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-8 leading-[1.1]"
            >
              <span
                style={{
                  background:
                    "linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.8))",
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
              Delivering high-impact digital solutions by pushing the boundaries
              of modern engineering, intuitive design, and scalable
              architecture.
            </motion.p>
          </div>

          {/* Projects Grid: 2 columns on mobile (4 initial), 3 columns on desktop (3 initial) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 md:gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => {
              if (!showAllProjects && idx >= 4) {
                return null;
              }

              return (
                <motion.div
                  key={project.id}
                  onClick={() => openProjectModal(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openProjectModal(project);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Buka slide ${project.title}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: (idx % 3) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] aspect-[4/5] p-0 transition-all duration-500 hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 shadow-[0_10px_35px_rgba(0,0,0,0.5)]",
                    !showAllProjects && idx === 3 && "lg:hidden",
                    cardStyles[idx % cardStyles.length]
                  )}
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.15), 0 10px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Clean Cover Image */}
                  <motion.img
                    src={project.cover}
                    alt={`${project.title} Cover`}
                    className="w-full h-full object-cover select-none"
                    initial={{ scale: 1.06 }}
                    whileHover={{ scale: 1.09 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Lihat Selengkapnya / Lebih Sedikit Button */}
          {PORTFOLIO_DATA.projects.length > 2 && (
            <div className="mt-10 md:mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="group inline-flex items-center gap-2.5 px-6 py-3 md:px-7 md:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white/90 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-white/30 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.4)] active:scale-95 cursor-pointer"
              >
                <span>
                  {showAllProjects ? "Tampilkan Lebih Sedikit" : "Lihat Selengkapnya"}
                </span>
                {showAllProjects ? (
                  <ChevronUp className="w-4 h-4 text-white/70 group-hover:text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Responsive Project Modal (Desktop Split View & Mobile View) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeProjectModal}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm md:p-6 overscroll-contain touch-none"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            {/* Desktop Floating Close Button (Top Right of Backdrop) */}
            <button
              onClick={closeProjectModal}
              className="hidden md:flex fixed top-5 right-6 z-[210] text-white hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Tutup modal"
              title="Tutup (Esc)"
            >
              <X className="w-7 h-7 stroke-[2]" />
            </button>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-[100dvh] max-h-[100dvh] md:w-auto md:h-[88vh] md:max-h-[820px] md:max-w-[95vw] bg-[#121212] md:border md:border-white/15 md:rounded-3xl shadow-[0_25px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* ============================================================
                  MOBILE ONLY: Pinned Top Navigation Bar
                 ============================================================ */}
              <div className="flex md:hidden items-center justify-between px-4 py-3 border-b border-white/10 bg-[#121212] shrink-0 z-30">
                <button
                  onClick={closeProjectModal}
                  className="p-1 -ml-1 text-white active:opacity-70 cursor-pointer"
                  aria-label="Kembali"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-sm font-semibold text-white tracking-tight">
                  Detail Project
                </span>
                <div className="w-6" />
              </div>

              {/* ============================================================
                  MOBILE SCROLL CONTAINER / DESKTOP FLEX ROW WRAPPER
                 ============================================================ */}
              <div
                ref={mobileScrollRef}
                className="flex-1 min-h-0 w-full overflow-y-auto overscroll-contain touch-pan-y flex flex-col md:flex-row md:w-auto md:h-full md:overflow-hidden"
              >
                {/* Mobile Project Title & Workplace Header (Centered) */}
                <div className="flex md:hidden flex-col items-center text-center px-4 py-3 bg-[#121212] border-b border-white/10 shrink-0">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {selectedProject.title}
                  </h4>
                  <span className="text-xs text-white/60 mt-0.5">
                    {selectedProject.subtitle || selectedProject.role}
                  </span>
                </div>

                {/* ============================================================
                    LEFT PANEL (Desktop) / IMAGE CAROUSEL (Mobile & Desktop)
                    Padded wrapper + rounded-3xl inner image container
                   ============================================================ */}
                <div className="w-full md:w-auto md:h-full p-4 sm:p-5 md:p-5 bg-[#121212] flex items-center justify-center shrink-0">
                  <div className="relative w-full md:w-auto md:h-full aspect-[4/5] rounded-3xl bg-black overflow-hidden flex items-center justify-center select-none border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <AnimatePresence mode="wait" custom={slideDirection}>
                      <motion.img
                        key={activeSlideIndex}
                        src={selectedProject.slides[activeSlideIndex]}
                        alt={`${selectedProject.title} - Slide ${activeSlideIndex + 1}`}
                        custom={slideDirection}
                        variants={{
                          enter: (direction: number) => ({
                            x: direction > 0 ? 60 : -60,
                            opacity: 0,
                            scale: 1.06,
                          }),
                          center: {
                            x: 0,
                            opacity: 1,
                            scale: 1.06,
                          },
                          exit: (direction: number) => ({
                            x: direction > 0 ? -60 : 60,
                            opacity: 0,
                            scale: 1.06,
                          }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        drag="x"
                        dragDirectionLock
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -50) nextSlide();
                          else if (info.offset.x > 50) prevSlide();
                        }}
                        style={{ touchAction: "pan-y" }}
                        className="w-full h-full object-cover cursor-grab active:cursor-grabbing touch-pan-y"
                      />
                    </AnimatePresence>

                    {/* Mobile Only: Top-right slide counter pill (e.g., 1/5) */}
                    <div className="md:hidden absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-white tracking-wide shadow-md z-20 pointer-events-none">
                      {activeSlideIndex + 1}/{selectedProject.slides.length}
                    </div>

                    {/* Left Arrow (Hidden on mobile, visible on desktop) */}
                    {activeSlideIndex > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-black items-center justify-center shadow-md transition-all active:scale-95 z-20 cursor-pointer"
                        aria-label="Slide sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    )}

                    {/* Right Arrow (Hidden on mobile, visible on desktop) */}
                    {activeSlideIndex < selectedProject.slides.length - 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-black items-center justify-center shadow-md transition-all active:scale-95 z-20 cursor-pointer"
                        aria-label="Slide berikutnya"
                      >
                        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    )}

                    {/* Bottom Pagination Dots (Hidden on mobile, visible on desktop) */}
                    <div className="hidden md:flex absolute bottom-3.5 left-1/2 -translate-x-1/2 items-center gap-1.5 z-20">
                      {selectedProject.slides.map((_, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSlideDirection(sIdx >= activeSlideIndex ? 1 : -1);
                            setActiveSlideIndex(sIdx);
                          }}
                          className={cn(
                            "rounded-full transition-all cursor-pointer shadow-sm",
                            activeSlideIndex === sIdx
                              ? "w-1.5 h-1.5 bg-white scale-110"
                              : "w-1.5 h-1.5 bg-white/45 hover:bg-white/75"
                          )}
                          aria-label={`Ke slide ${sIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* ============================================================
                    RIGHT PANEL (Desktop Sidebar) / BOTTOM CONTENT (Mobile)
                   ============================================================ */}
                <div className="flex flex-col bg-[#121212] md:w-[360px] lg:w-[405px] md:h-full md:min-h-0 md:border-l md:border-white/10 shrink-0">
                  {/* Desktop Top Header: Project Name & Workplace Centered */}
                  <div className="hidden md:flex flex-col items-center text-center px-5 py-4 border-b border-white/10 shrink-0">
                    <h4 className="text-[15px] font-bold text-white leading-snug">
                      {selectedProject.title}
                    </h4>
                    <span className="text-xs text-white/60 mt-1">
                      {selectedProject.subtitle || selectedProject.role}
                    </span>
                  </div>

                  {/* Scrollable Description, Highlights & Tech Stack Icons */}
                  <div
                    ref={desktopScrollRef}
                    className="md:flex-1 md:min-h-0 md:overflow-y-auto overscroll-contain px-5 py-4 pb-10 md:py-5"
                  >
                    <div className="text-xs md:text-[13px] leading-[1.6] text-white/90 space-y-3 text-justify">
                      <p className="text-white/90 leading-relaxed">
                        {selectedProject.description}
                      </p>

                      {selectedProject.highlights && (
                        <div className="space-y-1.5 text-white/85 pt-1">
                          {selectedProject.highlights.map((item, i) => (
                            <p key={i}>• {item}</p>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Icons Row */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5 text-left">
                        {selectedProject.stack.map((tech) => {
                          const slug = getTechIconSlug(tech);
                          return (
                            <div
                              key={tech}
                              title={tech}
                              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 flex items-center justify-center transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                            >
                              {slug ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  src={`https://cdn.simpleicons.org/${slug}/white`}
                                  alt={tech}
                                  className="w-4 h-4 opacity-85"
                                />
                              ) : (
                                <span className="text-[10px] font-bold text-white/80">
                                  {tech.slice(0, 2).toUpperCase()}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-1 text-[11px] text-white/40 text-left">
                        {selectedProject.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
