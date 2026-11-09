import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function Hero() {
  return (
    <section className="relative bg-[#FAF8F5] pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-stone-200/70">
      {/* Background subtle luxury ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-stone-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Cột trái: Văn bản định vị tinh gọn */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Badge */}


            {/* H1 Luxury Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-[0.015em] leading-[1.35] text-balance space-y-1.5 sm:space-y-2">
              <span className="block">Kiến Tạo Không Gian Sống</span>
              <span className="block italic font-normal text-amber-700">Đẳng Cấp Chuẩn Gu</span>
              <span className="block">Giá Gốc Tại Xưởng Sản Xuất</span>
            </h1>

            {/* Subtitle - 1 câu cô đọng */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal text-pretty">
              Thiết kế độc bản, thi công chuẩn 3D 99% từ 100% ván gỗ An Cường chính hãng với giá gốc tại xưởng.
            </p>

            {/* 4 Cam kết ngắn gọn */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium max-w-lg">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Giá gốc tại xưởng (-30%)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Miễn 100% phí thiết kế 3D</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Gỗ An Cường E1</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Bảo hành kết cấu 36 tháng</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation"
                className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-amber-600 text-white font-bold py-3.5 px-7 rounded-xl shadow-lg transition-all duration-200 text-sm group"
              >
                <span>Nhận Báo Giá 3D</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-stone-50 text-slate-800 font-bold py-3.5 px-6 rounded-xl border border-stone-300 shadow-xs transition text-sm whitespace-nowrap"
              >
                <span>Xem Dự Án Thực Tế</span>
              </a>
            </div>

            {/* Cam kết nhanh */}
            <p className="text-xs text-stone-500 pt-0.5">
              ● Khảo sát hiện trạng và tư vấn vật liệu tận nơi 0đ tại TP.HCM
            </p>
          </div>

          {/* Cột phải: Hình ảnh dự án thực tế */}
          <div className="lg:col-span-5 relative">
            <div className="relative">

              {/* Main Feature Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                  alt="Không gian nội thất phòng khách Khải Thiên Furnishing"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Bàn giao thực tế</p>
                    <h4 className="text-sm font-bold text-white">Penthouse The River Thủ Thiêm</h4>
                  </div>
                  <span className="text-[11px] bg-amber-500 text-slate-950 font-extrabold px-2 py-0.5 rounded-md">
                    Chuẩn 3D 99%
                  </span>
                </div>
              </div>

              {/* Floating Badge - Xưởng */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold border border-amber-200 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-left pr-1 whitespace-nowrap">
                  <p className="text-xs font-extrabold text-slate-900">Xưởng Trực Tiếp</p>
                  <p className="text-[10px] text-amber-700 font-semibold">Tiết kiệm 30%</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
