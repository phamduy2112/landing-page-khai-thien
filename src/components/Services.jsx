import React from 'react';
import { ArrowRight, Building2, Hammer, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'tron-goi',
      num: '01',
      badge: 'Dịch Vụ Trọng Tâm',
      icon: Building2,
      title: 'Thiết Kế & Thi Công Trọn Gói',
      desc: 'Giải pháp chìa khóa trao tay từ ý tưởng phối cảnh 3D độc bản đến trực tiếp sản xuất và lắp đặt hoàn thiện.',
      tags: ['Căn hộ chung cư', 'Nhà phố & Shophouse', 'Biệt thự & Villa', 'Văn phòng sáng tạo'],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      ctaText: 'Nhận Báo Giá Trọn Gói',
      features: ['Khảo sát hiện trạng tận nơi 0đ', 'Giống 99% bản vẽ 3D đã duyệt']
    },
    {
      id: 'may-do',
      num: '02',
      badge: 'May Đo Trực Tiếp Tại Xưởng',
      icon: Hammer,
      title: 'Sản Xuất Đồ Gỗ May Đo',
      desc: 'Gia công chuẩn xác từng milimet theo kích thước thực tế tại xưởng riêng, cam kết 100% ván gỗ An Cường cao cấp.',
      tags: ['Tủ bếp Acrylic No-line', 'Tủ áo cánh kính Slim LED', 'Giường & Vách ốp lam sóng', 'Bàn ăn & Sofa may đo'],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
      ctaText: 'Đặt May Đo Theo Yêu Cầu',
      features: ['Tiết kiệm 20% - 30% giá xưởng', 'Bảo hành kết cấu 36 tháng']
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-14">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Dịch Vụ Cốt Lõi
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Giải pháp trọn gói và may đo trực tiếp tại xưởng sản xuất Khải Thiên
          </p>
        </div>

        {/* Alternating Architectural Split Showcase */}
        <div className="space-y-8 lg:space-y-12">
          {services.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-5 sm:p-7 lg:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

                  {/* Photo Column */}
                  <div className={`lg:col-span-7 relative group ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden bg-stone-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                      {/* Overlaid Badges */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-amber-400 text-xs font-bold border border-white/10">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{service.badge}</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <span className="font-bold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                          Xưởng sản xuất Khải Thiên
                        </span>
                        <span className="text-amber-300 font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                          100% Gỗ An Cường
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
                        <span>[ {service.num} ]</span>
                        <span className="w-8 h-px bg-amber-600/40" />
                        <span>{service.badge}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-pretty">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-1 border-t border-stone-100">
                      {service.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-stone-100 text-slate-700 text-xs font-medium border border-stone-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <a
                        href="#consultation"
                        className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition duration-200 shadow group"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
