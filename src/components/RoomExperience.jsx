import React, { useState } from 'react';
import { Sofa, Utensils, BedDouble, Shirt, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { roomShowcaseData } from '../data/landingData';

export default function RoomExperience() {
  const [activeRoomId, setActiveRoomId] = useState('living-room');

  const activeRoom = roomShowcaseData.find(r => r.id === activeRoomId) || roomShowcaseData[0];

  const roomIcons = {
    'living-room': Sofa,
    'kitchen': Utensils,
    'master-bedroom': BedDouble,
    'walkin-closet': Shirt,
  };

  return (
    <section id="room-experience" className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Trải Nghiệm Không Gian Mẫu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance">
            Nghệ Thuật Kiến Tạo Từng Không Gian&nbsp;Sống
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-pretty">
            Mỗi căn phòng sở hữu công năng và ngôn ngữ thiết kế riêng biệt. Hãy chọn không gian bạn muốn nâng&nbsp;tầm:
          </p>
        </div>

        {/* Room Navigation Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {roomShowcaseData.map((room, idx) => {
            const IconComponent = roomIcons[room.id] || Sofa;
            const isActive = activeRoomId === room.id;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveRoomId(room.id)}
                className={`flex items-center gap-3 py-3 px-6 rounded-2xl border text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl -translate-y-0.5'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                  isActive ? 'bg-amber-500 text-slate-950' : 'bg-white text-slate-500 border border-slate-200'
                }`}>
                  0{idx + 1}
                </span>
                <div className="text-left">
                  <span className="block leading-tight">{room.name}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-normal ${isActive ? 'text-amber-300' : 'text-slate-400'}`}>
                    {room.enName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Room Detail Display - Architectural Layout */}
        <div className="mt-14 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Visual Frame with Image & Floating Callouts */}
            <div className="lg:col-span-7 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 h-[380px] sm:h-[480px]">
                <img
                  src={activeRoom.image}
                  alt={activeRoom.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Room Banner */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">Tiêu chuẩn bàn giao</span>
                    <h4 className="text-base font-bold text-white ">{activeRoom.name} – {activeRoom.enName}</h4>
                  </div>
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-bold transition"
                  >
                    <span>Tư vấn bản vẽ phòng này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md py-1.5 px-4 rounded-xl shadow-lg border border-slate-200/80 text-xs font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>Thi công thực tế bởi Khải Thiên</span>
              </div>
            </div>

            {/* Information & Specifications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Ý TƯỞNG THIẾT KẾ ĐỘC BẢN
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 ">
                  {activeRoom.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{activeRoom.tagline}"
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-3.5 pt-2">
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Điểm Nhấn Kỹ Thuật & Vật Liệu:
                </h5>
                {activeRoom.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">{item.label}</strong>
                      <span className="text-xs text-slate-600 mt-0.5 block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Material Spec Pill */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-1 text-xs">
                <span className="font-bold text-amber-900 uppercase tracking-wider block">Vật liệu chủ đạo tuyển chọn:</span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {activeRoom.materials}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm transition-all duration-200 shadow-md text-balance"
                >
                  <span>Nhận Báo Giá Chi Tiết Không Gian&nbsp;Này</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

