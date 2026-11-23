import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';

const galleryData = [
  {
    id: 1,
    title: 'Phòng Khách Căn Hộ Alnata Celadon City',
    category: 'living',
    categoryLabel: 'Phòng Khách',
    image: '/assets/g3 (1).webp',
    location: 'Tân Phú, TP.HCM',
    highlight: 'Hệ lam gỗ đứng & sofa cam đất ấm áp phong cách Wabi-Sabi',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2'
  },
  {
    id: 2,
    title: 'Hệ Bếp & Bàn Ăn Căn Hộ Hậu Giang',
    category: 'kitchen',
    categoryLabel: 'Phòng Bếp',
    image: '/assets/12.webp',
    location: 'Đường Hậu Giang, TP.HCM',
    highlight: 'Tủ bếp kịch trần Acrylic bóng gương kết hợp mặt đá Vicostone',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    id: 3,
    title: 'Phòng Ngủ Master Vinhomes Grand Park',
    category: 'bedroom',
    categoryLabel: 'Phòng Ngủ',
    image: '/assets/vinhome-2.webp',
    location: 'TP. Thủ Đức, TP.HCM',
    highlight: 'Giường bục thông minh kết hợp hệ tủ cánh kính đèn LED sang trọng',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    id: 4,
    title: 'Biệt Thự Đơn Lập Bình Tân',
    category: 'villa',
    categoryLabel: 'Biệt Thự',
    image: '/assets/17.webp',
    location: 'Bình Tân, TP.HCM',
    highlight: 'Không gian liên thông sang trọng với đá Calacatta và vách than tre',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-2'
  },
  {
    id: 5,
    title: 'Góc Thư Giãn Nhà Phố CMT8',
    category: 'living',
    categoryLabel: 'Phòng Khách',
    image: '/assets/22.webp',
    location: 'Quận 10, TP.HCM',
    highlight: 'Tông trắng White Wabi-Sabi với đường nét bo tròn mềm mại',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    id: 6,
    title: 'Bàn Ăn & Đảo Bếp Căn Hộ Vinhomes',
    category: 'kitchen',
    categoryLabel: 'Phòng Bếp',
    image: '/assets/vinhome-1.webp',
    location: 'Vinhomes Grand Park',
    highlight: 'Mảng tường sơn hiệu ứng cashmere cam đất làm điểm nhấn cá tính',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    id: 7,
    title: 'Phòng Ngủ Phụ & Bàn Học Căn Hộ Hậu Giang',
    category: 'bedroom',
    categoryLabel: 'Phòng Ngủ',
    image: '/assets/14.webp',
    location: 'TP.HCM',
    highlight: 'Tối ưu từng mét vuông công năng với gỗ An Cường chuẩn E1',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    id: 8,
    title: 'Khu Vực Bếp Đảo Biệt Thự Cao Cấp',
    category: 'villa',
    categoryLabel: 'Biệt Thự',
    image: '/assets/19.webp',
    location: 'Bình Tân, TP.HCM',
    highlight: 'Đảo bếp kết hợp quầy bar hiện đại chuẩn Suite 5 sao',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1'
  }
];

export default function HomeGallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Không Gian' },
    { id: 'living', label: 'Phòng Khách' },
    { id: 'kitchen', label: 'Bếp & Phòng Ăn' },
    { id: 'bedroom', label: 'Phòng Ngủ' },
    { id: 'villa', label: 'Biệt Thự Cao Cấp' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="home-gallery" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/10 text-stone-900 text-xs font-bold border border-stone-900/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bộ Sưu Tập Không Gian Thực Tế</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Khám Phá Toàn Cảnh <span className="text-stone-900">Không Gian Sống</span>
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Từng góc nhà được Khải Thiên thiết kế và may đo trực tiếp tại xưởng sản xuất, đem lại vẻ đẹp sang trọng, chuẩn gu và tinh tế đến từng chi tiết.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-lg shadow-amber-500/20'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[260px]">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-stone-900/60 transition-all duration-500 shadow-md hover:shadow-2xl flex flex-col justify-between ${
                activeCategory === 'all' && item.colSpan ? item.colSpan : ''
              } ${activeCategory === 'all' && item.rowSpan ? item.rowSpan : ''}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Multi-layered Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent group-hover:from-stone-950/98 transition-colors" />

              {/* Top Meta: Badge & Quick View */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-stone-900 border border-stone-900/30">
                  {item.categoryLabel}
                </span>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-stone-900 text-white shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-4 sm:p-5 space-y-1.5">
                <div className="flex items-center gap-1 text-[11px] text-stone-900 font-medium">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-stone-900 transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800"
            onClick={e => e.stopPropagation()}
          >
            {/* Image Frame */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full max-h-[70vh] object-contain mx-auto"
              />

              {/* Navigation Arrows */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 hover:text-white transition cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 hover:text-white transition cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Info Footer */}
            <div className="p-5 sm:p-6 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-stone-500">•</span>
                  <span className="text-xs text-stone-400">{selectedItem.location}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">{selectedItem.title}</h4>
                <p className="text-xs text-stone-300 mt-1">{selectedItem.highlight}</p>
              </div>

              <a
                href="#consultation"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-200 text-stone-950 text-xs sm:text-sm font-bold transition shadow whitespace-nowrap self-start sm:self-auto"
              >
                Tư Vấn Thiết Kế Không Gian Này
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
