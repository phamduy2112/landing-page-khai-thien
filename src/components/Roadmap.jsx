import React from 'react';
import { GitCommit } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    { num: '01', title: 'Khảo Sát 0đ', desc: 'Đo đạc hiện trạng và tư vấn vật liệu tận nơi' },
    { num: '02', title: 'Thiết Kế 3D', desc: 'Lên phối cảnh không gian chuẩn gu gia chủ' },
    { num: '03', title: 'Báo Giá Minh Bạch', desc: 'Bóc tách chi tiết, cam kết 0 phát sinh' },
    { num: '04', title: 'Sản Xuất Tại Xưởng', desc: 'Gia công CNC trực tiếp từ ván An Cường' },
    { num: '05', title: 'Lắp Đặt & Bàn Giao', desc: 'Nghiệm thu chuẩn 3D, bảo hành 36 tháng' },
  ];

  return (
    <section id="process" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            5 Bước Làm Việc
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Kiểm soát chất lượng đồng bộ từ xưởng đến công trình thực tế
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs hover:shadow-md transition group space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 font-black text-lg flex items-center justify-center border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                {step.num}
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
