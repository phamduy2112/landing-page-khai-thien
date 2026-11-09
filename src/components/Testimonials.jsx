import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Anh Hoàng Nam',
      project: 'Masteri Thảo Điền (3PN)',
      quote: 'Căn hộ bàn giao thực tế sắc nét y như bản vẽ 3D. Đội thợ xưởng làm việc tỉ mỉ, ray kéo và bản lề Hafele êm ái.'
    },
    {
      name: 'Chị Mai Lan',
      project: 'Nhà Phố KDC Cityland Gò Vấp',
      quote: 'Làm việc trực tiếp với xưởng tiết kiệm được hơn 70 triệu so với các bên thiết kế thương mại. Rất hài lòng.'
    },
    {
      name: 'Anh Quốc Bảo',
      project: 'Vinhomes Grand Park (2PN)',
      quote: 'Đúng tiến độ 22 ngày xuất xưởng. Ván gỗ An Cường chuẩn E1 không bị mùi hắc, gia đình có con nhỏ rất an tâm.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Ý Kiến Gia Chủ
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Phản hồi thực tế từ các công trình đã bàn giao
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF9] rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs shrink-0">
                  {item.name.slice(-1)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
