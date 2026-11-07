import React from 'react';
import { CheckCircle2, ArrowRight, Layers, Sparkles, Building2, Hammer } from 'lucide-react';
import { servicesData } from '../data/landingData';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Năng Lực Cốt Lõi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance">
            Giải Pháp Thiết Kế & Thi Công Chuyên Sâu
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-pretty">
            Khải Thiên Furnishing trực tiếp đảm nhận toàn bộ quy trình từ ý tưởng sơ phác đến gia công may đo từng chi tiết nội thất tại xưởng&nbsp;riêng.
          </p>
        </div>

        {/* 2 Main Services: Horizontal Alternating Architectural Presentation */}
        <div className="mt-16 space-y-12">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className="bg-[#FCFBF9] rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative group ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-[320px] sm:h-[400px] bg-slate-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Badge on photo */}
                      <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-amber-400 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                        {service.id === 'tron-goi' ? <Building2 className="w-4 h-4" /> : <Hammer className="w-4 h-4" />}
                        <span>{service.badge}</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-xs border border-white/10">
                        <span className="text-amber-400 font-bold block">Cam kết tại xưởng Khải Thiên:</span>
                        <span className="text-slate-300">100% Gỗ An Cường • Bảo hành kết cấu 36 tháng</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                        [ DỊCH VỤ 0{idx + 1} ]
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-balance">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-pretty">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                        Hạng mục thế mạnh chính:
                      </span>
                      <div className="space-y-2.5">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <span className="text-pretty">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#consultation"
                        className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow group whitespace-nowrap"
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
