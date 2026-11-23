import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Building2, Play } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function Hero() {
  return (
    <section className="relative bg-[#FAF8F5] pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-stone-200/70">
      {/* Background subtle luxury ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-stone-200/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-stone-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Cột trái: Văn bản định vị tinh gọn */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* H1 Luxury Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-[0.015em] leading-[1.35] text-balance space-y-1.5 sm:space-y-2">
              <span className="">Thiết Kế & Thi Công Nội Thất</span>
              <span className=" text-stone-900 "> Trọn Gói Trực Tiếp Từ Xưởng</span>
            </h1>

            {/* Subtitle - Ngắn gọn */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal text-pretty">
              Hiện thực hóa không gian sống đẳng cấp cho nhà phố, căn hộ và biệt thự với chất lượng tối ưu từ xưởng Khải Thiên.
            </p>

            {/* 4 Cam kết ngắn gọn */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium max-w-lg">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check lucide-check-circle-2 w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg>                <span>Xưởng sản xuất trực tiếp</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check lucide-check-circle-2 w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg>                <span>Thi công trọn gói uy tín</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check lucide-check-circle-2 w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg>                <span>May đo theo yêu cầu riêng</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check lucide-check-circle-2 w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg>                <span>Bảo hành & hậu mãi chu đáo</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation"
                className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-stone-900 text-white font-bold py-3.5 px-7 rounded-xl shadow-lg transition-all duration-200 text-sm group"
              >
                <span>Nhận Tư Vấn & Báo Giá</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-stone-50 text-slate-800 font-bold py-3.5 px-6 rounded-xl border border-stone-300 shadow-xs transition text-sm whitespace-nowrap"
              >
                <span>Xem Dự Án Thực Tế</span>
              </a>
            </div>

            {/* Dòng minh chứng uy tín dưới nút bấm */}
            <div className="flex items-center gap-2 text-xs text-stone-600 pt-1">
              <span className="font-bold text-stone-900 bg-stone-200/70 px-2 py-0.5 rounded-md">10+ Năm Kinh Nghiệm</span>
              <span>● Hàng trăm công trình hoàn thiện tại TP.HCM</span>
            </div>
          </div>

          {/* Cột phải: Hình ảnh dự án thực tế */}
          <div className="lg:col-span-5 relative">
            <div className="relative">

              {/* Main Feature Image with Video Play Trigger */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="../assets/banner.webp"
                  alt="Không gian nội thất Khải Thiên Furnishing"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Pulsing Play Button Center */}
                <a
                  href="#project-videos"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-black/85 hover:bg-black text-white backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer z-10"
                >
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black shadow-md">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-white/40 opacity-75" />
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </span>
                  <div className="text-left pr-1">
                    <p className="text-[11px] font-bold text-stone-300 uppercase tracking-wider">Xem Thước Phim</p>
                    <p className="text-xs font-bold text-white">Bàn Giao Thực Tế</p>
                  </div>
                </a>

                {/* Overlaid Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-stone-300 font-bold uppercase tracking-wider">Thi công thực tế</p>
                    <h4 className="text-sm font-bold text-white">Biệt Thự, Nhà Phố & Căn Hộ</h4>
                  </div>
                  <span className="text-[11px] bg-white text-black font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                    Khải Thiên Furnishing
                  </span>
                </div>
              </div>

              {/* Floating Badge - Xưởng */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center font-bold border border-stone-300 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-left pr-1 whitespace-nowrap">
                  <p className="text-xs font-extrabold text-slate-900">Xưởng Trực Tiếp</p>
                  <p className="text-[10px] text-stone-900 font-semibold">Thi Công Trọn Gói</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}