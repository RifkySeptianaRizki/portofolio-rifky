"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATE_GROUPS, CertificateGroup } from "@/data/certificates";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X, Award, Layers } from "lucide-react";

interface CertificateCarouselProps {
  items: CertificateGroup["items"];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

function CertificateCarousel({
  items,
  activeIndex,
  onIndexChange,
  onNext,
  onPrev,
}: CertificateCarouselProps) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPinching, setIsPinching] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setDragOffset(0);
    setIsDragging(false);
  }, [activeIndex]);

  const touchStartRef = useRef<{
    x: number;
    y: number;
    dist: number;
    scale: number;
    transX: number;
    transY: number;
    time: number;
  }>({
    x: 0,
    y: 0,
    dist: 0,
    scale: 1,
    transX: 0,
    transY: 0,
    time: 0,
  });

  const lastTapRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      setIsPinching(true);
      setIsDragging(false);
      setDragOffset(0);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartRef.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        dist,
        scale,
        transX: translate.x,
        transY: translate.y,
        time: Date.now(),
      };
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapRef.current < 280) {
        if (scale > 1.15) {
          setScale(1);
          setTranslate({ x: 0, y: 0 });
        } else {
          setScale(2.2);
        }
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;

      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        dist: 0,
        scale,
        transX: translate.x,
        transY: translate.y,
        time: now,
      };

      if (scale <= 1.05) {
        setIsDragging(true);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / (touchStartRef.current.dist || 1);
      const newScale = Math.min(Math.max(1, touchStartRef.current.scale * factor), 4);
      setScale(newScale);

      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const deltaX = midX - touchStartRef.current.x;
      const deltaY = midY - touchStartRef.current.y;
      setTranslate({
        x: touchStartRef.current.transX + deltaX,
        y: touchStartRef.current.transY + deltaY,
      });
    } else if (e.touches.length === 1) {
      if (scale > 1.05) {
        const deltaX = e.touches[0].clientX - touchStartRef.current.x;
        const deltaY = e.touches[0].clientY - touchStartRef.current.y;
        setTranslate({
          x: touchStartRef.current.transX + deltaX,
          y: touchStartRef.current.transY + deltaY,
        });
      } else if (isDragging) {
        const deltaX = e.touches[0].clientX - touchStartRef.current.x;
        const deltaY = e.touches[0].clientY - touchStartRef.current.y;
        if (Math.abs(deltaX) > Math.abs(deltaY) || Math.abs(dragOffset) > 5) {
          setDragOffset(deltaX);
        }
      }
    }
  };

  const handleTouchEnd = () => {
    setIsPinching(false);
    if (scale < 1.1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }

    if (isDragging) {
      setIsDragging(false);
      if (dragOffset < -40 && activeIndex < items.length - 1) {
        onNext();
      } else if (dragOffset > 40 && activeIndex > 0) {
        onPrev();
      }
      setDragOffset(0);
    }
  };

  const handleDoubleClick = () => {
    if (scale > 1.15) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    } else {
      setScale(2.2);
    }
  };

  return (
    <div
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[1.414/1] rounded-2xl bg-black/90 overflow-hidden flex items-center justify-center select-none border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Carousel Track */}
      <div
        className="flex w-full h-full"
        style={{
          transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
          transition: isDragging ? "none" : "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {items.map((item, idx) => {
          const isCurrent = idx === activeIndex;
          const currentScale = isCurrent ? scale : 1;
          const currentX = isCurrent ? translate.x : 0;
          const currentY = isCurrent ? translate.y : 0;

          return (
            <div
              key={idx}
              className="w-full h-full shrink-0 relative overflow-hidden flex items-center justify-center bg-black/40"
              onDoubleClick={handleDoubleClick}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                draggable={false}
                loading={Math.abs(idx - activeIndex) <= 1 ? "eager" : "lazy"}
                style={{
                  transform: `translate(${currentX}px, ${currentY}px) scale(${currentScale})`,
                  transition: isPinching || isDragging ? "none" : "transform 0.25s ease-out",
                  willChange: "transform",
                }}
                className={cn(
                  "w-full h-full object-contain select-none pointer-events-none transition-transform",
                  scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                )}
              />
            </div>
          );
        })}
      </div>

      {/* Slide counter pill */}
      {items.length > 1 && (
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white tracking-wide shadow-md z-20 pointer-events-none">
          {activeIndex + 1} / {items.length}
        </div>
      )}

      {/* Reset Zoom Pill */}
      {scale > 1.15 && (
        <button
          onClick={() => {
            setScale(1);
            setTranslate({ x: 0, y: 0 });
          }}
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-md z-20 cursor-pointer active:scale-95"
        >
          Reset Zoom ({Math.round(scale * 100)}%)
        </button>
      )}

      {/* Left Arrow */}
      {activeIndex > 0 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center shadow-md border border-white/15 transition-all active:scale-95 z-20 cursor-pointer"
          aria-label="Sertifikat sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2]" />
        </button>
      )}

      {/* Right Arrow */}
      {activeIndex < items.length - 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center shadow-md border border-white/15 transition-all active:scale-95 z-20 cursor-pointer"
          aria-label="Sertifikat berikutnya"
        >
          <ChevronRight className="w-5 h-5 stroke-[2]" />
        </button>
      )}
    </div>
  );
}

