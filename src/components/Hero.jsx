import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2, Play, Award, Compass } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function Hero() {
  return (
    <section className="relative bg-[#FCFBF9] pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-stone-200/70">
      {/* Architectural grid background & subtle luxury ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-stone-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Tagline */}


        {/* Main Grid: Headline Left / Architectural Gallery Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Cột trái: Văn bản định vị sang trọng */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Architectural Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Thiết Kế Độc Bản & Thi Công Chuẩn 3D&nbsp;99%</span>
            </div>

            {/* H1 Luxury Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-[0.015em] leading-[1] sm:leading-[1] lg:leading-[1] text-balance space-y-1.5 sm:space-y-2.5">
              <span className="block">Kiến Tạo Không Gian&nbsp;Sống</span>
              <span className="block italic font-normal text-amber-700">Đẳng Cấp Chuẩn&nbsp;Gu</span>
              <span className="block">Giá Gốc Tại Xưởng Sản&nbsp;Xuất</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal text-pretty">
              <strong className="text-slate-900 font-semibold">{brandInfo.name}</strong> tự hào đồng hành cùng các gia chủ kiến tạo tổ ấm độc bản. Sở hữu xưởng sản xuất trực tiếp không qua trung gian, cam kết 100% ván gỗ An&nbsp;Cường cao cấp, thi công chuẩn xác 99% bản vẽ 3D và không phát sinh chi&nbsp;phí.
            </p>

            {/* 4 Trust Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Tiết kiệm 20% - 30% chi phí trung&nbsp;gian</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Miễn phí 100% chi phí thiết kế&nbsp;3D</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Vật liệu An Cường chuẩn&nbsp;E1</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Bảo hành kết cấu 36 tháng tận&nbsp;nơi</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation"
                className="inline-flex justify-center items-center gap-2.5 bg-slate-900 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base group"
              >
                <span className="whitespace-nowrap">Đăng Ký Tư Vấn & Nhận Dự Toán 3D</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="#room-experience"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-stone-50 text-slate-800 font-bold py-4 px-6 rounded-xl border border-stone-300 shadow-xs hover:border-stone-400 transition text-sm sm:text-base whitespace-nowrap"
              >
                <span>Khám Phá Phòng Mẫu</span>
              </a>
            </div>

            {/* Micro commitment */}
            <div className="text-xs text-stone-500 flex items-center gap-2 pt-1 text-pretty">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Khảo sát hiện trạng và tư vấn vật liệu trực tiếp tại TP.HCM trong&nbsp;24h</span>
            </div>
          </div>

          {/* Cột phải: Editorial Collage Gallery (Nâng tầm độ sang trọng) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">

              {/* Main Feature Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                  alt="Không gian nội thất phòng khách Khải Thiên Furnishing"
                  className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">Dự án bàn giao thực tế</p>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">Penthouse The River Thủ Thiêm</h4>
                    </div>
                    <span className="text-xs bg-amber-500 text-slate-950 font-extrabold px-2.5 py-1 rounded-md">
                      Chuẩn 3D 99%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">Gỗ An Cường chống ẩm, đá cẩm thạch Vicostone & da bò nhập khẩu Ý</p>
                </div>
              </div>

              {/* Floating Architectural Badge - Xưởng sản xuất trực tiếp */}
              <div className="absolute -top-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold border border-amber-200 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-left pr-2 whitespace-nowrap">
                  <p className="text-xs font-extrabold text-slate-900 leading-tight">Xưởng Trực Tiếp</p>
                  <p className="text-[10px] text-amber-700 font-semibold">Giá gốc tận xưởng</p>
                </div>
              </div>

              {/* Floating Architectural Badge 2 - Cam kết giống 3D 99% */}
              <div className="absolute -bottom-6 -right-4 bg-white p-3.5 rounded-2xl shadow-2xl border border-stone-200 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-sm shrink-0">
                  99%
                </div>
                <div className="text-left pr-2 whitespace-nowrap">
                  <p className="text-xs font-extrabold text-slate-900 leading-tight">Khớp Phối Cảnh 3D</p>
                  <p className="text-[10px] text-slate-500">Tỉ mỉ từng milimet</p>
                </div>
              </div>

            </div>
          </div>

        </div>



      </div>
    </section>
  );
}
