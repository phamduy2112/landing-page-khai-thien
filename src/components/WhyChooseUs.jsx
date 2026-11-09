import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const commitments = [
    {
      icon: Building2,
      title: 'Xưởng Trực Tiếp',
      desc: 'Tiết kiệm 20% - 30% chi phí so với các đơn vị thương mại trung gian.'
    },
    {
      icon: CheckCircle2,
      title: '100% Gỗ An Cường',
      desc: 'Cam kết đền bù 200% nếu phát hiện sử dụng sai quy cách vật liệu.'
    },
    {
      icon: ShieldCheck,
      title: 'Chuẩn 3D Đến 99%',
      desc: 'Thi công sắc nét từ tỉ lệ khối đến bề mặt vân gỗ so với bản vẽ duyệt.'
    },
    {
      icon: Clock,
      title: 'Bảo Hành 36 Tháng',
      desc: 'Bảo trì trọn đời, kỹ thuật viên hỗ trợ tận nơi trong vòng 24h.'
    }
  ];

  return (
    <section id="commitments" className="py-20 bg-[#FAF8F5] text-slate-800 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            4 Cam Kết Vàng
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Tiêu chuẩn chất lượng nghiêm ngặt cho mọi không gian bàn giao
          </p>
        </div>

        {/* 4 Cards Grid - 2 Hàng x 2 Cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] text-amber-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Cam kết hợp đồng minh bạch</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
