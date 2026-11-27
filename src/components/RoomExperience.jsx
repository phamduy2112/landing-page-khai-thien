import React from 'react';
import { Sofa, Utensils, BedDouble, ArrowRight } from 'lucide-react';

export default function RoomExperience() {
  const rooms = [
    {
      id: 'living-room',
      icon: Sofa,
      name: 'Phòng Khách',
      enName: 'LIVING ROOM SPACE',
      materials: 'Thiết kế sang trọng, tối ưu không gian sinh hoạt chung cho căn hộ, nhà phố và biệt thự.',
      image: '/assets/04_The_Gold_View_Block_A/04_The_Gold_View_Block_A_001.jpg',
      badge: 'Điểm Nhấn Trung Tâm'
    },
    {
      id: 'kitchen',
      icon: Utensils,
      name: 'Phòng Bếp & Ăn',
      enName: 'KITCHEN & DINING',
      materials: 'Bố trí công năng khoa học, hệ tủ bếp hiện đại, gọn gàng và tiện nghi tối đa cho gia chủ.',
      image: '/assets/phongbep.jpg',
      badge: 'Tiện Nghi Ấm Cúng'
    },
    {
      id: 'master-bedroom',
      icon: BedDouble,
      name: 'Phòng Ngủ Master',
      enName: 'MASTER BEDROOM SUITE',
      materials: 'Không gian nghỉ dưỡng riêng tư đẳng cấp với giường ngủ, tủ quần áo và tab đầu giường đồng bộ.',
      image: '/assets/phongngu.jpg',
      badge: 'Thư Thái & Riêng Tư'
    }
  ];

  return (
    <section id="room-experience" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Khám Phá Không Gian Sống
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Trải nghiệm các hạng mục thiết kế và thi công nội thất thực tế từ Khải Thiên Furnishing
          </p>
        </div>

        {/* Room Cards Grid (3 Cột cân đối) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => {
            const Icon = room.icon;

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Khung hình ảnh: Đảm bảo responsive tỉ lệ chuẩn đẹp, không bị méo */}
                <div className="relative w-full bg-slate-900 overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 text-slate-800 text-xs font-bold shadow-xs">
                      <Icon className="w-3.5 h-3.5 text-stone-900" />
                      <span>{room.name}</span>
                    </span>
                  </div>

                  <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-stone-900 text-white shadow">
                    {room.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-stone-900 font-bold uppercase tracking-widest block">
                      {room.enName}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {room.materials}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#consultation"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-stone-900 text-white text-xs sm:text-sm font-bold transition duration-200 shadow"
                    >
                      <span>Nhận Báo Giá {room.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}