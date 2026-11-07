import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Clock, Award, Hammer } from 'lucide-react';
import { commitmentsData } from '../data/landingData';

export default function WhyChooseUs() {
  const iconMap = {
    Factory: Building2,
    CheckCircle2: CheckCircle2,
    ShieldCheck: ShieldCheck,
    Clock: Clock
  };

  return (
    <section id="commitments" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>Lý Do Khách Hàng Tin&nbsp;Chọn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance ">
            4 Cam Kết Vàng Từ Khải Thiên Furnishing
          </h2>
          <p className="text-slate-300 text-base leading-relaxed text-pretty">
            Chúng tôi hiểu nội thất là tài sản lâu dài của gia đình. Vì vậy, mọi sản phẩm xuất xưởng đều tuân thủ quy chuẩn chất lượng cao&nbsp;nhất.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitmentsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Hammer;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-700/80 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors duration-300 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition text-balance">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs text-amber-400/80 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Chuẩn mực cam kết</span>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}

