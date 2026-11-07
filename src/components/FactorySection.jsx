import React from 'react';
import { Cog, CheckCircle, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import { factoryCapabilities, brandInfo } from '../data/landingData';

export default function FactorySection() {
  return (
    <section className="py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Năng Lực Sản Xuất Độc Lập</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance">
            Hệ Thống Xưởng Sản Xuất Trực&nbsp;Tiếp
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-pretty">
            Khác biệt lớn nhất của Khải Thiên là sở hữu xưởng quy mô được trang bị dây chuyền máy móc hiện đại, giúp kiểm soát 100% chất lượng từ cốt ván đến lớp hoàn&nbsp;thiện.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {factoryCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 font-black text-sm px-3 py-1 rounded-lg">
                    {item.number}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chuẩn kỹ thuật xuất xưởng</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

