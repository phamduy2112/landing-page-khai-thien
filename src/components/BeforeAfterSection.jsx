import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, SlidersHorizontal, Columns2, Building2 } from 'lucide-react';

export default function BeforeAfterSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewType, setViewType] = useState('slider');
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const projects = [
    {
      id: 'masteri',
      title: 'Căn Hộ Masteri Centre Point (3PN)',
      area: '110m²',
      style: 'Modern Luxury',
      render3D: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      reality: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      desc: 'Chuẩn xác từng milimet từ vân gỗ An Cường, hệ tủ kịch trần đến dải LED hắt âm vách.'
    },
    {
      id: 'cityland',
      title: 'Nhà Phố Liền Kề Cityland Park Hills',
      area: '180m²',
      style: 'Hiện Đại Tối Giản',
      render3D: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      reality: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      desc: 'Không gian phòng khách - bếp liền mạch, bề mặt ván chống ẩm lõi xanh hoàn thiện sắc nét.'
    }
  ];

  const current = projects[activeProjectIdx];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 bg-[#F7F5F0] text-slate-800 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Bản Vẽ 3D vs Thực Tế Bàn Giao
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Kéo thanh trượt hoặc chuyển chế độ để so sánh độ chuẩn xác từng chi tiết
          </p>
        </div>

        {/* Controls: Project Tabs & View Type Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
          {/* Project Tabs */}
          <div className="flex flex-wrap gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveProjectIdx(idx)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${activeProjectIdx === idx
                    ? 'bg-slate-900 text-amber-400 shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-stone-200 hover:bg-stone-50'
                  }`}
              >
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>{p.title}</span>
              </button>
            ))}
          </div>

          {/* View Type Toggle */}
          <div className="inline-flex items-center bg-white p-1 rounded-xl border border-stone-200 shadow-xs shrink-0">
            <button
              type="button"
              onClick={() => setViewType('slider')}
              className={`flex items-center gap-1.5 py-1.5 px-3.5 rounded-lg text-xs font-bold transition cursor-pointer ${viewType === 'slider' ? 'bg-slate-900 text-amber-400 shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Thanh Trượt</span>
            </button>
            <button
              type="button"
              onClick={() => setViewType('sideBySide')}
              className={`flex items-center gap-1.5 py-1.5 px-3.5 rounded-lg text-xs font-bold transition cursor-pointer ${viewType === 'sideBySide' ? 'bg-slate-900 text-amber-400 shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>Đặt Cạnh Nhau</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: INTERACTIVE DRAGGABLE BEFORE/AFTER SLIDER */}
        {viewType === 'slider' ? (
          <div className="space-y-4">
            <div
              ref={containerRef}
              onMouseDown={() => { isDragging.current = true; }}
              onMouseUp={() => { isDragging.current = false; }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-stone-300/80 cursor-ew-resize select-none bg-stone-100"
            >
              {/* Layer 1: Real Handover (Underneath) */}
              <img
                src={current.reality}
                alt="Thực tế bàn giao"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Layer 2: 3D Render (Clipped on top) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.render3D}
                  alt="Phối cảnh 3D"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                />
              </div>

              {/* Divider Line & Slider Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] -translate-x-1/2" />

                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-amber-600 text-white shadow-2xl border-2 border-white flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                  <span className="text-xs font-black tracking-tighter">◄ ►</span>
                </div>
              </div>

              {/* Badges on image */}
              <div className="absolute top-5 left-5 z-10 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900/90 backdrop-blur-md border border-white/10 text-amber-400 shadow">
                  🎨 3D Phối Cảnh Duyệt
                </span>
              </div>

              <div className="absolute top-5 right-5 z-10 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600/95 backdrop-blur-md text-white shadow flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thực Tế Nghiệm Thu (99%)</span>
                </span>
              </div>

              {/* Bottom Drag Helper */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] text-white font-medium pointer-events-none">
                ↔ Kéo thanh trượt qua trái / phải để đối chiếu
              </div>
            </div>

            {/* Project Info Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>{current.title}</span>
                  <span className="text-xs bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-semibold">
                    {current.style} • {current.area}
                  </span>
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {current.desc}
                </p>
              </div>

              <a
                href="#consultation"
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold transition shadow shrink-0"
              >
                <span>Nhận Báo Giá 3D Tương Tự</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          /* VIEW 2: SIDE-BY-SIDE COMPARISON */
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 3D Render Card */}
              <div className="space-y-2">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 h-[320px] sm:h-[400px] bg-stone-100 group shadow-md">
                  <img
                    src={current.render3D}
                    alt="Bản vẽ 3D phối cảnh"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    🎨 Phối Cảnh 3D Đã Duyệt
                  </div>
                </div>
                <p className="text-center text-xs text-slate-600 font-medium">Bản thiết kế mặt bằng & góc nhìn phối cảnh 3D ban đầu</p>
              </div>

              {/* Reality Card */}
              <div className="space-y-2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-600/70 h-[320px] sm:h-[400px] bg-stone-100 group shadow-xl">
                  <img
                    src={current.reality}
                    alt="Thực tế bàn giao"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Thực Tế Nghiệm Thu (Khớp 99%)</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-md text-amber-400 text-xs font-bold">
                    100% Gỗ An Cường
                  </div>
                </div>
                <p className="text-center text-xs text-amber-800 font-semibold">Công trình thi công thực tế bởi thợ xưởng Khải Thiên</p>
              </div>
            </div>

            {/* Bottom Project Info Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-slate-900">{current.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{current.desc}</p>
              </div>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold transition shadow shrink-0"
              >
                <span>Nhận Báo Giá 3D Tương Tự</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
