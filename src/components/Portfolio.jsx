import React, { useState, useRef, useEffect } from 'react';
import { Camera, MapPin, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/landingData';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxProject, setLightboxProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'can-ho', label: 'Căn Hộ' },
    { id: 'nha-pho', label: 'Nhà Phố' },
    { id: 'biet-thu', label: 'Biệt Thự' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeCategory);

  const checkScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollState();
    const handleResize = () => checkScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [filteredProjects]);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
                Dự Án Bàn Giao Tiêu Biểu
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Hình ảnh thực tế thi công may đo trực tiếp từ xưởng Khải Thiên
              </p>
            </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat.id);
                          if (sliderRef.current) {
                            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                          }
                        }}
                        className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat.id
                            ? 'bg-slate-900 text-stone-900 shadow'
                            : 'bg-white hover:bg-stone-100 text-slate-600 border border-stone-200'
                          }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Slider Navigation Controls */}
                  <div className="hidden sm:flex items-center gap-2 pl-2">
                    <button
                      type="button"
                onClick={() => scroll('left')}
                      disabled={!canScrollLeft}
                      aria-label="Previous project"
                      className={`p-2.5 rounded-xl border border-stone-300 transition-all cursor-pointer ${canScrollLeft
                          ? 'bg-white hover:bg-slate-900 hover:text-white text-slate-800 shadow-sm'
                          : 'bg-stone-100 text-stone-300 border-stone-200 cursor-not-allowed opacity-50'
                        }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scroll('right')}
                      disabled={!canScrollRight}
                      aria-label="Next project"
                      className={`p-2.5 rounded-xl border border-stone-300 transition-all cursor-pointer ${canScrollRight
                          ? 'bg-white hover:bg-slate-900 hover:text-white text-slate-800 shadow-sm'
                          : 'bg-stone-100 text-stone-300 border-stone-200 cursor-not-allowed opacity-50'
                        }`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
        </div>

                    {/* Projects Carousel Slider */}
                    <div className="relative group">
                      <div
                        ref={sliderRef}
                        onScroll={checkScrollState}
                        className="flex gap-5 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {filteredProjects.map((project) => (
                          <div
                            key={project.id}
                            onClick={() => {
                              setLightboxProject(project);
                              setLightboxIndex(0);
                            }}
                            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                          >
                            {/* Photo */}
                            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                                <div className="absolute bottom-2.5 right-2.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                                  <Eye className="w-3 h-3" />
                                  <span>Xem Album</span>
                                </div>
                              </div>

                              {/* Caption: Title 1 dòng chuẩn xác */}
                              <div className="p-4 space-y-1.5">
                                <div className="flex items-center gap-1 text-[11px] text-stone-900 font-semibold truncate">
                                  <MapPin className="w-3 h-3 text-stone-900 shrink-0" />
                                  <span className="truncate">{project.location.split(',').pop()?.trim()}</span>
                                </div>

                                {/* Title luôn 1 dòng */}
                                <h3
                                  title={project.title}
                                  className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-stone-900 transition truncate block leading-snug"
                                >
                                  {project.title}
                                </h3>

                                <p className="text-[11px] text-slate-500 truncate block">
                                  {project.area} • {project.style}
                                </p>
                              </div>
                            </div>
            ))}
                      </div>

                      {/* Floating Mobile/Tablet Prev-Next Floating Buttons */}
                      <div className="flex sm:hidden justify-center items-center gap-4 mt-4">
                        <button
                          type="button"
                          onClick={() => scroll('left')}
                          disabled={!canScrollLeft}
                          className={`p-2.5 rounded-full border border-stone-300 transition-all ${canScrollLeft
                              ? 'bg-white text-slate-900 shadow-md active:scale-95'
                              : 'bg-stone-100 text-stone-300 border-stone-200 opacity-50'
                            }`}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-xs text-slate-500 font-medium">Vuốt hoặc nhấn để xem tiếp</span>
                        <button
                          type="button"
                          onClick={() => scroll('right')}
                          disabled={!canScrollRight}
                          className={`p-2.5 rounded-full border border-stone-300 transition-all ${canScrollRight
                              ? 'bg-white text-slate-900 shadow-md active:scale-95'
                              : 'bg-stone-100 text-stone-300 border-stone-200 opacity-50'
                            }`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Lightbox Modal with Next/Prev Slider Controls */}
                  {lightboxProject && (
                    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
                      <button
                        type="button"
                        onClick={() => setLightboxProject(null)}
                        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
                      >
                        <X className="w-6 h-6" />
                      </button>

                      <div className="max-w-4xl w-full space-y-4">
                          <div className="relative rounded-2xl overflow-hidden max-h-[70vh] bg-black flex items-center justify-center">
                            <img
                              src={
                                lightboxProject.gallery && lightboxProject.gallery.length > 0
                                  ? lightboxProject.gallery[lightboxIndex]
                                  : lightboxProject.image
                              }
                              alt={lightboxProject.title}
                              className="w-full h-full max-h-[70vh] object-contain mx-auto"
                            />

                            {lightboxProject.gallery && lightboxProject.gallery.length > 1 && (
                              <>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((prev) =>
                                      prev === 0 ? lightboxProject.gallery.length - 1 : prev - 1
                                    );
                                  }}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-stone-900 transition cursor-pointer"
                                >
                                  <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((prev) =>
                                      prev === (lightboxProject.gallery.length - 1) ? 0 : prev + 1
                                    );
                                  }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-stone-900 transition cursor-pointer"
                                >
                                  <ChevronRight className="w-6 h-6" />
                                </button>
                              </>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-white">
                            <div>
                              <h4 className="text-base sm:text-lg font-bold">{lightboxProject.title}</h4>
                              <p className="text-xs text-slate-400">{lightboxProject.location} • {lightboxProject.area}</p>
                            </div>

                            {lightboxProject.gallery && lightboxProject.gallery.length > 1 && (
                              <div className="flex gap-2">
                                {lightboxProject.gallery.map((img, i) => (
                                  <button
                                    key={i}
                                    type="button"
                                    onClick={() => setLightboxIndex(i)}
                                    className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition cursor-pointer ${lightboxIndex === i ? 'border-stone-900' : 'border-transparent opacity-60'
                                      }`}
                                  >
                                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
      )}
                    </section>
                  );
}
