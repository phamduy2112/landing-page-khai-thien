import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, ExternalLink, Building2 } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function HeadquartersSection() {
  const branch = {
    id: 'office',
    name: 'Trụ Sở Nguyễn Trãi',
    address: brandInfo.addressOffice,
    mapUrl: 'https://maps.google.com/maps?q=129%2F8K%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Ph%C6%B0%E1%BB%9Dng%20Ch%E1%BB%A3%20Qu%C3%A1n%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=129%2F8K+Nguy%E1%BB%85n+Tr%C3%A3i,+Ph%C6%B0%E1%BB%9Dng+Ch%E1%BB%A3+Qu%C3%A1n,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh'
  };

  return (
    <section id="he-thong-co-so" className="py-20 bg-[#FAF8F5] text-slate-800 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tiêu đề ngắn gọn */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Trụ Sở Của Chúng Tôi
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Ghé thăm văn phòng để nhận tư vấn trực tiếp và trao đổi phương án thiết kế thi công
          </p>
        </div>

        {/* Khung tương tác chính */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-4 sm:p-6 lg:p-7 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Cột trái: Thông tin trụ sở */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="text-left p-6 sm:p-7 rounded-2xl bg-amber-50/50 border-l-4 border-l-amber-600 border border-amber-200/80 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-amber-600 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {branch.name}
                  </h3>
                </div>

                <div className="flex items-start gap-2.5 mt-3 text-slate-700 text-sm leading-relaxed">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>{branch.address}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-amber-200/60">
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition"
                  >
                    <Navigation className="w-4 h-4 shrink-0" />
                    <span>Chỉ đường trên Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cột phải: Bản đồ Google Maps */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-full min-h-[350px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-100">
                <iframe
                  title={`Bản đồ ${branch.name}`}
                  src={branch.mapUrl}
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
                    href={branch.directionsUrl}
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
