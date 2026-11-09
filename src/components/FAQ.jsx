import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Giá thi công tại xưởng Khải Thiên tiết kiệm được bao nhiêu?',
      a: 'Khải Thiên trực tiếp sản xuất tại xưởng riêng, không qua các khâu thương mại trung gian nên giá thành thường tối ưu hơn 20% - 30% so với thị trường.'
    },
    {
      q: 'Làm sao để tôi kiểm tra đúng 100% ván gỗ An Cường chính hãng?',
      a: 'Quý khách được kiểm tra hóa đơn xuất kho An Cường và tem nhãn trực tiếp trên từng tấm ván khi vật tư nhập về xưởng hoặc khi lắp đặt tại nhà.'
    },
    {
      q: 'Thời gian thi công một căn hộ hoàn thiện mất bao lâu?',
      a: 'Thời gian sản xuất tại xưởng từ 15 – 20 ngày và lắp đặt hoàn thiện tại công trình từ 3 – 5 ngày tùy theo khối lượng căn hộ.'
    },
    {
      q: 'Chính sách bảo hành và bảo trì nội thất như thế nào?',
      a: 'Khải Thiên bảo hành kết cấu 36 tháng và bảo trì trọn đời. Kỹ thuật viên sẽ có mặt xử lý trong vòng 24h khi nhận được yêu cầu từ gia chủ.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-2 mb-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
            Câu Hỏi Thường Gặp
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition hover:bg-stone-50 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-2">
                    {item.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
