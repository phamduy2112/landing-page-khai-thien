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
      id: 'goldview-pk',
      title: 'The GoldView - Phòng Khách',
      area: 'Cải tạo phòng khách - bếp',
      style: 'Hiện Đại - Tối Ưu',
      render3D: '../assets/Phong_khach_TRUOC.png',
      reality: '../assets/Phong_khach_SAU.png',
      desc: 'Tối ưu sảnh vào tủ giày sát trần, quầy bar mini chia không gian bếp và hệ tủ trang trí cánh kính âm LED sang trọng.'
    },
    {
      id: 'goldview-pn',
      title: 'The GoldView - Phòng Ngủ',
      area: 'Phòng ngủ Master',
      style: 'Ấm Cúng - Tinh Tế',
      render3D: '../assets/Phong_ngu_TRUOC.png',
      reality: '../assets/Phong_ngu_SAU.png',
      desc: 'Giường ngủ bục thông minh kết hợp hệ tủ quần áo cánh kính kịch trần, tối ưu tối đa diện tích lưu trữ và ánh sáng ấm cúng.'
    },
    {
      id: 'goldview-2pn-pk',
      title: 'The GoldView 2PN - Khách Bếp',
      area: '110m²',
      style: 'Độc Bản Nam Tính',
      render3D: '../assets/Phong_khach_truoc_01.jpg',
      reality: '../assets/Phong_khach_sau_01.webp',
      desc: 'Cải tạo trọn gói căn hộ cũ xuống cấp: Ốp vách than tre kết hợp cửa giấu khuôn, hệ tủ bếp song song đảo bếp tích hợp phụ kiện inox.'
    },

    {
      id: 'nha-pho-pham-van-chi',
      title: 'Nhà Phố Phạm Văn Chí - 3 Phòng Ngủ, 3 Cá Tính',
      area: 'Đang cập nhật',
      style: 'Hiện Đại - Tối Ưu Công Năng',
      render3D: '../assets/88.webp',
      reality: '../assets/89.webp',
      desc: 'Dự án thiết kế và thi công nội thất nhà phố Phạm Văn Chí với 3 phòng ngủ mang 3 phong cách riêng biệt. Khải Thiên Furnishing chú trọng tối ưu không gian lưu trữ, kết hợp hài hòa giữa thẩm mỹ, công năng và nhu cầu sử dụng của từng thành viên. Từ bản vẽ 3D đến thực tế hoàn thiện, mỗi chi tiết đều được chăm chút để tạo nên không gian sống tiện nghi, tinh tế và đồng bộ.'
    },
    {
      id: 'phong-ngu-be-gai-pham-van-chi',
      title: 'Phòng Ngủ Bé Gái 8 Tuổi - Nhà Phố Phạm Văn Chí',
      area: 'Đang cập nhật',
      style: 'Hiện Đại - Tươi Sáng & Đáng Yêu',
      render3D: '../assets/90.webp',
      reality: '../assets/91.webp',
      desc: 'Không gian phòng ngủ bé gái 8 tuổi nổi bật với gam màu cam đào và trắng kem nhẹ nhàng. Thiết kế sử dụng các đường bo cong, chi tiết hình vòm mềm mại, kết hợp giường ngủ tích hợp ngăn kéo, bàn học, kệ sách và hệ tủ lưu trữ cao sát trần. Từ hiện trạng ban đầu đến thực tế hoàn thiện, Khải Thiên Furnishing mang đến một không gian tươi sáng, tiện nghi, phù hợp với sở thích của bé và có thể sử dụng lâu dài khi bé lớn lên.'
    },
    {
      id: 'cai-tao-phong-khach-bep-goldview',
      title: 'Cải Tạo Phòng Khách & Bếp - The Goldview',
      area: '35m²',
      style: 'Hiện Đại - Sang Trọng & Tiện Nghi',
      render3D: '../assets/92.webp',
      reality: '../assets/93.jpg',
      desc: 'Dự án cải tạo phòng khách và bếp tại chung cư The Goldview Block A3, Quận 4. Từ hiện trạng nội thất cũ xuống cấp, Khải Thiên Furnishing đã kiến tạo không gian sống hiện đại với tông gỗ tối sang trọng, hệ tủ TV kết hợp vách trang trí tinh tế, sàn gỗ xương cá và hệ bếp chữ U tối ưu công năng. Sự thay đổi rõ nét giữa trước và sau thi công mang đến không gian sống tiện nghi, ấm cúng và phù hợp với nhu cầu sinh hoạt của gia đình.'
    },
  ];

  const current = projects[activeProjectIdx];

  const handlePrev = () => {
    setActiveProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
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
            Trước & Sau Thi Công – Sự Thay Đổi Không Gian
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Kéo thanh trượt hoặc chuyển chế độ để so sánh độ chuẩn xác từng chi tiết thi công từ xưởng Khải Thiên
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

                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-stone-900 text-white shadow-2xl border-2 border-white flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                  <span className="text-xs font-black tracking-tighter">◄ ►</span>
                </div>
              </div>

              {/* Badges on image - Tách biệt rõ ràng, không bao giờ đè lên nhau */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 pointer-events-none">
                <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-black/90 backdrop-blur-md border border-white/10 text-white shadow">
                  Trước Thi Công
                </span>
              </div>

              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 pointer-events-none">
                <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-600/95 backdrop-blur-md text-white shadow flex items-center gap-1 sm:gap-1.5">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Thực Tế Bàn Giao</span>
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
                    alt="Bản vẽ 3D phối cảnh"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-stone-900 text-xs font-bold uppercase tracking-wider">
                    🎨 Phối Cảnh 3D Đã Duyệt
                  </div>
                </div>
                <p className="text-center text-xs text-slate-600 font-medium">Bản thiết kế phương án cải tạo công năng 3D</p>
              </div>

              {/* Reality Card */}
              <div className="space-y-2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-stone-900/70 h-[320px] sm:h-[400px] bg-stone-100 group shadow-xl">
                  <img
                    src={current.reality}
                    alt="Thực tế bàn giao"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Thực Tế Hoàn Thiện</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-md text-stone-900 text-xs font-bold">
                    Trực tiếp từ xưởng Khải Thiên
                  </div>
                </div>
                <p className="text-center text-xs text-stone-900 font-semibold">Công trình thi công thực tế tại The GoldView Block B</p>
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