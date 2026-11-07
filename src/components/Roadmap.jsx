import React from 'react';
import { GitCommit, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { processSteps } from '../data/landingData';

export default function Roadmap() {
  return (
    <section id="process" className="py-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5 shrink-0" />
            <span>Minh Bạch & Chuyên Nghiệp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-balance">
            Quy Trình Làm Việc Khép Kín 5&nbsp;Bước
          </h2>
          <p className="text-slate-600 text-base leading-relaxed text-pretty">
            Kiểm soát chặt chẽ từng công đoạn từ xưởng sản xuất đến công trình thực tế, giúp gia chủ an tâm về tiến độ và chất&nbsp;lượng.
          </p>
        </div>

        {/* 5 Steps Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Step Number Badge */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 font-black text-xl flex items-center justify-center border border-amber-200/70 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shrink-0">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition text-balance">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed text-pretty">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 whitespace-nowrap">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Kiểm soát chuẩn chất lượng</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

