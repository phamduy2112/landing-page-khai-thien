import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Anh Long Tiên',
      project: 'Showroom Nước Hoa Long Tiên House (192 Hai Bà Trưng, Q.1)',
      image: '../assets/long_thien.webp',
      badge: 'Cửa hàng trải nghiệm nước hoa • Thi công trọn gói',
      quote: 'Khải Thiên làm việc rất tỉ mỉ, từ hệ quầy đảo trung tâm đến vách logo thương hiệu đều bám sát thiết kế 3D. Khách hàng ghé shop trải nghiệm mùi hương ai cũng khen không gian ấm cúng và sang trọng.'
    },
    {
      name: 'Chị Lan Phương',
      project: 'Căn hộ đường Hậu Giang',
      image: '../assets/10.webp',
      badge: 'Căn hộ hiện đại • Thiết kế & Thi công trọn gói',
      quote: 'Tôi rất thích cách Khải Thiên lắng nghe sở thích cá nhân thay vì áp dụng rập khuôn các mẫu có sẵn. Sắc cam đất điểm xuyết tại phòng khách mang lại cá tính rất riêng, đồng thời quy trình khảo sát hiện trạng và thi công vô cùng chỉn chu, đúng cam kết.'
    },
    {
      name: 'Anh Minh Quân',
      project: 'Nhà phố 3 tầng đường Nguyễn Văn Giáp (TP. Thủ Đức)',
      image: '../assets/11.webp',
      badge: 'Nhà phố 1 trệt 3 lầu • Thiết kế & Thi công trọn gói',
      quote: 'Dù diện tích tầng trệt gọn gàng để ưu tiên chỗ đậu xe hơi và không gian bếp rộng, Khải Thiên đã bố trí rất thông minh với bục ngồi chờ và mảng xanh tinh tế. Không gian hiện đại, sang trọng đúng như kỳ vọng của vợ chồng tôi.'
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Đánh Giá Từ Khách Hàng
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Cảm nhận thực tế của các gia chủ và chủ đầu tư sau khi nghiệm thu bàn giao công trình
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Hình ảnh công trình thực tế */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                  {item.badge}
                </span>
              </div>

              {/* Nội dung phản hồi */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                  {/* <div className="w-9 h-9 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-xs shrink-0">
                    {item.name.slice(-1)}
                  </div> */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{item.project}</p>
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