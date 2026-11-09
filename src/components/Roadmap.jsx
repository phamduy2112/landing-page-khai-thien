import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    {
      num: '01',
      title: 'Khảo Sát 0đ',
      desc: 'Đo đạc hiện trạng tận nơi & tư vấn mẫu ván An Cường phù hợp công năng.'
    },
    {
      num: '02',
      title: 'Thiết Kế 3D',
      desc: 'Lên phối cảnh chuẩn gu gia chủ, chỉnh sửa đến khi hoàn toàn ưng ý.'
    },
    {
      num: '03',
      title: 'Báo Giá Chi Tiết',
      desc: 'Bóc tách dự toán minh bạch theo m², cam kết 100% không phát sinh.'
    },
    {
      num: '04',
      title: 'Sản Xuất Tại Xưởng',
      desc: 'Cắt dán chỉ máy tự động tại xưởng riêng, kiểm tra mộng ghép kỹ càng.'
    },
    {
      num: '05',
      title: 'Lắp Đặt & Bàn Giao',
      desc: 'Nghiệm thu chuẩn 3D, vệ sinh sạch sẽ và kích hoạt bảo hành 36 tháng.'
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            5 Bước Làm Việc Trực Tiếp Với Xưởng
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Kiểm soát chất lượng đồng bộ từ khâu đo đạc đến công trình thực tế
          </p>
        </div>

        {/* 5 Steps Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300 group flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 font-bold text-sm flex items-center justify-center border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="hidden lg:block text-stone-300 group-hover:text-amber-500 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-700 transition">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[11px] text-amber-700 font-medium">
                Bước {idx + 1}/5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
