import React, { useState } from 'react';
import { Camera, MapPin, Clock, ArrowRight, Sparkles, Layers, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import { portfolioData, brandInfo } from '../data/landingData';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(portfolioData[0].id);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxProject, setLightboxProject] = useState(null);

  // Filter projects by category
  const filteredProjects = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeCategory);

  // Active featured project
  const featuredProject = portfolioData.find(p => p.id === selectedProjectId) || portfolioData[0];

  const categories = [
    { id: 'all', label: 'Tất Cả Dự Án' },
    { id: 'can-ho', label: 'Căn Hộ Chung Cư' },
    { id: 'nha-pho', label: 'Nhà Phố Hiện Đại' },
    { id: 'biet-thu', label: 'Biệt Thự & Villa' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#FCFBF9] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial Architecture */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 shrink-0" />
              <span>Lookbook Công Trình Thực Tế</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance">
              Dự Án Bàn Giao Tiêu&nbsp;Biểu
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-pretty">
              Mỗi căn nhà là một tác phẩm mang đậm phong cách sống của gia chủ. Cùng khám phá không gian thực tế được thi công trực tiếp bởi đội thợ xưởng Khải&nbsp;Thiên.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstOfCat = cat.id === 'all' 
                    ? portfolioData[0] 
                    : portfolioData.find(p => p.category === cat.id);
                  if (firstOfCat) {
                    setSelectedProjectId(firstOfCat.id);
                    setActiveGalleryIndex(0);
                  }
                }}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* LAYOUT MỚI 1: CÔNG TRÌNH TIÊU BIỂU DẠNG LOOKBOOK TẠP CHÍ KIẾN TRÚC */}
        <div className="mt-12 bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Visual Box (Ảnh lớn + Thumbnails góc nhìn) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[360px] sm:h-[460px] bg-slate-950 group">
                <img
                  src={featuredProject.gallery ? featuredProject.gallery[activeGalleryIndex] : featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Hoàn thiện: {featuredProject.timeline}</span>
                </div>

                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                  Quy mô: {featuredProject.area}
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">Góc nhìn chi tiết</span>
                    <p className="text-sm font-semibold text-white">Góc chụp không gian thực tế bàn giao</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxProject(featuredProject)}
                    className="text-xs bg-white/20 hover:bg-white text-white hover:text-slate-950 py-1.5 px-3 rounded-lg font-bold transition"
                  >
                    Xem Album Toàn Cảnh
                  </button>
                </div>
              </div>

              {/* Thumbnails of this project */}
              {featuredProject.gallery && (
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 shrink-0">Các góc chụp:</span>
                  <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {featuredProject.gallery.map((imgUrl, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveGalleryIndex(i)}
                        className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                          activeGalleryIndex === i
                            ? 'border-amber-600 ring-2 ring-amber-200'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={imgUrl} alt="Thumbnail góc chụp" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Thông tin kiến trúc & Bóc tách bám sát công trình */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-700 font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{featuredProject.location}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 ">
                  {featuredProject.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {featuredProject.subtitle || "Không gian được thiết kế và thi công trực tiếp bởi Khải Thiên Furnishing, tối ưu hóa công năng và thẩm mỹ."}
                </p>
              </div>

              {/* Thông số kỹ thuật */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-stone-500 font-medium">Phong cách thiết kế:</span>
                    <strong className="text-slate-900">{featuredProject.style}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 font-medium">Thời gian thi công:</span>
                    <strong className="text-amber-700">{featuredProject.timeline}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 font-medium">Diện tích sàn:</span>
                    <strong className="text-slate-900">{featuredProject.area}</strong>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/70 text-xs text-slate-700 space-y-1">
                  <strong className="text-amber-900 font-bold block">Vật liệu cam kết chính hãng:</strong>
                  <p>{featuredProject.material}</p>
                </div>

                {featuredProject.highlights && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Hạng mục hoàn thiện tiêu biểu:</span>
                    {featuredProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Nút Nhận Báo Giá Dự Án */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#consultation"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs sm:text-sm font-bold transition duration-200 shadow whitespace-nowrap"
                >
                  <span>Nhận Báo Giá Dự Án Tương&nbsp;Tự</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href={`tel:${brandInfo.hotline1.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold transition whitespace-nowrap"
                >
                  Tư vấn: {brandInfo.hotline1}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* LAYOUT MỚI 2: DANH SÁCH CÁC CÔNG TRÌNH DẠNG ARCHITECTURAL STRIP (KHÔNG BỌC THẺ THÔ CỨNG) */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-base font-extrabold uppercase tracking-wider text-slate-900 ">
              Danh Mục Các Công Trình Đã Bàn Giao
            </h4>
            <span className="text-xs text-stone-500">
              Nhấp vào công trình để xem chi tiết
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => {
              const isSelected = selectedProjectId === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProjectId(project.id);
                    setActiveGalleryIndex(0);
                    // Smooth scroll slightly up to featured view if clicked from mobile
                    if (window.innerWidth < 768) {
                      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 p-2.5 ${
                    isSelected
                      ? 'bg-amber-50/80 border-2 border-amber-600 shadow-md'
                      : 'bg-white border border-stone-200/80 hover:border-amber-400 hover:shadow-lg'
                  }`}
                >
                  {/* Clean Framed Photo */}
                  <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-xs">
                      {project.area}
                    </div>
                  </div>

                  {/* Clean Architectural Caption (Không khối hộp nặng nề) */}
                  <div className="pt-3 px-1 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-700 font-semibold">
                      <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                      <span className="truncate">{project.location.split(',')[project.location.split(',').length - 1]}</span>
                    </div>

                    <h5 className="font-bold text-sm text-slate-900 group-hover:text-amber-600 transition truncate">
                      {project.title}
                    </h5>

                    <p className="text-xs text-stone-500 truncate">
                      {project.style}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-600">
                      <span>{isSelected ? 'Đang hiển thị' : 'Xem chi tiết'}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lightbox Modal (Khi người dùng muốn xem toàn cảnh) */}
        {lightboxProject && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
              <button
                type="button"
                onClick={() => setLightboxProject(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-stone-100 text-slate-700 hover:bg-slate-900 hover:text-white flex items-center justify-center transition"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">{lightboxProject.categoryName}</span>
                <h3 className="text-2xl font-extrabold text-slate-900">{lightboxProject.title}</h3>
                <p className="text-xs text-stone-500">{lightboxProject.location} • {lightboxProject.area} • {lightboxProject.timeline}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {lightboxProject.gallery ? (
                    lightboxProject.gallery.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden h-60 bg-slate-100">
                        <img src={img} alt="Hình ảnh công trình" className="w-full h-full object-cover" />
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl overflow-hidden h-60 bg-slate-100">
                      <img src={lightboxProject.image} alt="Hình ảnh công trình" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-200 flex justify-end gap-3">
                  <a
                    href="#consultation"
                    onClick={() => setLightboxProject(null)}
                    className="py-2.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition"
                  >
                    Đăng Ký Tư Vấn Dự Án Này
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
