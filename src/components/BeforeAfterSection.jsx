import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, SlidersHorizontal, Columns2, Building2, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewType, setViewType] = useState('slider');
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const projects = [

    {
      id: 'goldview-2pn-pk',
      type: 'before-after',
      title: 'The GoldView - Cải Tạo Phòng Khách',
      area: '110m²',
      style: 'Hiện Đại - Sang Trọng & Cá Tính',
      render3D: '../assets/before_phong_khach.png',
      reality: '../assets/after_phong_khach.png',
      desc: 'Lột xác không gian phòng khách từ hiện trạng cũ xuống cấp thành không gian sống hiện đại và sang trọng. Nổi bật với hệ vách tivi tông xám đen, tủ trưng bày cánh kính tích hợp LED âm, sofa màu kem, bàn trà vân đá và hệ đèn ray âm trần tinh tế. Thiết kế tận dụng ánh sáng tự nhiên từ ban công, mang đến không gian sống thông thoáng, tiện nghi và đậm dấu ấn cá nhân.'
    },
    {
      id: 'vista-verde-bep',
      type: 'before-after',
      title: 'Vista Verde - Phòng Bếp & Bàn Ăn',
      area: 'Cải tạo căn hộ 110m²',
      style: 'Japandi - Mộc Mạc & Tinh Tế',
      render3D: '../assets/before1.png',
      reality: '../assets/after1.png',
      desc: 'Cải tạo không gian phòng khách - bếp liên thông với hệ tủ bếp vân gỗ may đo, đảo bếp tiện nghi, bàn ăn kết hợp ghế xanh lá và trần uốn cong mềm mại. Sự kết hợp giữa sàn gỗ, gạch terrazzo và ánh sáng vàng tạo nên không gian sống ấm cúng, tinh tế và tối ưu công năng.'
    },
    {
      id: 'vista-verde-bep-3d',
      type: 'design-after',
      title: 'Vista Verde - Phòng Bếp & Bàn Ăn (3D)',
      area: 'Căn hộ 110m²',
      style: 'Japandi - Mộc Mạc & Tinh Tế',
      render3D: '../assets/thietket3d1.png',
      reality: '../assets/after2.png',
      desc: 'Đối chiếu phối cảnh 3D và không gian bếp hoàn thiện với hệ tủ vân gỗ may đo, đảo bếp, bàn ăn và các đường cong mềm mại, tạo nên không gian ấm cúng và tiện nghi.'
    },
    {
      id: 'cai-tao-nha-pho-quan-4',
      type: 'before-after',
      title: 'Nhà Phố Quận 4 - Cải Tạo Phòng Khách & Bếp',
      area: 'Nhà phố 2 tầng',
      style: 'Wabi-Sabi - Hiện Đại & Tinh Tế',
      render3D: '../assets/before3.png',
      reality: '../assets/after3.webp',
      desc: 'Cải tạo nhà phố cũ xuống cấp tại Quận 4 với giải pháp không gian mở kết nối phòng khách, bếp và bàn ăn. Thiết kế mang tinh thần Wabi-Sabi với gam màu trắng kem chủ đạo, đường nét bo cong mềm mại, hệ tủ bếp kịch trần và điểm nhấn inox vàng bóng sang trọng. Khải Thiên Furnishing hướng đến không gian sống thông thoáng, tinh tế và tối ưu công năng.'
    },
    {
      id: 'goldview-phong-khach-3d',
      type: 'design-after',
      title: 'The GoldView - Phòng Khách',
      area: 'Không gian phòng khách',
      style: 'Hiện Đại - Sang Trọng & Cá Tính',
      render3D: '../assets/design4.png',
      reality: '../assets/after4.png',
      desc: 'Không gian phòng khách hiện đại nổi bật với hệ vách tivi tông xám đen, tủ trưng bày cánh kính tích hợp LED âm, bàn trà vân đá sang trọng và hệ đèn trần tinh tế. Từ phối cảnh 3D đến thực tế thi công, Khải Thiên Furnishing chú trọng sự đồng bộ về màu sắc, vật liệu và công năng sử dụng.'
    },


    {
      id: 'phong-ngu-be-gai-pham-van-chi',
      type: 'design-after',
      title: 'Phòng Ngủ Bé Gái 8 Tuổi - Nhà Phố Phạm Văn Chí',
      area: 'Đang cập nhật',
      style: 'Hiện Đại - Tươi Sáng & Đáng Yêu',
      render3D: '../assets/90.webp',
      reality: '../assets/91.webp',
      desc: 'Không gian phòng ngủ bé gái 8 tuổi nổi bật với gam màu cam đào và trắng kem nhẹ nhàng. Thiết kế sử dụng các đường bo cong, chi tiết hình vòm mềm mại, kết hợp giường ngủ tích hợp ngăn kéo, bàn học, kệ sách và hệ tủ lưu trữ cao sát trần. Từ hiện trạng ban đầu đến thực tế hoàn thiện, Khải Thiên Furnishing mang đến một không gian tươi sáng, tiện nghi, phù hợp với sở thích của bé và có thể sử dụng lâu dài khi bé lớn lên.'
    },
    {
      id: 'cai-tao-phong-khach-vista-verde',
      type: 'before-after',
      title: 'Vista Verde - Cải Tạo Phòng Khách',
      area: 'Căn hộ 110m²',
      style: 'Japandi - Mộc Mạc & Tinh Tế',
      render3D: '../assets/before5.png',
      reality: '../assets/after5.png',
      desc: 'Dự án cải tạo nội thất căn hộ Vista Verde, Quận 2, từ hiện trạng cũ thành không gian sống tinh tế mang phong cách Japandi. Phòng khách nổi bật với sofa da nâu caramel, vách kính khung bo cong, sàn gỗ tông trầm, vách tivi sơn hiệu ứng kết hợp hệ tủ treo tối giản. Hệ đèn LED hắt trần cùng ánh sáng tự nhiên từ ban công mang đến không gian sống thông thoáng, ấm cúng và tiện nghi.'
    },
  ];

  const current = projects[activeProjectIdx];
  const isDesign = current.type === 'design-after';
  const leftLabel = isDesign ? 'Thiết Kế 3D' : 'Trước Thi Công';
  const rightLabel = 'Sau Thi Công';

  const handlePrev = () => {
    setSliderPosition(50);
    setActiveProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSliderPosition(50);
    setActiveProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

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
    <section id="before-after" className="py-20 bg-[#FAF8F5] text-slate-800 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Từ Thiết Kế Đến Thực Tế – Sự Thay Đổi Không Gian
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Khám phá sự thay đổi trước và sau thi công hoặc đối chiếu thiết kế 3D với công trình hoàn thiện.
          </p>
        </div>

        {/* Controls: Next / Prev Project Selector & View Type Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">

          {/* Next / Prev Project Selector */}
          <div className="flex items-center justify-between sm:justify-start gap-1.5 sm:gap-3 bg-white p-1 sm:p-1.5 rounded-2xl border border-stone-200 shadow-xs w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Dự án trước"
              className="p-1.5 sm:p-2.5 rounded-xl hover:bg-slate-900 hover:text-white text-slate-700 transition cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Current Project Title (Luôn 1 dòng) */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-2 min-w-0 flex-1 sm:flex-initial">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-900 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap truncate max-w-[150px] xs:max-w-[200px] sm:max-w-xs">
                {current.title}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 whitespace-nowrap shrink-0">
                ({activeProjectIdx + 1}/{projects.length})
              </span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Dự án tiếp theo"
              className="p-1.5 sm:p-2.5 rounded-xl hover:bg-slate-900 hover:text-white text-slate-700 transition cursor-pointer shrink-0"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* View Type Toggle */}
          <div className="inline-flex items-center justify-center bg-white p-1 rounded-xl border border-stone-200 shadow-xs w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewType('slider')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 py-1.5 px-3 sm:px-3.5 rounded-lg text-xs font-bold transition cursor-pointer ${viewType === 'slider' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Thanh Trượt</span>
            </button>
            <button
              type="button"
              onClick={() => setViewType('sideBySide')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 py-1.5 px-3 sm:px-3.5 rounded-lg text-xs font-bold transition cursor-pointer ${viewType === 'sideBySide' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'
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
                alt={rightLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Layer 2: 3D Render (Clipped on top) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.render3D}
                  alt={leftLabel}
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

                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-stone-900 text-white shadow-2xl border-2 border-white flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                  <span className="text-xs font-black tracking-tighter">◄ ►</span>
                </div>
              </div>

              {/* Badges on image - Tách biệt rõ ràng, không bao giờ đè lên nhau */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 pointer-events-none">
                <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-black/90 backdrop-blur-md border border-white/10 text-white shadow">
                  {leftLabel}
                </span>
              </div>

              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 pointer-events-none">
                <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-600/95 backdrop-blur-md text-white shadow flex items-center gap-1 sm:gap-1.5">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{rightLabel}</span>
                </span>
              </div>

              {/* Bottom Drag Helper */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] text-white font-medium pointer-events-none">
                ↔ Kéo thanh trượt qua trái / phải để đối chiếu
              </div>
            </div>

            {/* Project Info Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                  <h4 className="text-base font-bold text-slate-900 whitespace-nowrap truncate">
                    {current.title}
                  </h4>
                  <span className="text-xs bg-stone-200 text-stone-900 border border-stone-300 px-2 py-0.5 rounded font-semibold whitespace-nowrap shrink-0">
                    {current.style} • {current.area}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  {current.desc}
                </p>
              </div>

              <a
                href="#consultation"
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-stone-900 text-white text-xs font-bold transition shadow shrink-0"
              >
                <span>Tư Vấn Cải Tạo Căn Hộ</span>
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
                    alt={leftLabel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                    {leftLabel}
                  </div>
                </div>
                <p className="text-center text-xs text-slate-600 font-medium">{isDesign ? 'Bản phối cảnh thiết kế 3D' : 'Hiện trạng trước khi thi công'}</p>
              </div>

              {/* Reality Card */}
              <div className="space-y-2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-stone-900/70 h-[320px] sm:h-[400px] bg-stone-100 group shadow-xl">
                  <img
                    src={current.reality}
                    alt={rightLabel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{rightLabel}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-md text-white text-xs font-bold">
                    Trực tiếp từ xưởng Khải Thiên
                  </div>
                </div>
                <p className="text-center text-xs text-stone-900 font-semibold">Công trình hoàn thiện – {current.title}</p>
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
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-stone-900 text-white text-xs font-bold transition shadow shrink-0"
              >
                <span>Nhận Báo Giá Tương Tự</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}