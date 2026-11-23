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
      desc: 'Giải pháp toàn diện từ khâu khảo sát hiện trạng, lên bản vẽ 3D đến sản xuất và hoàn thiện trực tiếp cho không gian sống và kinh doanh tại TP.HCM.',
      tags: ['Biệt thự & Villa', 'Nhà phố & Căn hộ', 'Cải tạo nhà phố cũ', 'Quán Cafe & Showroom'],
      image: '../assets/g4.webp',
      ctaText: 'Nhận Tư Vấn Trọn Gói',
      features: ['Thi công thực tế chuẩn bản vẽ 3D', 'Tối ưu chi phí trực tiếp từ xưởng']
    },
    {
      id: 'may-do',
      num: '02',
      badge: 'May Đo Trực Tiếp Tại Xưởng',
      icon: Hammer,
      title: 'Sản Xuất Nội - Ngoại Thất May Đo',
      desc: 'Gia công sản xuất trực tiếp theo chuẩn kích thước và phong cách riêng (Modern, Wabi Sabi, Minimalist), sử dụng vật liệu cao cấp.',
      tags: ['Sofa & Bàn ăn', 'Hệ tủ áo & Tủ bếp', 'Giường ngủ cao cấp', 'Thi công theo bản vẽ riêng'],
      image: '../assets/g5.webp',
      ctaText: 'Đặt May Đo Theo Yêu Cầu',
      features: ['Trực tiếp sản xuất không qua trung gian', 'Bảo hành kết cấu và hậu mãi chu đáo']
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
            Giải pháp thiết kế trọn gói và sản xuất trực tiếp tại xưởng hơn 10 năm kinh nghiệm của Khải Thiên
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
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{service.badge}</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <span className="font-bold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                          Xưởng sản xuất Khải Thiên
                        </span>
                        <span className="text-white font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                          100% Gỗ An Cường
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-widest">
                        <span>[ {service.num} ]</span>
                        <span className="w-8 h-px bg-stone-900/40" />
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
                        className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-900 hover:bg-stone-900 text-white font-bold text-xs sm:text-sm transition duration-200 shadow group"
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
