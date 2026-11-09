import React from 'react';
import { Sofa, Utensils, BedDouble, Shirt, Sparkles, ArrowRight } from 'lucide-react';

export default function RoomExperience() {
  const rooms = [
    {
      id: 'living-room',
      icon: Sofa,
      name: 'Phòng Khách',
      enName: 'LIVING ROOM SPACE',
      materials: 'Ván MDF lõi xanh An Cường phủ Melamine, vách lam sóng & đá tự nhiên',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
      badge: 'Bộ Mặt Gia Chủ'
    },
    {
      id: 'kitchen',
      icon: Utensils,
      name: 'Phòng Bếp & Ăn',
      enName: 'KITCHEN & DINING',
      materials: 'Thùng Picomat chịu nước 100%, cánh MDF Acrylic bóng gương No-line',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
      badge: 'Chống Ẩm Tuyệt Đối'
    },
    {
      id: 'master-bedroom',
      icon: BedDouble,
      name: 'Phòng Ngủ Master',
      enName: 'MASTER BEDROOM SUITE',
      materials: 'Gỗ An Cường vân sồi tự nhiên, giường bọc nỉ & vách ốp đầu giường',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
      badge: 'Thư Thái & Êm Dịu'
    }
  ];

  return (
    <section id="room-experience" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Khám Phá Từng Không Gian Sống
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Trải nghiệm các hạng mục nội thất may đo chuẩn kích thước thực tế
          </p>
        </div>

        {/* 4 Room Cards Grid (2 Hàng x 2 Cột - Trắng ngà thanh lịch) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => {
            const Icon = room.icon;

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-stone-100">
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
                      <Icon className="w-3.5 h-3.5 text-amber-600" />
                      <span>{room.name}</span>
                    </span>
                  </div>

                  <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 shadow">
                    {room.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block">
                      {room.enName}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {room.materials}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#consultation"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs sm:text-sm font-bold transition duration-200 shadow"
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
