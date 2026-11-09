import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Clock, Award, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const commitments = [
    {
      num: '01',
      icon: Building2,
      title: 'Xưởng Sản Xuất Trực Tiếp',
      desc: 'Tiết kiệm 20% - 30% chi phí so với các đơn vị thương mại trung gian, quản lý chất lượng tận gốc.',
      highlight: 'Tiết kiệm 20% - 30%'
    },
    {
      num: '02',
      icon: CheckCircle2,
      title: '100% Gỗ An Cường Chính Hãng',
      desc: 'Cam kết bồi thường 200% nếu phát hiện vật liệu sai quy cách hoặc pha tạp gỗ kém chất lượng.',
      highlight: 'Đền bù 200% nếu sai vật liệu'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Thi Công Chuẩn 3D Đến 99%',
      desc: 'Sắc nét từ tỉ lệ hình khối, rãnh hắt sáng LED đến bề mặt vân gỗ đồng nhất với bản vẽ duyệt.',
      highlight: 'Khớp 99% bản vẽ 3D'
    },
    {
      num: '04',
      icon: Clock,
      title: 'Bảo Hành 36 Tháng Tận Nơi',
      desc: 'Bảo trì trọn đời, kỹ thuật viên xưởng có mặt hỗ trợ xử lý tận công trình trong vòng 24 giờ.',
      highlight: 'Hỗ trợ kỹ thuật 24h'
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
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
                alt="Khải Thiên Furniture - Tay nghề thợ mộc và chất lượng hoàn thiện"
                className="w-full h-[460px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Badge góc dưới */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 tracking-wide uppercase">Bảo Chứng Khải Thiên</p>
                    <p className="text-[11px] text-slate-600">Quy trình sản xuất khép kín • Nghiệm thu từng chi tiết</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột Phải: Tiêu đề & 4 Cam Kết Vàng */}
          <div className="lg:col-span-7 space-y-6">

            {/* Header Cột Phải */}
            <div className="space-y-2">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[0.015em]">
                4 Cam Kết Vàng Cho Mọi Gia Chủ
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Minh bạch vật liệu, chuẩn xác tiến độ và chịu trách nhiệm đến cùng trên từng sản phẩm xuất xưởng.
              </p>
            </div>

            {/* Danh sách 4 Cam Kết - Dạng Stack ngang trực quan */}
            <div className="space-y-3.5">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300 group flex items-start gap-4"
                  >
                    {/* Số thứ tự / Icon */}
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 font-bold text-sm flex items-center justify-center border border-amber-200 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {item.num}
                    </div>

                    {/* Nội dung cam kết */}
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-700 transition">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
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