export default function Certificates() {
  const [selectedGroup, setSelectedGroup] = useState<CertificateGroup | null>(null);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const openGroupModal = (group: CertificateGroup) => {
    setSelectedGroup(group);
    setActiveCertIndex(0);
  };

  const closeGroupModal = useCallback(() => {
    setSelectedGroup(null);
  }, []);

  const nextCert = useCallback(() => {
    if (!selectedGroup) return;
    setActiveCertIndex((prev) => (prev + 1) % selectedGroup.items.length);
  }, [selectedGroup]);

  const prevCert = useCallback(() => {
    if (!selectedGroup) return;
    setActiveCertIndex((prev) =>
      prev === 0 ? selectedGroup.items.length - 1 : prev - 1
    );
  }, [selectedGroup]);

  const isModalOpen = Boolean(selectedGroup);

  // Background scroll lock
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

    return () => {
      html.style.overflow = prevHtmlOverflow;
      html.style.overscrollBehavior = prevHtmlOverscroll;
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    };
  }, [isModalOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedGroup) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGroupModal();
      else if (e.key === "ArrowRight") nextCert();
      else if (e.key === "ArrowLeft") prevCert();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGroup, closeGroupModal, nextCert, prevCert]);

  return (
    <div className="p-2 md:p-3">
      <section
        id="certificates"
        className="relative w-full overflow-hidden bg-[#050505] rounded-[1.25rem] md:rounded-[1.75rem] flex flex-col pt-16 pb-14 md:pt-20 md:pb-18"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="noise-overlay" />

        {/* Subtle glow */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[60%] h-[30%] bg-[#ffffff] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-3.5 sm:px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-5 leading-[1.1]"
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
                Honors & certifications.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xs sm:text-sm md:text-base font-medium mx-auto text-center max-w-2xl text-white/60"
            >
              Verified credentials spanning Artificial Intelligence, Cloud Engineering, Leadership, and Public Speaking.
            </motion.p>
          </div>

          {/* 3x3 Grid on Mobile and Desktop */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
            {CERTIFICATE_GROUPS.map((group, idx) => (
              <motion.div
                key={group.id}
                onClick={() => openGroupModal(group)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openGroupModal(group);
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[1.5rem] bg-[#0c0c0c] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {/* Thumbnail Container */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black/60 overflow-hidden flex items-center justify-center border-b border-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={group.cover}
                    alt={group.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Quantity Badge */}
                  {group.itemsCount > 1 && (
                    <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[9px] sm:text-[11px] font-semibold text-white shadow-md">
                      <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/70" />
                      <span>{group.itemsCount}</span>
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-2 sm:p-3.5 md:p-4 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
                  <div>
                    <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/45 truncate block">
                      {group.category}
                    </span>
                    <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-white/90 group-hover:text-white transition-colors line-clamp-2 mt-0.5 sm:mt-1 leading-snug">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 mt-1.5 sm:mt-2.5 pt-1.5 sm:pt-2 border-t border-white/5">
                    <Award className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white/40 shrink-0" />
                    <span className="text-[8px] sm:text-[10px] md:text-xs text-white/50 truncate">
                      {group.issuer}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeGroupModal}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 md:p-8 overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-label={selectedGroup.title}
          >
            {/* Desktop Floating Close Button */}
            <button
              onClick={closeGroupModal}
              className="hidden md:flex fixed top-5 right-6 z-[210] text-white hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Tutup modal"
              title="Tutup (Esc)"
            >
              <X className="w-7 h-7 stroke-[2]" />
            </button>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] bg-[#121212] border border-white/15 rounded-2xl md:rounded-3xl shadow-[0_25px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10 bg-[#141414] shrink-0">
                <div className="flex items-center gap-2 truncate">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs sm:text-sm font-semibold text-white truncate">
                    {selectedGroup.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/50 font-medium">
                    {activeCertIndex + 1} / {selectedGroup.items.length}
                  </span>
                  <button
                    onClick={closeGroupModal}
                    className="p-1 -mr-1 text-white hover:opacity-70 cursor-pointer"
                    aria-label="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 flex flex-col gap-4">
                {/* Certificate Slide Viewer */}
                <CertificateCarousel
                  items={selectedGroup.items}
                  activeIndex={activeCertIndex}
                  onIndexChange={setActiveCertIndex}
                  onNext={nextCert}
                  onPrev={prevCert}
                />

                {/* Certificate Info Underneath */}
                <div className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                      {selectedGroup.items[activeCertIndex]?.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 shrink-0 self-start sm:self-auto">
                      {selectedGroup.items[activeCertIndex]?.year || "Verified"}
                    </span>
                  </div>

                  <span className="text-xs sm:text-sm text-white/60 font-medium">
                    Penerbit: {selectedGroup.items[activeCertIndex]?.issuer}
                  </span>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-1.5 border-t border-white/10">
                    {selectedGroup.items[activeCertIndex]?.description}
                  </p>

                  {/* Thumbnail Strip for fast switching */}
                  {selectedGroup.items.length > 1 && (
                    <div className="pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {selectedGroup.items.map((item, thumbIdx) => (
                        <button
                          key={thumbIdx}
                          onClick={() => setActiveCertIndex(thumbIdx)}
                          className={cn(
                            "relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer",
                            activeCertIndex === thumbIdx
                              ? "border-white ring-1 ring-white/50 scale-105"
                              : "border-white/20 opacity-50 hover:opacity-80"
                          )}
                          aria-label={`Lihat sertifikat ${thumbIdx + 1}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

