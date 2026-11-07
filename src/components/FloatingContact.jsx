import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText, ArrowUp } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function FloatingContact() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Bar - Đáy màn hình */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 md:hidden shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Nút Gọi Ngay */}
          <a
            href={`tel:${brandInfo.hotline1.replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-amber-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition whitespace-nowrap"
          >
            <Phone className="w-4 h-4 mb-0.5 animate-bounce" />
            <span>Gọi Ngay</span>
          </a>

          {/* Nút Chat Zalo */}
          <a
            href={brandInfo.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-blue-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>Chat Zalo</span>
          </a>

          {/* Nút Báo Giá */}
          <a
            href="#consultation"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-900 text-white font-bold text-[11px] shadow-sm active:scale-95 transition whitespace-nowrap"
          >
            <FileText className="w-4 h-4 mb-0.5" />
            <span>Báo Giá 3D</span>
          </a>
        </div>
      </div>

      {/* Floating Buttons on Desktop (Right Side) */}
      <div className="hidden md:flex fixed right-5 bottom-8 z-40 flex-col items-end gap-3">
        {/* Nút Zalo Desktop */}
        <a
          href={brandInfo.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-bold hidden group-hover:inline transition-all duration-200">
            Chat Zalo (Mr. Tín)
          </span>
        </a>

        {/* Nút Hotline Desktop */}
        <a
          href={`tel:${brandInfo.hotline1.replace(/\s+/g, '')}`}
          className="group flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-2.5 px-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="text-xs font-bold">
            {brandInfo.hotline1}
          </span>
        </a>

        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Cuộn lên đầu trang"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}

