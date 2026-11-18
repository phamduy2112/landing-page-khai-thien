import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    {
      num: '01',
      title: 'Tư Vấn & Khảo Sát',
      desc: 'Tiếp nhận thông tin nhu cầu, khảo sát thực tế hiện trạng không gian và tư vấn giải pháp tối ưu trực tiếp tại công trình.'
    },
    {
      num: '02',
      title: 'Lên Bản Vẽ Thiết Kế',
      desc: 'Phát triển ý tưởng phối cảnh 3D nội - ngoại thất chuẩn gu thẩm mỹ và phong cách riêng biệt của gia chủ.'
    },
    {
      num: '03',
      title: 'Báo Giá Minh Bạch',
      desc: 'Bóc tách khối lượng chi tiết từng hạng mục, thống nhất phương án vật liệu và ký kết hợp đồng rõ ràng.'
    },
    {
      num: '04',
      title: 'Sản Xuất Tại Xưởng',
      desc: 'Gia công trực tiếp tại xưởng sản xuất không qua trung gian, kiểm định chất lượng nghiêm ngặt trước khi xuất xưởng.'
    },
    {
      num: '05',
      title: 'Thi Công & Bàn Giao',
      desc: 'Lắp đặt hoàn thiện tận nơi tại TP.HCM, vệ sinh sạch sẽ, nghiệm thu bàn giao và kích hoạt bảo hành chu đáo.'
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Quy Trình Làm Việc Tại Khải Thiên
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Đồng bộ và chuyên nghiệp trong từng công đoạn từ thiết kế đến thi công hoàn thiện
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