import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import { brandInfo } from '../data/landingData';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    propertyType: 'Căn hộ chung cư',
    area: '',
    style: 'Hiện đại (Modern Luxury)',
    materialInterest: 'Ván gỗ công nghiệp cao cấp',
    consultationLocation: 'Tại căn hộ / công trình thực tế',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên của bạn';
    }

    const phoneRegex = /(0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s+/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ (Vui lòng nhập đúng 10 số di động VN)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      propertyType: 'Căn hộ chung cư',
      area: '',
      style: 'Hiện đại (Modern Luxury)',
      materialInterest: 'Ván gỗ công nghiệp cao cấp',
      consultationLocation: 'Tại căn hộ / công trình thực tế',
      notes: '',
    });
    setStatus('idle');
    setErrors({});
  };

  return (
    <section id="consultation" className="py-20 bg-[#FAF8F5] border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Cột trái: Tinh gọn cam kết */}
          <div className="lg:col-span-5 space-y-5">

            <h2 className="text-3xl sm:text-4xl text-center sm:text-left font-bold text-slate-900 tracking-[0.015em] leading-[1.35] text-balance">
              Nhận Tư Vấn & Báo Giá Trực Tiếp Từ Xưởng
            </h2>

            <p className="text-slate-600 text-center sm:text-left text-sm leading-relaxed text-pretty">
              Đội ngũ kiến trúc sư Khải Thiên sẵn sàng hỗ trợ khảo sát, tư vấn giải pháp không gian và báo giá chi tiết cho công trình của bạn.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Khảo sát hiện trạng và tư vấn tận nơi tại TP.HCM</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs text-xs sm:text-sm text-slate-700">
                <ShieldCheck className="w-4 h-4 text-stone-900 shrink-0" />
                <span>Sản xuất trực tiếp tại xưởng tối ưu chi phí</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs text-xs sm:text-sm text-slate-700">
                <PhoneCall className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bố trí công năng và vật liệu theo đúng nhu cầu</span>
              </div>
            </div>
          </div>

          {/* Cột phải: Form nhập liệu cao cấp */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-2xl relative overflow-hidden">

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Cảm ơn bạn đã quan tâm đến dịch vụ của <strong>Khải Thiên Furnishing</strong>. Chuyên viên tư vấn sẽ liên hệ đến số <strong>{formData.phone}</strong> trong thời gian sớm nhất để hỗ trợ thông tin chi tiết.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="py-3 px-7 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-stone-100 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Đăng Ký Tư Vấn Nội - Ngoại Thất
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Vui lòng để lại thông tin để Khải Thiên hỗ trợ tư vấn giải pháp không gian phù hợp nhất.
                    </p>
                  </div>

                  {/* Họ tên & SĐT */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Họ và tên của bạn <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="VD: Nguyễn Văn An"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${errors.fullName
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-stone-200 focus:border-stone-900 focus:ring-stone-200'
                          }`}
                      />
                      {errors.fullName && (
                        <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Số điện thoại / Zalo <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="VD: 076 666 6633"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${errors.phone
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-stone-200 focus:border-stone-900 focus:ring-stone-200'
                          }`}
                      />
                      {errors.phone && (
                        <p className="text-rose-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Loại hình & Diện tích */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="propertyType" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Loại hình công trình
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
                      >
                        <option value="Căn hộ chung cư">Căn hộ chung cư</option>
                        <option value="Nhà phố liền kề">Nhà phố liền kề</option>
                        <option value="Biệt thự / Villa">Biệt thự / Villa</option>
                        <option value="Quán Cafe / Nhà hàng">Quán Cafe / Nhà hàng</option>
                        <option value="Văn phòng / Showroom">Văn phòng / Showroom</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="area" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Diện tích ước tính (m²)
                      </label>
                      <input
                        id="area"
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="VD: 85 m²"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
                      />
                    </div>
                  </div>

                  {/* Phong cách & Vật liệu quan tâm */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="style" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phong cách yêu thích
                      </label>
                      <select
                        id="style"
                        name="style"
                        value={formData.style}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
                      >
                        <option value="Hiện đại (Modern Luxury)">Hiện đại (Modern Luxury)</option>
                        <option value="Tối giản & Japandi">Tối giản & Japandi</option>
                        <option value="Sang trọng Đương Đại">Sang trọng Đương Đại</option>
                        <option value="Tân cổ điển (Neo Classic)">Tân cổ điển (Neo Classic)</option>
                        <option value="Tư vấn phối theo gu riêng">Tư vấn phối theo gu riêng</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="materialInterest" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Hạng mục quan tâm
                      </label>
                      <select
                        id="materialInterest"
                        name="materialInterest"
                        value={formData.materialInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
                      >
                        <option value="Thiết kế & thi công trọn gói">Thiết kế & thi công trọn gói</option>
                        <option value="Sản xuất đồ gỗ may đo theo yêu cầu">Sản xuất đồ gỗ may đo theo yêu cầu</option>
                        <option value="Tủ bếp & Tủ áo cao cấp">Tủ bếp & Tủ áo cao cấp</option>
                        <option value="Nội - Ngoại thất kinh doanh (Cafe, Shop)">Nội - Ngoại thất kinh doanh (Cafe, Shop)</option>
                      </select>
                    </div>
                  </div>

                  {/* Ghi chú thêm */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ghi chú thêm về yêu cầu hoặc thời gian mong muốn
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="2"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="VD: Cần tư vấn thiết kế thi công trọn gói căn hộ 2 phòng ngủ..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-stone-900 text-white font-bold text-sm sm:text-base transition duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed group text-balance"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                          <span className="whitespace-nowrap">Đang gửi thông tin đến Khải Thiên...</span>
                        </>
                      ) : (
                        <>
                          <span>GỬI YÊU CẦU TƯ VẤN & BÁO GIÁ</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-stone-400">
                    Cam kết bảo mật thông tin. Khải Thiên chỉ liên hệ hỗ trợ chuyên môn nội thất.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}