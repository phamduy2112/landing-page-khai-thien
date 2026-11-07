import React, { useState } from 'react';
import { Sparkles, Eye, CheckCircle, ArrowLeftRight } from 'lucide-react';
import { beforeAfterProjects } from '../data/landingData';

export default function BeforeAfterSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [viewMode, setViewMode] = useState('reality'); // 'render3d' | 'reality' | 'split'

  const currentProject = beforeAfterProjects[activeProjectIdx];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Minh Chứng Thực Tế Cam Kết 99%</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance">
            Từ Phối Cảnh 3D Đến Hiện Thực Bàn&nbsp;Giao
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-pretty">
            Khải Thiên tự tin cam kết sản phẩm thực tế giống đến 99% bản vẽ thiết kế 3D. Hãy so sánh và cảm nhận độ hoàn thiện tinh&nbsp;xảo:
          </p>
        </div>

        {/* Project Selector & View Mode Switcher */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
          {/* Project Tabs */}
          <div className="flex flex-wrap gap-2">
            {beforeAfterProjects.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveProjectIdx(idx)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                  activeProjectIdx === idx
                    ? 'bg-amber-500 text-slate-950 shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-800/90 p-1.5 rounded-xl border border-slate-700">
            <button
              type="button"
              onClick={() => setViewMode('reality')}
              className={`py-1.5 px-3.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                viewMode === 'reality'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Thực Tế Bàn Giao
            </button>
            <button
              type="button"
              onClick={() => setViewMode('render3d')}
              className={`py-1.5 px-3.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                viewMode === 'render3d'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bản Vẽ 3D Duyệt
            </button>
            <button
              type="button"
              onClick={() => setViewMode('split')}
              className={`py-1.5 px-3.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                viewMode === 'split'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Xem Song Song
            </button>
          </div>
        </div>

        {/* Comparison Viewer */}
        <div className="mt-8">
          {viewMode === 'split' ? (
            /* Split View Side-by-Side */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-[340px] sm:h-[420px]">
                  <img
                    src={currentProject.render3d || currentProject.render3D}
                    alt="Bản vẽ phối cảnh 3D"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Phối Cảnh 3D Đã Duyệt
                  </div>
                </div>
                <p className="text-xs text-slate-400 text-center">Bản thiết kế mặt bằng & góc nhìn phối cảnh 3D ban đầu</p>
              </div>

              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-2xl h-[340px] sm:h-[420px]">
                  <img
                    src={currentProject.reality}
                    alt="Thực tế bàn giao công trình"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Thực Tế Nghiệm Thu Bàn Giao
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md text-amber-300 text-[11px] font-bold">
                    Khớp 99% Tỉ Lệ & Vật Liệu
                  </div>
                </div>
                <p className="text-xs text-amber-300 text-center font-semibold">Công trình thi công trực tiếp bởi thợ xưởng Khải Thiên</p>
              </div>
            </div>
          ) : (
            /* Single Image Focused with Toggle Indicator */
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl h-[420px] sm:h-[520px] bg-slate-950">
              <img
                src={viewMode === 'reality' ? currentProject.reality : (currentProject.render3d || currentProject.render3D)}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-lg backdrop-blur-md ${
                  viewMode === 'reality'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-amber-500 text-slate-950'
                }`}>
                  {viewMode === 'reality' ? '✓ Ảnh Chụp Thực Tế Bàn Giao' : '🎨 Bản Vẽ Phối Cảnh 3D Duyệt'}
                </span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white ">{currentProject.title}</h4>
                  <p className="text-xs text-slate-300">{currentProject.desc}</p>
                  <p className="text-[11px] text-amber-400 font-semibold">
                    Quy mô: {currentProject.area} • Phong cách: {currentProject.style}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setViewMode(viewMode === 'reality' ? 'render3d' : 'reality')}
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition shrink-0 whitespace-nowrap"
                >
                  <ArrowLeftRight className="w-4 h-4 shrink-0" />
                  <span>Chuyển Sang Xem {viewMode === 'reality' ? 'Bản Vẽ 3D' : 'Thực Tế'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

