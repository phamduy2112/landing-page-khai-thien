import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 text-sm pt-16 pb-28 md:pb-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-200">

          {/* Cột 1: Thông tin thương hiệu */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/Logo (4).png" alt={brandInfo.name} className="w-[190px]" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-4 text-pretty">
              Đơn vị tiên phong trong giải pháp thiết kế sáng tạo và thi công nội thất trọn gói chất lượng cao tại TP.&nbsp;Hồ&nbsp;Chí&nbsp;Minh. Sở hữu xưởng sản xuất trực tiếp, cam kết giống 3D 99% và vật liệu An Cường 100%.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-700 font-semibold whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Bảo hành kết cấu 36 tháng – Bảo trì trọn đời</span>
            </div>
          </div>

          {/* Cột 2: Hệ thống cơ sở */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">
              Hệ Thống Cơ Sở & Chi Nhánh
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Showroom trưng bày:</strong>
                  <span className="text-slate-600">{brandInfo.addressShowroom}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Trụ sở & Văn phòng KTS:</strong>
                  <span className="text-slate-600">{brandInfo.addressOffice}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Giờ mở cửa đón tiếp:</strong>
                  <span className="text-slate-600">08:00 – 21:00 (Mở cửa tất cả các ngày trong tuần)</span>
                </div>
              </li>
              <li className="pt-1">
                <a
                  href="#he-thong-co-so"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-semibold transition"
                >
                  <span>Xem chi tiết cơ sở & chỉ đường Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên hệ nhanh */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">
              Liên Hệ & Hỗ Trợ
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <p className="text-slate-500 text-xs font-semibold">Hotline tư vấn / Zalo:</p>
                <a
                  href={`tel:${brandInfo.hotline1.replace(/\s+/g, '')}`}
                  className="text-slate-900 text-base font-bold hover:text-amber-700 transition block mt-0.5 whitespace-nowrap"
                >
                  {brandInfo.hotline1}
                </a>
                <a
                  href={`tel:${brandInfo.hotline2.replace(/\s+/g, '')}`}
                  className="text-slate-700 text-sm font-semibold hover:text-amber-700 transition block whitespace-nowrap"
                >
                  {brandInfo.hotline2}
                </a>
              </div>

              <div>
                <p className="text-slate-500 text-xs font-semibold">Email hỗ trợ:</p>
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  {brandInfo.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={brandInfo.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-bold whitespace-nowrap"
                >
                  <span>Chat Zalo với Mr.&nbsp;Thành&nbsp;Tín</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Khải Thiên Furnishing. Tất cả các quyền được bảo lưu.</p>
          <p className="flex items-center gap-4">
            <span>Thiết kế & thi công nội thất chuẩn mực TP.HCM</span>
            <span>•</span>
            <a href="https://noithatkhaithien.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800">
              noithatkhaithien.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
