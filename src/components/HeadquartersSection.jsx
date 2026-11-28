import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, ExternalLink, Building2, Store } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function HeadquartersSection() {
  const branches = [
    {
      id: 'showroom-3-2',
      badge: 'Showroom Trưng Bày Mới',
      name: 'Showroom Đường 3/2',
      tag: 'Trải Nghiệm Nội Thất Thực Tế',
      address: brandInfo.addressShowroom,
      mapUrl: 'https://maps.google.com/maps?q=10.7667945,106.6621843&hl=vi&z=17&output=embed',
      directionsUrl: 'https://www.google.com/maps/place/N%E1%BB%99i+Th%E1%BA%A5t+Kh%E1%BA%A3i+Thi%C3%AAn/@10.7667945,106.6621843,17z/data=!3m1!4b1!4m6!3m5!1s0x31752fc8baa0ce77:0x8c8a82399c0f8dcc!8m2!3d10.7667945!4d106.6621843!16s%2Fg%2F11ff47svhb'
    },
    {
      id: 'office-nguyen-trai',
      badge: 'Trụ Sở & Văn Phòng Thiết Kế',
      name: 'Trụ Sở Nguyễn Trãi',
      tag: 'Tư Vấn Thiết Kế & Bản Vẽ KTS',
      address: brandInfo.addressOffice,
      mapUrl: 'https://maps.google.com/maps?q=129%2F8K%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Ph%C6%B0%E1%BB%9Dng%20Ch%E1%BB%A3%20Qu%C3%A1n%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=129%2F8K+Nguy%E1%BB%85n+Tr%C3%A3i,+Ph%C6%B0%E1%BB%9Dng+Ch%E1%BB%A3+Qu%C3%A1n,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh'
    }
  ];

  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);
  const currentBranch = branches.find((b) => b.id === activeBranchId) || branches[0];

  return (
    <section id="he-thong-co-so" className="py-20 bg-[#FAF8F5] text-slate-800 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tiêu đề ngắn gọn */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Hệ Thống Showroom & Trụ Sở
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Ghé thăm showroom hoặc trụ sở văn phòng để trải nghiệm chất liệu thực tế và nhận tư vấn trực tiếp từ KTS Khải Thiên
          </p>

          {/* Tab chọn chi nhánh */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
            {branches.map((b) => {
              const isActive = b.id === activeBranchId;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setActiveBranchId(b.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 border ${isActive
                    ? 'bg-black text-white border-black shadow-md scale-102'
                    : 'bg-white text-slate-700 border-stone-200 hover:border-black hover:text-black shadow-xs'
                    }`}
                >
                  {b.id === 'showroom-3-2' ? (
                    <Store className="w-4 h-4 shrink-0" />
                  ) : (
                    <Building2 className="w-4 h-4 shrink-0" />
                  )}
                  <span>{b.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-600'
                    }`}>
                    {b.id === 'showroom-3-2' ? 'Showroom' : 'Trụ sở'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Khung tương tác chính */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-4 sm:p-6 lg:p-7 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Cột trái: Thông tin địa điểm đang chọn */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div className="text-left p-6 sm:p-7 rounded-2xl bg-stone-50 border-l-4 border-l-black border border-stone-200 shadow-xs">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                  {currentBranch.badge}
                </div>

                <div className="flex items-center gap-2.5">
                  {currentBranch.id === 'showroom-3-2' ? (
                    <Store className="w-5 h-5 text-stone-900 shrink-0" />
                  ) : (
                    <Building2 className="w-5 h-5 text-stone-900 shrink-0" />
                  )}
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {currentBranch.name}
                  </h3>
                </div>
                <p className="text-xs text-stone-500 font-medium mt-1">{currentBranch.tag}</p>

                <div className="flex items-start gap-2.5 mt-4 text-slate-700 text-sm leading-relaxed">
                  <MapPin className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <p className="font-medium text-slate-800">{currentBranch.address}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200 flex flex-wrap gap-2.5">
                  <a
                    href={currentBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition"
                  >
                    <Navigation className="w-4 h-4 shrink-0" />
                    <span>Chỉ đường trên Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Danh sách cơ sở tóm tắt */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {branches.map((b) => (
                  <div
                    key={`mini-${b.id}`}
                    onClick={() => setActiveBranchId(b.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition ${b.id === activeBranchId
                      ? 'border-black bg-stone-100/70 font-semibold text-black'
                      : 'border-stone-200 bg-white hover:border-stone-400 text-slate-600'
                      }`}
                  >
                    <p className="text-xs font-bold text-slate-900 flex items-center justify-between">
                      <span>{b.name}</span>
                      {b.id === activeBranchId && <span className="text-[10px] text-emerald-600 font-bold">● Đang xem</span>}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{b.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột phải: Bản đồ Google Maps */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-full min-h-[350px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-100">
                <iframe
                  key={currentBranch.mapUrl}
                  title={`Bản đồ ${currentBranch.name}`}
                  src={currentBranch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[350px] sm:min-h-[420px] filter contrast-[1.02]"
                />

                {/* Nút nổi góc dưới bản đồ */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={currentBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-lg transition whitespace-nowrap"
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
