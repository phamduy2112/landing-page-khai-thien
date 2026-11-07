import React, { useState } from 'react';
import { Palette, Sparkles, ArrowRight, Check, Compass, Eye } from 'lucide-react';
import { stylesData, brandInfo } from '../data/landingData';

export default function StylesSection() {
  const [activeStyleId, setActiveStyleId] = useState('modern');

  const activeStyle = stylesData.find(s => s.id === activeStyleId) || stylesData[0];

  return (
    <section id="styles" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Gu Thẩm Mỹ Độc Bản</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance">
            Bộ Sưu Tập Phong Cách Thiết Kế Tiêu&nbsp;Biểu
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-pretty">
            Mỗi phong cách là một ngôn ngữ biểu đạt tính cách và đẳng cấp của gia chủ. Cùng Khải Thiên khám phá chất liệu, bảng màu và linh hồn của từng trường&nbsp;phái:
          </p>
        </div>

        {/* TẦNG 1: INTERACTIVE MOODBOARD SHOWCASE (THAY THẾ LƯỚI 4 Ô ĐƠN ĐIỆU) */}
        <div className="mt-14 bg-[#FAF9F6] rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột trái: Bộ điều hướng phong cách & Bảng màu Moodboard */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* 4 Style Selector Pills */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {stylesData.map((style) => {
                  const isActive = activeStyleId === style.id;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setActiveStyleId(style.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                        isActive
                          ? 'bg-slate-900 border-slate-900 text-white shadow-lg -translate-y-0.5'
                          : 'bg-white hover:bg-stone-50 border-stone-200 text-slate-700'
                      }`}
                    >
                      <div>
                        <span className={`text-[10px] block uppercase tracking-widest ${
                          isActive ? 'text-amber-400' : 'text-stone-400'
                        }`}>
                          [ 0{style.number} ]
                        </span>
                        <strong className="text-xs sm:text-sm font-bold block mt-0.5 truncate">
                          {style.shortName}
                        </strong>
                      </div>
                      <span className={`w-2 h-2 rounded-full shrink-0 ${
                        isActive ? 'bg-amber-400' : 'bg-stone-300'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Thông tin chi tiết phong cách đang chọn */}
              <div className="space-y-4 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{activeStyle.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-balance">
                  {activeStyle.name}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-pretty">
                  {activeStyle.concept}
                </p>

                {/* Bảng Màu Đặc Trưng (Color & Material Palette Swatches) */}
                {activeStyle.palette && (
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 space-y-2.5 shadow-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block whitespace-nowrap">
                      Bảng Màu & Sắc Độ Chủ Đạo:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {activeStyle.palette.map((color, i) => (
                        <div key={i} className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-50 border border-stone-100">
                          <span
                            className="w-5 h-5 rounded-lg border border-black/10 shrink-0 shadow-2xs"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-xs font-semibold text-slate-800 truncate">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Vật liệu đặc trưng */}
                <div className="p-3.5 rounded-xl bg-stone-100/70 border border-stone-200 text-xs text-slate-700">
                  <strong className="text-slate-900 block font-bold mb-0.5">Vật liệu nhận diện tiêu biểu:</strong>
                  <span className="text-pretty">{activeStyle.materials}</span>
                </div>

                {/* Phù hợp & CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-stone-500 text-left">
                    <span className="font-semibold text-slate-800 block">Khuyên dùng cho:</span>
                    <span className="text-pretty">{activeStyle.suitable}</span>
                  </div>

                  <a
                    href="#consultation"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-md shrink-0 whitespace-nowrap"
                  >
                    <span>Tư Vấn Gu Này</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>

            </div>

            {/* Cột phải: Dual Image Architectural Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Ảnh lớn chính */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[380px] sm:h-[460px] bg-slate-950 group">
                  <img
                    src={activeStyle.image}
                    alt={activeStyle.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Title */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">Không gian thực tế</span>
                    <h4 className="text-base font-bold text-white mt-0.5">{activeStyle.name}</h4>
                    <p className="text-xs text-slate-300 mt-1">Được thiết kế và thi công giá xưởng trực tiếp bởi Khải Thiên</p>
                  </div>
                </div>

                {/* Ảnh texture cận cảnh lồng ghép (Inset Texture Thumbnail) */}
                {activeStyle.textureImage && (
                  <div className="hidden sm:block absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={activeStyle.textureImage}
                      alt="Chất liệu bề mặt"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                      <span className="text-[10px] bg-slate-900/90 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        Chất Liệu
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* TẦNG 2: DANH MỤC KHÁM PHÁ DẠNG BĂNG NGANG TINH TẾ (THAY THẾ LƯỚI Ô VUÔNG CŨ) */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500">
              Chọn nhanh phong cách để xem chi tiết bên trên:
            </h4>
            <span className="text-xs text-amber-700 font-semibold">
              4 Trường phái kiến trúc
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stylesData.map((style) => {
              const isSelected = activeStyleId === style.id;
              return (
                <div
                  key={style.id}
                  onClick={() => setActiveStyleId(style.id)}
                  className={`cursor-pointer rounded-2xl overflow-hidden p-3 transition-all duration-300 border ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-600 shadow-md ring-2 ring-amber-100'
                      : 'bg-white hover:bg-stone-50 border-stone-200 shadow-2xs hover:border-amber-300'
                  }`}
                >
                  <div className="relative h-28 sm:h-36 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-slate-900/80 text-amber-400 text-[10px] px-1.5 py-0.5 rounded font-bold">
                      0{style.number}
                    </div>
                  </div>
                  <div className="pt-2.5 px-0.5">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                      {style.shortName}
                    </h5>
                    <p className="text-[11px] text-stone-500 truncate mt-0.5">
                      {style.tag}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
