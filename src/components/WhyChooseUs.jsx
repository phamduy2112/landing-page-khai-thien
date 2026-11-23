import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const commitments = [
    {
      num: '01',
      icon: Building2,
      title: 'Xưởng Sản Xuất Trực Tiếp',
      desc: 'Chủ động từ khâu lên bản vẽ đến gia công lắp đặt tại xưởng riêng, tối ưu chi phí hiệu quả cho gia chủ.',
      highlight: 'Xưởng Sản Xuất Riêng'
    },
    {
      num: '02',
      icon: CheckCircle2,
      title: 'Vật Liệu Chính Hãng, Chất Lượng',
      desc: 'Cam kết sử dụng đúng chủng loại ván gỗ và phụ kiện cao cấp đã thỏa thuận, đảm bảo độ bền vững theo thời gian.',
      highlight: 'Vật Liệu Minh Bạch'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Thi Công Sắc Nét, Chuẩn Thực Tế',
      desc: 'Đội ngũ thợ tay nghề cao, tỉ mỉ trong từng đường nét gia công và lắp đặt hoàn thiện tại công trình.',
      highlight: 'Tay Nghề Tận Tâm'
    },
    {
      num: '04',
      icon: Clock,
      title: 'Bảo Hành & Hậu Mãi Chu Đáo',
      desc: 'Luôn đồng hành cùng khách hàng trong suốt quá trình sử dụng với chính sách bảo hành và hỗ trợ kỹ thuật tận nơi.',
      highlight: 'Hậu Mãi Tận Tâm'
    }
  ];

  return (
    <section id="commitments" className="py-20 bg-[#FAF8F5] text-slate-800 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Layout 2 cột: Hình ảnh bên Trái - 4 Cam kết bên Phải */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Cột Trái: Hình ảnh thực tế xưởng / thi công hoàn thiện */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-md group">
              <img
                src="../assets/6.jpg"
                alt="Khải Thiên Furnishing - Tay nghề thợ mộc và chất lượng hoàn thiện"
                className="w-full h-[460px] sm:h-[540px] object-right object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Badge góc dưới */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-900 text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 tracking-wide uppercase">Khải Thiên Furnishing</p>
                    <p className="text-[11px] text-slate-600">Thiết kế & Thi công nội - ngoại thất trọn gói</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột Phải: Tiêu đề & 4 Cam Kết Vàng */}
          <div className="lg:col-span-7 space-y-6">

            {/* Header Cột Phải */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left text-slate-900 tracking-[0.015em]">
                Lý Do Gia Chủ Tin Chọn Khải Thiên
              </h2>
              <p className="text-slate-600 text-xs text-center sm:text-left sm:text-sm leading-relaxed">
                Minh bạch trong từng hạng mục, chuẩn xác trong thi công và tận tâm trong dịch vụ hậu mãi.
              </p>
            </div>

            {/* Danh sách 4 Cam Kết - Dạng Stack ngang trực quan */}
            <div className="space-y-3.5">
              {commitments.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs hover:border-stone-900 hover:shadow-md transition-all duration-300 group flex items-start gap-4"
                  >
                    {/* Số thứ tự / Icon */}
                    <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-900 font-bold text-sm flex items-center justify-center border border-stone-300 shrink-0 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      {item.num}
                    </div>

                    {/* Nội dung cam kết */}
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-stone-900 transition">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-stone-900 bg-stone-100 px-2 py-0.5 rounded border border-stone-300/80">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}