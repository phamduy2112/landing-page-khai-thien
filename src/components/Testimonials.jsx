import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Anh Hoàng Nam',
      project: 'Masteri Thảo Điền (3PN)',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      badge: 'Căn hộ 3PN • Bàn giao 28 ngày',
      quote: 'Căn hộ bàn giao thực tế sắc nét y như bản vẽ 3D. Đội thợ xưởng làm việc tỉ mỉ, ray kéo và bản lề Hafele êm ái.'
    },
    {
      name: 'Chị Mai Lan',
      project: 'Nhà Phố KDC Cityland Gò Vấp',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      badge: 'Nhà phố 1 trệt 2 lầu • Tiết kiệm 70tr',
      quote: 'Làm việc trực tiếp với xưởng tiết kiệm được hơn 70 triệu so với các bên thiết kế thương mại. Rất hài lòng.'
    },
    {
      name: 'Anh Quốc Bảo',
      project: 'Vinhomes Grand Park (2PN)',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      badge: 'Căn hộ 2PN • Chuẩn ván E1',
      quote: 'Đúng tiến độ 22 ngày xuất xưởng. Ván gỗ An Cường chuẩn E1 không bị mùi hắc, gia đình có con nhỏ rất an tâm.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-semibold">
            <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Thực Tế Nghiệm Thu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Ý Kiến Gia Chủ
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Hình ảnh không gian thực tế và đánh giá sau khi bàn giao chìa khóa trao tay
          </p>
        </div>

        {/* Reviews Grid với hình ảnh dự án thực tế */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Hình ảnh công trình bàn giao thực tế */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                  {item.badge}
                </span>
              </div>

              {/* Nội dung phản hồi */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs shrink-0">
                    {item.name.slice(-1)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
