import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Khải Thiên Furnishing chuyên thiết kế và thi công những hạng mục nào?',
      a: 'Khải Thiên chuyên thiết kế và thi công trọn gói nội - ngoại thất cho căn hộ chung cư, nhà phố, biệt thự, villa, cũng như các không gian kinh doanh như quán cafe, bar, nhà hàng và showroom tại TP.HCM.'
    },
    {
      q: 'Quy trình làm việc và thi công trọn gói diễn ra như thế nào?',
      a: 'Quy trình gồm 5 bước: Tư vấn & khảo sát thực tế, lên bản vẽ thiết kế 3D, bóc tách báo giá minh bạch, sản xuất trực tiếp tại xưởng và tiến hành lắp đặt, bàn giao hoàn thiện tận nơi cho gia chủ.'
    },
    {
      q: 'Thời gian hoàn thiện một dự án nội thất thường mất bao lâu?',
      a: 'Thời gian gia công sản xuất tại xưởng và lắp đặt hoàn thiện sẽ tùy thuộc vào khối lượng thực tế, quy mô công trình cũng như mức độ phức tạp của bản vẽ thiết kế.'
    },
    {
      q: 'Chính sách bảo hành và hỗ trợ khách hàng của Khải Thiên ra sao?',
      a: 'Khải Thiên luôn đồng hành cùng quý khách hàng trong suốt quá trình sử dụng với các chính sách bảo hành, bảo trì sản phẩm chu đáo và hỗ trợ kỹ thuật tận nơi khi cần thiết.'
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
          <p className="text-slate-600 text-xs sm:text-sm">
            Giải đáp các thắc mắc phổ biến về dịch vụ thiết kế và thi công tại Khải Thiên Furnishing
          </p>
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