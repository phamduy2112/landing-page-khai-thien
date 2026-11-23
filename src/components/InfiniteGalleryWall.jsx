import React, { useState, useRef, useEffect } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { allGallerySpaces } from '../data/gallerySpacesData';

export default function InfiniteGalleryWall() {
  const [activeSpace, setActiveSpace] = useState(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const thumbScrollRef = useRef(null);

  // Hàng trên: Dự án từ 1 đến 8
  const row1 = allGallerySpaces.slice(0, 8);
  // Hàng dưới: Dự án từ 9 đến 18 (10 dự án)
  const row2 = allGallerySpaces.slice(8, 18);

  const handleOpenSpace = (space) => {
    setActiveSpace(space);
    setCurrentPhotoIdx(0);
  };

  const handleNextPhoto = (e) => {
    e?.stopPropagation();
    if (!activeSpace) return;
    const total = activeSpace.album.length;
    setCurrentPhotoIdx((prev) => (prev + 1) % total);
  };

  const handlePrevPhoto = (e) => {
    e?.stopPropagation();
    if (!activeSpace) return;
    const total = activeSpace.album.length;
    setCurrentPhotoIdx((prev) => (prev - 1 + total) % total);
  };

  const scrollThumbnails = (direction) => {
    if (!thumbScrollRef.current) return;
    const scrollAmount = 300;
    thumbScrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (thumbScrollRef.current && activeSpace) {
      const activeBtn = thumbScrollRef.current.children[currentPhotoIdx];
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentPhotoIdx, activeSpace]);

  return (
    <section id="gallery-wall" className="py-20 bg-[#FAF8F5] text-slate-800 relative overflow-hidden border-t border-stone-200">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">


        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
          Dấu Ấn Công Trình{" "}
          <span className="text-stone-900">Qua Hình Ảnh Thực Tế</span>
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mt-2">
          Khám phá hơn 300 hình ảnh từ 18 công trình thiết kế và thi công
          nội thất tiêu biểu của Khải Thiên Furnishing tại TP.HCM.
          Mỗi không gian là một câu chuyện về sự sáng tạo, chất lượng
          hoàn thiện và tâm huyết trong từng chi tiết.

        </p>

      </div>

      {/* 2 Rows Infinite Marquee Wall */}
      <div className="space-y-4 sm:space-y-6 relative z-10 select-none">

        {/* ROW 1: Dự án 1 -> 8 (Trôi sang trái) */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-left pause-hover flex gap-4 sm:gap-6">
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                onClick={() => handleOpenSpace(item)}
                className="group relative w-72 sm:w-88 md:w-96 h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shrink-0 cursor-pointer border border-stone-200/90 hover:border-stone-900 transition-all duration-300 shadow-sm hover:shadow-xl bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/banner.webp';
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge: Số thứ tự + Tag + Số ảnh */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-black text-white border border-stone-800 shadow-sm">
                    #{item.num < 10 ? `0${item.num}` : item.num}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-black/90 backdrop-blur-md text-white border border-stone-700">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/75 text-white border border-stone-800/80">
                    {item.album.length} ảnh
                  </span>
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-stone-900 text-white shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 space-y-1">
                  <div className="flex items-center gap-1 text-[11px] text-white font-medium">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white transition-colors truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Dự án 9 -> 18 (Trôi sang phải) */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-right pause-hover flex gap-4 sm:gap-6">
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                onClick={() => handleOpenSpace(item)}
                className="group relative w-72 sm:w-88 md:w-96 h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shrink-0 cursor-pointer border border-stone-200/90 hover:border-stone-900 transition-all duration-300 shadow-sm hover:shadow-xl bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/banner.webp';
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge: Số thứ tự + Tag + Số ảnh */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-black text-white border border-stone-800 shadow-sm">
                    #{item.num < 10 ? `0${item.num}` : item.num}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-black/90 backdrop-blur-md text-white border border-stone-700">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/75 text-white border border-stone-800/80">
                    {item.album.length} ảnh
                  </span>
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-stone-900 text-white shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 space-y-1">
                  <div className="flex items-center gap-1 text-[11px] text-white font-medium">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white transition-colors truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Album Modal: Xem Toàn Bộ Album Nhiều Ảnh Của Dự Án */}
      {activeSpace && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveSpace(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveSpace(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Main Large Image */}
            <div className="relative w-full h-[45vh] sm:h-[55vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeSpace.album[currentPhotoIdx]}
                alt={`${activeSpace.title} - Ảnh ${currentPhotoIdx + 1}`}
                className="w-full h-full max-h-[55vh] object-contain mx-auto"
              />

              {/* Prev / Next controls */}
              {activeSpace.album.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevPhoto}
                    aria-label="Previous"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-white hover:text-black transition cursor-pointer shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPhoto}
                    aria-label="Next"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-white hover:text-black transition cursor-pointer shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Counter Badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-stone-200">
                Ảnh {currentPhotoIdx + 1} / {activeSpace.album.length}
              </div>
            </div>

            {/* 2. Dải Thumbnail Toàn Bộ Ảnh Trong Dự Án (Thanh trượt mượt mà, hiện đại) */}
            {activeSpace.album.length > 1 && (
              <div className="relative px-4 sm:px-6 py-3 bg-stone-950 border-t border-stone-800">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-stone-300 font-semibold flex items-center gap-1.5">
                    <span>Album chi tiết ({activeSpace.album.length} ảnh):</span>
                    <span className="text-white font-bold">#{currentPhotoIdx + 1}</span>
                  </span>

                  {/* Nút bấm trượt nhanh trái/phải cho dải thumbnail */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => scrollThumbnails('left')}
                      className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition cursor-pointer"
                      title="Cuộn qua trái"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollThumbnails('right')}
                      className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition cursor-pointer"
                      title="Cuộn qua phải"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Container cuộn thumbnails */}
                <div
                  ref={thumbScrollRef}
                  className="flex gap-2.5 overflow-x-auto pb-2 custom-scrollbar select-none"
                >
                  {activeSpace.album.map((photo, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => setCurrentPhotoIdx(pIdx)}
                      className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${currentPhotoIdx === pIdx
                        ? 'border-white scale-105 shadow-md shadow-white/20 ring-2 ring-white/50'
                        : 'border-stone-800 opacity-60 hover:opacity-100 hover:border-stone-600'
                        }`}
                    >
                      <img
                        src={photo}
                        alt={`Ảnh ${pIdx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/75 text-[9px] font-bold text-white">
                        {pIdx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Modal Info & CTA Footer */}
            <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-black text-white border border-stone-700 uppercase tracking-wider shadow-sm">
                    #{activeSpace.num < 10 ? `0${activeSpace.num}` : activeSpace.num}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black text-white border border-stone-800 uppercase tracking-wider">
                    {activeSpace.tag}
                  </span>
                  <span className="text-stone-500">•</span>
                  <span className="text-xs text-stone-400">{activeSpace.location}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">{activeSpace.title}</h4>
                <p className="text-xs text-stone-400 mt-0.5">Phong cách thiết kế: {activeSpace.style}</p>
              </div>

              <a
                href="#consultation"
                onClick={() => setActiveSpace(null)}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-200 text-black text-xs sm:text-sm font-bold transition shadow whitespace-nowrap self-start sm:self-auto"
              >
                Nhận Báo Giá May Đo Không Gian Này
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
