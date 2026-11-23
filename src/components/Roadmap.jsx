import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    {
      num: '01',
      title: 'Tư Vấn & Khảo Sát',
      desc: 'Tiếp nhận yêu cầu, đo đạc hiện trạng tận nơi và tư vấn giải pháp bố trí không gian tối ưu nhất.',
      image: '/assets/bn_cate_1.webp',
      badge: 'Khảo sát tận nơi'
    },
    {
      num: '02',
      title: 'Thiết Kế 3D & Báo Giá',
      desc: 'Phối cảnh 3D độc bản chuẩn gu, bóc tách khối lượng chi tiết từng mã vật tư và cam kết 0 phát sinh.',
      image: '/assets/project_1.1.webp',
      badge: 'Miễn phí 100% 3D'
    },
    {
      num: '03',
      title: 'Sản Xuất May Đo Tại Xưởng',
      desc: 'Gia công trên dây chuyền máy CNC Nesting và dán cạnh PUR No-Line tự động với 100% ván An Cường.',
      image: '/assets/after_1.1.webp',
      badge: 'Giá gốc tận xưởng'
    },
    {
      num: '04',
      title: 'Thi Công Lắp Đặt & Bàn Giao',
      desc: 'Lắp ráp hoàn thiện chuẩn xác, vệ sinh công nghiệp sạch sẽ và kích hoạt bảo hành chính hãng 36 tháng.',
      image: '/assets/banner.webp',
      badge: 'Chìa khóa trao tay'
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-900 bg-stone-200/70 px-3.5 py-1 rounded-full">
            Quy trình chuẩn hóa 4 bước
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Quy Trình Làm Việc Tại Khải Thiên
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Hình ảnh thực tế đồng bộ và chuyên nghiệp trong từng công đoạn từ thiết kế đến thi công hoàn thiện
          </p>
        </div>

              {/* Gallery Image Cards Grid: 4 Cột Rộng Rãi Chuẩn Tỷ Lệ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative h-[380px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between p-5 sm:p-6 border border-stone-200/60"
                  >
                    {/* Background Image with Zoom on hover */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Multi-layered Gradients for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-900/30 group-hover:from-slate-950/98 group-hover:via-slate-950/60 transition-colors" />

                      {/* Top Header Badge & Step Number */}
                      <div className="relative z-10 flex items-center justify-between gap-2">
                        <span className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-sm flex items-center justify-center border border-white/40 shadow group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                          {step.num}
                        </span>

                      <span className="text-[10px] sm:text-[11px] font-semibold text-stone-900 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-stone-900/30">
                        {step.badge}
                      </span>
                    </div>

                      {/* Bottom Content Area */}
                      <div className="relative z-10 space-y-2.5 text-white">
                        <div className="text-[11px] font-bold text-stone-900 flex items-center gap-1.5 uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Bước {idx + 1}/4</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-stone-900 transition-colors">
                          {step.title}
                        </h3>

                        <p className="text-xs text-stone-200/90 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {step.desc}
                        </p>

                    {/* Micro Action Hint */}
                    <div className="pt-1 flex items-center gap-1 text-[11px] text-stone-400 group-hover:text-stone-900 transition-colors">
                      <span>Chi tiết công đoạn</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
            </div>
          ))}
        </div>

      </div >
    </section >
  );
}