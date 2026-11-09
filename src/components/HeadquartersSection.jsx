import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, ExternalLink, Building2 } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function HeadquartersSection() {
  const [activeId, setActiveId] = useState('showroom');

  const branches = [
    {
      id: 'showroom',
      name: 'Showroom Ngô Gia Tự',
      address: brandInfo.addressShowroom,
      mapUrl: 'https://maps.google.com/maps?q=217%20Ng%C3%B4%20Gia%20T%E1%BB%B1%2C%20Ph%C6%B0%E1%BB%9Dng%203%2C%20Qu%E1%BA%ADn%2010%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=217+Ng%C3%B4+Gia+T%E1%BB%B1,+Ph%C6%B0%E1%BB%9Dng+3,+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh'
    },
    {
      id: 'office',
      name: 'Trụ Sở Đường 3/2',
      address: brandInfo.addressOffice,
      mapUrl: 'https://maps.google.com/maps?q=606%2F112%20%C4%90%C6%B0%E1%BB%9Dng%203%2F2%2C%20Ph%C6%B0%E1%BB%9Dng%2014%2C%20Qu%E1%BA%ADn%2010%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=606%2F112+%C4%90%C6%B0%E1%BB%9Dng+3%2F2,+Ph%C6%B0%E1%BB%9Dng+14,+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh'
    }
  ];

  const activeBranch = branches.find((b) => b.id === activeId) || branches[0];

  return (
    <section id="he-thong-co-so" className="py-20 bg-[#FAF8F5] text-slate-800 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tiêu đề ngắn gọn */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Cơ Sở Của Chúng Tôi
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Lựa chọn cơ sở thuận tiện nhất để trải nghiệm thực tế hoặc nhận tư vấn trực tiếp
          </p>
        </div>

        {/* Khung tương tác chính */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-4 sm:p-6 lg:p-7 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Cột trái: Danh sách thẻ cơ sở tối giản */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-3.5">
              {branches.map((branch) => {
                const isSelected = branch.id === activeId;

                return (
                  <div
                    key={branch.id}
                    onClick={() => setActiveId(branch.id)}
                    className={`text-left p-5 rounded-2xl transition-all duration-200 cursor-pointer border ${isSelected
                      ? 'bg-amber-50/50 border-l-4 border-l-amber-600 border-amber-200 shadow-md ring-1 ring-amber-300/30'
                      : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-stone-300'
                      }`}
                  >
                    {/* Tên cơ sở */}
                    <div className="flex items-center gap-2.5">
                      <MapPin
                        className={`w-4 h-4 shrink-0 transition ${isSelected ? 'text-amber-600' : 'text-slate-400'
                          }`}
                      />
                      <h3
                        className={`text-base font-bold leading-snug transition ${isSelected ? 'text-slate-900' : 'text-slate-700'
                          }`}
                      >
                        {branch.name}
                      </h3>
                    </div>

                    {/* Địa chỉ ngắn gọn */}
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-6.5 leading-relaxed">
                      {branch.address}
                    </p>

                    {/* Link xem bản đồ */}
                    <div className="mt-3 pl-6.5">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold transition ${isSelected ? 'text-amber-700' : 'text-slate-500'
                          }`}
                      >
                        <span>Xem trên bản đồ</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cột phải: Bản đồ Google Maps */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-full min-h-[350px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-100">
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
                  className="w-full h-full min-h-[350px] sm:min-h-[420px] filter contrast-[1.02]"
                />

                {/* Nút nổi góc dưới bản đồ */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={activeBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-lg transition whitespace-nowrap"
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
