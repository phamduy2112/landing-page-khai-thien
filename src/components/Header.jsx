import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Menu, X, ArrowRight, Sparkles, Home } from 'lucide-react';
import { brandInfo } from '../data/landingData';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dịch Vụ', href: '#services' },
    { name: 'Dự Án', href: '#portfolio' },
    { name: 'Xưởng Sản Xuất', href: '#factory' },
    { name: 'Cơ Sở', href: '#he-thong-co-so' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Thông tin xác thực */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#he-thong-co-so" className="flex items-center gap-1.5 hover:text-amber-400 transition whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              Showroom: {brandInfo.addressShowroom}
            </a>
            <span className="flex items-center gap-1.5 hover:text-white transition whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              Mở cửa 8h00 - 21h00 (T2 - CN)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              Cam kết giống 3D 99% • 100% Gỗ An Cường
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Tinh gọn, thanh lịch */}
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${isScrolled ? 'shadow-sm py-3 border-stone-200' : 'py-3.5 border-stone-100'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Khải Thiên */}
          <a href="#" className="flex items-center gap-3 group">
            <div className=" ">
              <img src="/assets/Logo (4).png" className='w-[170px]' />
            </div>

          </a>

          {/* Desktop Nav Links (Tóm gọn, tinh tế) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition tracking-wide whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Nút Liên Hệ Ngay */}
          <div className="hidden sm:flex items-center">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-600 text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-xl transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              <span>Liên Hệ Ngay</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#consultation"
              className="text-xs font-bold text-white bg-slate-900 py-2 px-3.5 rounded-xl shadow-sm"
            >
              Liên Hệ Ngay
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition focus:outline-none"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-3">
              <a
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow transition"
              >
                Liên Hệ Ngay
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
