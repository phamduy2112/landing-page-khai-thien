import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Building2, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function HeadquartersSection() {
  const [activeId, setActiveId] = useState('showroom');

  const branches = [
    {
      id: 'showroom',
      type: 'Showroom Trưng Bày Mẫu',
      name: 'Showroom Ngô Gia Tự',
      address: brandInfo.addressShowroom,
      shortAddress: '217 Ngô Gia Tự, Phường 3, Quận 10, TP.HCM',
      note: 'Mặt tiền phố nội thất – Có bãi đỗ ô tô & xe máy',
      hours: '08:00 – 21:00 (Mở cửa tất cả các ngày trong tuần)',
      highlights: 'Trưng bày hơn 100 mẫu ván An Cường, tủ áo cánh kính Slim LED, ray giảm chấn Hafele / Blum',
      mapUrl: 'https://maps.google.com/maps?q=217%20Ng%C3%B4%20Gia%20T%E1%BB%B1%2C%20Ph%C6%B0%E1%BB%9Dng%203%2C%20Qu%E1%BA%ADn%2010%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=217+Ng%C3%B4+Gia+T%E1%BB%B1,+Ph%C6%B0%E1%BB%9Dng+3,+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh'
    },
    {
      id: 'office',
      type: 'Trụ Sở & Văn Phòng Thiết Kế',
      name: 'Trụ Sở Đường 3/2',
      address: brandInfo.addressOffice,
      shortAddress: '606/112 Đường 3/2, Phường 14, Quận 10, TP.HCM',
      note: 'Khu vực trung tâm Quận 10 – Di chuyển thuận tiện',
      hours: '08:00 – 21:00 (Làm việc cùng KTS chủ trì)',
      highlights: 'Gặp gỡ KTS chủ trì, bóc tách dự toán chi tiết bám sát bản vẽ 3D, ký hợp đồng không phát sinh',
      mapUrl: 'https://maps.google.com/maps?q=606%2F112%20%C4%90%C6%B0%E1%BB%9Dng%203%2F2%2C%20Ph%C6%B0%E1%BB%9Dng%2014%2C%20Qu%E1%BA%ADn%2010%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=606%2F112+%C4%90%C6%B0%E1%BB%9Dng+3%2F2,+Ph%C6%B0%E1%BB%9Dng+14,+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh'
    }
  ];

  const activeBranch = branches.find(b => b.id === activeId) || branches[0];

  return (
    <section id="he-thong-co-so" className="py-20 bg-[#FAF9F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Hệ Thống Cơ Sở Khải Thiên</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em] leading-[1.35]">
            Cơ Sở Của Chúng Tôi
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-pretty">
            Lựa chọn cơ sở thuận tiện nhất để trải nghiệm thực tế mẫu gỗ An Cường hoặc nhận tư vấn trực tiếp từ KTS Khải Thiên.
          </p>
        </div>

        {/* Main 2-Column Container */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Selectable Location Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              {branches.map((branch) => {
                const isSelected = branch.id === activeId;

                return (
                  <div
                    key={branch.id}
                    onClick={() => setActiveId(branch.id)}
                    className={`text-left p-5 rounded-2xl transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-amber-50/40 border-l-4 border-l-amber-600 border-amber-300 shadow-md ring-1 ring-amber-400/20'
                        : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition ${
                            isSelected
                              ? 'bg-amber-600 text-white'
                              : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                            {branch.type}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {branch.name}
                          </h3>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="text-[10px] bg-amber-600 text-white font-bold px-2 py-0.5 rounded-full shrink-0">
                          Đang xem
                        </span>
                      )}
                    </div>

                    {/* Address Text */}
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {branch.shortAddress}
                    </p>

                    {/* Meta info */}
                    <div className="mt-2 text-xs text-slate-500 space-y-1">
                      <div className="flex items-center gap-1.5 text-stone-600">
                        <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{branch.hours}</span>
                      </div>
                      <p className="text-[11px] text-stone-500 italic">
                        {branch.note}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold transition ${
                        isSelected ? 'text-amber-700' : 'text-slate-500 group-hover:text-slate-900'
                      }`}>
                        <span>Xem trên bản đồ</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>

                      <a
                        href={branch.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-amber-700 hover:underline"
                      >
                        <span>Mở Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* Consultation helper box */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Hỗ trợ đo đạc & tư vấn tận nhà 0đ</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Nếu quý khách bận rộn không thể ghé showroom, KTS Khải Thiên sẽ mang mẫu ván An Cường & thước laser đến khảo sát tận nơi.
                </p>
                <a
                  href="#consultation"
                  className="inline-block text-[11px] font-bold text-amber-700 hover:underline pt-0.5"
                >
                  Đăng ký hẹn KTS tư vấn miễn phí →
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Container */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-inner bg-stone-100">
                <iframe
                  key={activeBranch.id}
                  title={`Bản đồ ${activeBranch.name}`}
                  src={activeBranch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px] sm:min-h-[460px] filter contrast-[1.02]"
                />

                {/* Floating "Mở Google Maps" button in bottom right corner (as seen in reference) */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={activeBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-lg transition duration-200 whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 shrink-0" />
                    <span>Mở Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
