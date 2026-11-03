"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATE_GROUPS, CertificateGroup } from "@/data/certificates";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X, Award, Layers } from "lucide-react";

// Helper card styles matching Projects.tsx subtle background gradients
const certCardStyles = [
  "bg-gradient-to-br from-[rgba(28,28,28,0.35)] to-transparent",
  "bg-gradient-to-br from-[rgba(10,15,28,0.35)] to-transparent",
  "bg-gradient-to-br from-[rgba(28,26,16,0.35)] to-transparent",
  "bg-gradient-to-br from-[rgba(16,28,21,0.35)] to-transparent",
  "bg-gradient-to-br from-[rgba(28,16,28,0.35)] to-transparent",
  "bg-gradient-to-br from-[rgba(16,22,28,0.35)] to-transparent",
];

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

  // Reset zoom whenever the active certificate index changes
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
      // 2 fingers: pinch-to-zoom
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
      // Double tap to zoom toggle
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
        // Pan while zoomed
        const deltaX = e.touches[0].clientX - touchStartRef.current.x;
        const deltaY = e.touches[0].clientY - touchStartRef.current.y;
        setTranslate({
          x: touchStartRef.current.transX + deltaX,
          y: touchStartRef.current.transY + deltaY,
        });
      } else if (isDragging) {
        // 1:1 real-time drag of horizontal carousel
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
      className="relative w-full md:w-auto md:h-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[1.414/1] rounded-3xl bg-black overflow-hidden flex items-center justify-center select-none border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Horizontal Carousel Track */}
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
              className="w-full h-full shrink-0 relative overflow-hidden flex items-center justify-center p-2 sm:p-4 bg-black/60"
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
                  "max-w-full max-h-full object-contain select-none pointer-events-none transition-transform rounded-xl shadow-2xl",
                  scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                )}
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Only: Top-right counter pill (e.g. 1/27) */}
      {items.length > 1 && (
        <div className="md:hidden absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-white tracking-wide shadow-md z-20 pointer-events-none">
          {activeIndex + 1}/{items.length}
        </div>
      )}

      {/* Zoom reset pill */}
      {scale > 1.15 && (
        <button
          onClick={() => {
            setScale(1);
            setTranslate({ x: 0, y: 0 });
          }}
          className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-md z-20 cursor-pointer active:scale-95 transition-transform"
        >
          Reset Zoom ({Math.round(scale * 100)}%)
        </button>
      )}

      {/* Left Arrow (Desktop) */}
      {activeIndex > 0 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-black items-center justify-center shadow-lg transition-all active:scale-95 z-20 cursor-pointer"
          aria-label="Sertifikat sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Right Arrow (Desktop) */}
      {activeIndex < items.length - 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-black items-center justify-center shadow-lg transition-all active:scale-95 z-20 cursor-pointer"
          aria-label="Sertifikat berikutnya"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Bottom Dots (Desktop) */}
      {items.length <= 15 && (
        <div className="hidden md:flex absolute bottom-3.5 left-1/2 -translate-x-1/2 items-center gap-1.5 z-20">
          {items.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange(dotIdx);
              }}
              className={cn(
                "rounded-full transition-all cursor-pointer shadow-sm",
                activeIndex === dotIdx
                  ? "w-1.5 h-1.5 bg-white scale-125"
                  : "w-1.5 h-1.5 bg-white/45 hover:bg-white/75"
              )}
              aria-label={`Ke sertifikat ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Certificates() {
  const [selectedGroup, setSelectedGroup] = useState<CertificateGroup | null>(null);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);

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

  // Background page scroll lock (matches Projects.tsx)
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
      const deltaY = touchStartY - currentY;
      const deltaX = Math.abs(touchStartX - currentX);

      touchStartY = currentY;
      touchStartX = currentX;

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

  // Keyboard navigation
  useEffect(() => {
    if (!selectedGroup) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeGroupModal();
      } else if (e.key === "ArrowRight") {
        nextCert();
      } else if (e.key === "ArrowLeft") {
        prevCert();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedGroup, closeGroupModal, nextCert, prevCert]);

  const activeItem = selectedGroup ? selectedGroup.items[activeCertIndex] : null;

  return (
    <div className="p-2 md:p-3">
      <section
        id="certificates"
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
                Pelatihan & Sertifikasi.
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
              Dokumentasi pelatihan teknologi, sertifikasi kesiapan kerja, serta bukti keterlibatan aktif dalam kepemimpinan organisasi kampus dan kegiatan masyarakat.
            </motion.p>
          </div>

          {/* Certificates Grid: Proportional Compact Preview (Snug fit without excess height), 2 columns on Mobile, 3 columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 md:gap-8">
            {CERTIFICATE_GROUPS.map((group, idx) => (
              <motion.div
                key={group.id}
                onClick={() => openGroupModal(group)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openGroupModal(group);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Buka sertifikat ${group.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] aspect-[1.08/1] p-2.5 sm:p-3.5 md:p-4 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 shadow-[0_10px_35px_rgba(0,0,0,0.5)]",
                  certCardStyles[idx % certCardStyles.length]
                )}
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "inset 0 1px 1px rgba(255,255,255,0.15), 0 10px 40px rgba(0,0,0,0.4)",
                }}
              >
                {/* Top Badge: Category + Item Count */}
                <div className="flex items-center justify-between gap-1.5 z-10">
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/50 truncate">
                    {group.category}
                  </span>
                  {group.itemsCount > 1 && (
                    <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[8px] sm:text-[10px] font-semibold text-white shadow-sm shrink-0">
                      <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/70" />
                      <span>{group.itemsCount}</span>
                    </div>
                  )}
                </div>

                {/* Center: Full Uncropped Certificate Thumbnail */}
                <div className="flex-1 w-full my-1 sm:my-1.5 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center p-0.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={group.cover}
                      alt={group.title}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain rounded-md sm:rounded-lg md:rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.7)] border border-white/10 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Bottom: Title & Issuer */}
                <div className="z-10 pt-1.5 border-t border-white/10">
                  <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-white/95 group-hover:text-white line-clamp-1 leading-snug">
                    {group.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/40 shrink-0" />
                    <span className="text-[9px] sm:text-[11px] text-white/55 truncate">
                      {group.issuer}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Certificate Modal (Design Identical to Projects Modal) */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeGroupModal}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm md:p-6 overscroll-contain touch-none"
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
                  onClick={closeGroupModal}
                  className="p-1 -ml-1 text-white active:opacity-70 cursor-pointer"
                  aria-label="Kembali"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-sm font-semibold text-white tracking-tight">
                  Detail Sertifikat
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
                {/* Mobile Certificate Title & Organization Header (Centered) */}
                <div className="flex md:hidden flex-col items-center text-center px-4 py-3 bg-[#121212] border-b border-white/10 shrink-0">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {selectedGroup.title}
                  </h4>
                  <span className="text-xs text-white/60 mt-0.5">
                    {selectedGroup.issuer}
                  </span>
                </div>

                {/* ============================================================
                    LEFT PANEL (Desktop) / CERTIFICATE CAROUSEL (Mobile & Desktop)
                   ============================================================ */}
                <div className="w-full md:w-auto md:h-full p-4 sm:p-5 md:p-5 bg-[#121212] flex items-center justify-center shrink-0">
                  <CertificateCarousel
                    items={selectedGroup.items}
                    activeIndex={activeCertIndex}
                    onIndexChange={setActiveCertIndex}
                    onNext={nextCert}
                    onPrev={prevCert}
                  />
                </div>

                {/* ============================================================
                    RIGHT PANEL (Desktop Sidebar) / BOTTOM CONTENT (Mobile)
                   ============================================================ */}
                <div className="flex flex-col bg-[#121212] md:w-[360px] lg:w-[405px] md:h-full md:min-h-0 md:border-l md:border-white/10 shrink-0">
                  {/* Desktop Top Header: Title & Organization Centered */}
                  <div className="hidden md:flex flex-col items-center text-center px-5 py-4 border-b border-white/10 shrink-0">
                    <h4 className="text-[15px] font-bold text-white leading-snug">
                      {selectedGroup.title}
                    </h4>
                    <span className="text-xs text-white/60 mt-1">
                      {selectedGroup.issuer}
                    </span>
                  </div>

                  {/* Scrollable Description, Year & Fast Thumbnail Strip */}
                  <div
                    ref={desktopScrollRef}
                    className="md:flex-1 md:min-h-0 md:overflow-y-auto overscroll-contain px-5 py-4 pb-10 md:py-5"
                  >
                    <div className="text-xs md:text-[13px] leading-[1.6] text-white/90 space-y-3.5 text-justify">
                      {/* Active Certificate Heading */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400">
                            {selectedGroup.category}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                            {activeItem?.year || "Verified"}
                          </span>
                        </div>
                        <h5 className="text-sm md:text-base font-bold text-white leading-snug text-left">
                          {activeItem?.title}
                        </h5>
                        <p className="text-[11px] text-white/50 text-left mt-0.5">
                          {activeItem?.issuer}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-white/85 leading-relaxed pt-2 border-t border-white/10">
                        {activeItem?.description}
                      </p>

                      {/* Fast Switcher Thumbnail Strip for Multiple Certificates */}
                      {selectedGroup.items.length > 1 && (
                        <div className="pt-3 border-t border-white/10 text-left">
                          <span className="text-[11px] font-semibold text-white/60 block mb-2">
                            Pilih Sertifikat ({activeCertIndex + 1} dari {selectedGroup.items.length}):
                          </span>
                          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                            {selectedGroup.items.map((item, thumbIdx) => (
                              <button
                                key={thumbIdx}
                                type="button"
                                onClick={() => setActiveCertIndex(thumbIdx)}
                                className={cn(
                                  "relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer shadow-sm",
                                  activeCertIndex === thumbIdx
                                    ? "border-white ring-2 ring-white/60 scale-105"
                                    : "border-white/20 opacity-50 hover:opacity-85"
                                )}
                                aria-label={`Lihat sertifikat ${thumbIdx + 1}`}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={item.image}
                                  alt=""
                                  loading="lazy"
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="pt-2 text-[11px] text-white/40 text-left">
                        Total {selectedGroup.items.length} sertifikat terverifikasi dalam grup ini.
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
