import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ZoomIn } from 'lucide-react';

const craftsmanshipDetails = [
  {
    id: 1,
    title: 'Cạnh Dán Chỉ PUR No-Line Tự Động',
    category: 'Mép Ván & Cạnh Gỗ',
    image: '/assets/6.jpg',
    badge: 'Chống nước 100%',
    desc: 'Gia công trên máy dán cạnh tự động công nghệ PUR nhiệt cao cấp. Đường nối mép ván hoàn toàn không thấy đường line keo, ngăn chặn tuyệt đối nước và hơi ẩm thẩm thấu gây phù mép.',
    specs: ['Keo PUR kháng ẩm', 'Không đường viền keo (No-Line)', 'Bo góc R tự động siêu mịn']
  },
  {
    id: 2,
    title: 'Hệ Tủ Áo Cánh Kính Khung Nhôm Slim',
    category: 'Cánh Kính & Kim Loại',
    image: '/assets/after_1.1.webp',
    badge: 'Nhôm Slim Anode cao cấp',
    desc: 'Khung nhôm định hình bản nhỏ chỉ 16mm mạ Anode xám titan chống trầy, kết hợp kính cường lực màu trà/xám khói và bản lề âm sàn giảm chấn cao cấp.',
    specs: ['Kính cường lực 5mm an toàn', 'Khung viền nhôm siêu mỏng', 'Bản lề âm sàn mở 180°']
  },
  {
    id: 3,
    title: 'Đường Cắt CNC Bo Cong & Rãnh Âm Tay Nắm',
    category: 'Đường Cắt & Khắc CNC',
    image: '/assets/10.webp',
    badge: 'Chính xác 0.1mm',
    desc: 'Sử dụng trung tâm gia công CNC Nesting đa trục phay rãnh tay nắm âm liền khối chữ J, tay nắm vát 45 độ tinh xảo, bo tròn các góc tủ đầu giường bảo vệ trẻ nhỏ.',
    specs: ['Tay nắm vát chữ J liền ván', 'Góc bo cong mềm mại', 'Không lộ ốc vít bề mặt']
  },
  {
    id: 4,
    title: 'Bề Mặt Sơn 2K Inchem & Melamine An Cường',
    category: 'Vật Liệu & Hoàn Thiện',
    image: '/assets/11.webp',
    badge: 'Chuẩn khí thải E1',
    desc: 'Bề mặt ván gỗ MDF chống ẩm lõi xanh An Cường chính hãng phủ Melamine mờ chống xước hoặc sơn 2K Inchem công nghệ phòng sấy vô trùng, độ bền màu trên 10 năm.',
    specs: ['Lõi xanh chống ẩm kháng mốc', 'Sơn 2K bóng gương/mờ mịn', 'Không mùi hắc cay mắt']
  },
  {
    id: 5,
    title: 'Hệ Đèn LED Âm Tủ & Cảm Biến Chuyển Động',
    category: 'Chi Tiết Ánh Sáng',
    image: '/assets/g4.webp',
    badge: 'Ánh sáng CRI > 90',
    desc: 'Phay rãnh nhôm tản nhiệt âm sâu vào đáy đợt gỗ, chụp mica tán quang đều màu 3000K ấm cúng kèm cảm biến vẫy tay hoặc mở cánh tự động bật đèn.',
    specs: ['Máng nhôm tản nhiệt âm ván', 'Mica chống chói bảo vệ mắt', 'Cảm biến tự động thông minh']
  },
  {
    id: 6,
    title: 'Phụ Kiện Ray Trượt & Bản Lề Giảm Chấn Hafele',
    category: 'Phụ Kiện Chuyển Động',
    image: '/assets/15.webp',
    badge: 'Bảo hành 5 năm',
    desc: 'Toàn bộ liên kết sử dụng cam chốt âm Hafele không lộ đầu ốc, kết hợp ray trượt đáy hộc kéo giảm chấn chịu tải trọng 35kg êm ái tuyệt đối.',
    specs: ['Cam chốt âm thẩm mỹ', 'Ray trượt đáy chịu tải 35kg', 'Bản lề inox 304 giảm chấn']
  }
];

export default function CraftsmanshipDetailsSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất Cả Chi Tiết' },
    { id: 'Mép Ván & Cạnh Gỗ', label: 'Dán Cạnh No-Line' },
    { id: 'Cánh Kính & Kim Loại', label: 'Cánh Kính Khung Slim' },
    { id: 'Đường Cắt & Khắc CNC', label: 'Cắt CNC & Bo Góc' },
    { id: 'Vật Liệu & Hoàn Thiện', label: 'Gỗ An Cường & Sơn' },
  ];

  const filteredItems = activeCategory === 'all'
    ? craftsmanshipDetails
    : craftsmanshipDetails.filter(i => i.category === activeCategory);

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
    <section id="craftsmanship" className="py-20 bg-[#141A23] text-white relative overflow-hidden border-t border-stone-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-stone-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/15 text-stone-900 text-xs font-bold border border-stone-900/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chất Lượng Tinh Xảo Tại Xưởng Khải Thiên</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Cận Cảnh Chi Tiết <span className="text-stone-900">Đồ Gỗ May Đo</span>
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Sự khác biệt của nội thất sản xuất trực tiếp từ xưởng Khải Thiên nằm ở độ hoàn thiện tỉ mỉ từng milimet: mép ván không đường line keo, rãnh phay âm tinh gọn và phụ kiện chuyển động cao cấp.
            </p>
          </div>

          {/* Filter Pills */}
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

        {/* Details Grid (3 Cột rộng rãi, zoom cận cảnh) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-stone-900/90 rounded-2xl border border-stone-800/90 hover:border-stone-900/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              {/* Photo Container with Macro Zoom */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-stone-900 text-white shadow-md">
                    {item.badge}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute bottom-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-stone-900 text-xs font-bold border border-stone-900/30">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Xem cận cảnh</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-stone-900 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-stone-900 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-2 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Mini Specs Checkpoints */}
                <div className="pt-3 border-t border-stone-800/80 space-y-1.5">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[11px] text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-stone-900 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal: Soi chi tiết từng đường nét */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image Frame */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full max-h-[65vh] object-contain mx-auto"
              />

              {/* Prev / Next controls */}
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

            {/* Modal Specs & Description Footer */}
            <div className="p-5 sm:p-6 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <span className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
                  {selectedItem.category} • {selectedItem.badge}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {selectedItem.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {selectedItem.desc}
                </p>
              </div>

              <a
                href="#consultation"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-200 text-stone-950 text-xs sm:text-sm font-bold transition shadow whitespace-nowrap self-start sm:self-auto"
              >
                Nhận Báo Giá May Đo Chi Tiết
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

