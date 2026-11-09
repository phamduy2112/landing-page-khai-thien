import React from 'react';
import { ArrowRight, Building2, Hammer } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'tron-goi',
      badge: 'Dịch Vụ Trọng Tâm',
      title: 'Thiết Kế & Thi Công Trọn Gói',
      desc: 'Trọn gói từ ý tưởng 3D độc bản đến trực tiếp sản xuất và bàn giao chìa khóa trao tay.',
      tags: ['Căn hộ chung cư', 'Nhà phố & Shophouse', 'Biệt thự & Villa', 'Văn phòng sáng tạo'],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      ctaText: 'Nhận Báo Giá Trọn Gói'
    },
    {
      id: 'may-do',
      badge: 'May Đo Trực Tiếp Tại Xưởng',
      title: 'Sản Xuất Đồ Gỗ Theo Yêu Cầu',
      desc: 'Gia công may đo chuẩn kích thước thực tế tại xưởng riêng, cam kết 100% ván An Cường.',
      tags: ['Tủ bếp Acrylic / Cánh kính', 'Tủ áo kịch trần LED', 'Giường & Vách đầu giường', 'Bàn ăn & Sofa may đo'],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      ctaText: 'Đặt Gia Công May Đo'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Dịch Vụ Cốt Lõi
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Giải pháp trọn gói và may đo trực tiếp tại xưởng sản xuất Khải Thiên
          </p>
        </div>

        {/* 2 Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#FCFBF9] rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                    {service.id === 'tron-goi' ? <Building2 className="w-3.5 h-3.5" /> : <Hammer className="w-3.5 h-3.5" />}
                    <span>{service.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-stone-100 text-slate-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href="#consultation"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition duration-200 shadow"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
