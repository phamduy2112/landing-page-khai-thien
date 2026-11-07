import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/landingData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Niềm Tin Từ Khách Hàng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-balance">
            Gia Chủ Nói Gì Về Khải Thiên Furnishing?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed text-pretty">
            Sự hài lòng tuyệt đối của quý khách khi bước vào tổ ấm mới chính là thành quả quý giá nhất của đội ngũ chúng&nbsp;tôi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm leading-relaxed italic text-pretty">
                  "{item.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  {item.name.charAt(item.name.lastIndexOf(' ') + 1)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 whitespace-nowrap">{item.name}</h4>
                  <p className="text-xs text-slate-500 whitespace-nowrap">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

