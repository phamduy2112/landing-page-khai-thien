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
    materialInterest: 'Ván chống ẩm An Cường lõi xanh',
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
      materialInterest: 'Ván chống ẩm An Cường lõi xanh',
      consultationLocation: 'Tại căn hộ / công trình thực tế',
      notes: '',
    });
    setStatus('idle');
    setErrors({});
  };

  return (
    <section id="consultation" className="py-24 bg-gradient-to-b from-[#FCFBF9] to-stone-100 border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Cột trái: Tinh gọn cam kết */}
          <div className="lg:col-span-5 space-y-5">

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em] leading-[1.35] text-balance">
              Nhận Phối Cảnh 3D & Báo Giá Xưởng
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed text-pretty">
              KTS Khải Thiên liên hệ tư vấn giải pháp bám sát ngân sách và mang mẫu ván An Cường khảo sát tận nơi miễn phí.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Khảo sát & đo đạc hiện trạng tận nơi 0đ</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs text-xs sm:text-sm text-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Trực tiếp xem mẫu ván An Cường chính hãng</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs text-xs sm:text-sm text-slate-700">
                <PhoneCall className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Báo giá bóc tách chi tiết không phát sinh</span>
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
                    Cảm ơn bạn đã tin tưởng <strong>Khải Thiên Furnishing</strong>. Kiến trúc sư tư vấn sẽ gọi đến số <strong>{formData.phone}</strong> trong vòng 30 phút để hỗ trợ bạn giải pháp tốt nhất.
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
                      Phiếu Đăng Ký Tư Vấn & Nhận Mẫu 3D
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Vui lòng điền thông tin để đội ngũ kỹ sư Khải Thiên chuẩn bị trước bảng bóc tách giá gốc xưởng.
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
                            : 'border-stone-200 focus:border-amber-600 focus:ring-amber-100'
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
                        placeholder="VD: 0931 337 737"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${errors.phone
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                            : 'border-stone-200 focus:border-amber-600 focus:ring-amber-100'
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
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                      >
                        <option value="Căn hộ chung cư">Căn hộ chung cư</option>
                        <option value="Nhà phố liền kề">Nhà phố liền kề</option>
                        <option value="Biệt thự / Villa">Biệt thự / Villa</option>
                        <option value="Cải tạo phòng khách / Bếp lẻ">Cải tạo phòng khách / Bếp lẻ</option>
                        <option value="Văn phòng / Shop kinh doanh">Văn phòng / Shop kinh doanh</option>
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
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
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
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
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
                        Chất liệu quan tâm
                      </label>
                      <select
                        id="materialInterest"
                        name="materialInterest"
                        value={formData.materialInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                      >
                        <option value="Ván chống ẩm An Cường lõi xanh">Ván chống ẩm An Cường lõi xanh</option>
                        <option value="Cánh Acrylic No-line bóng gương">Cánh Acrylic No-line bóng gương</option>
                        <option value="Cánh kính viền nhôm Slim đèn LED">Cánh kính viền nhôm Slim đèn LED</option>
                        <option value="Gỗ sồi tự nhiên kết hợp chống ẩm">Gỗ sồi tự nhiên kết hợp chống ẩm</option>
                      </select>
                    </div>
                  </div>

                  {/* Ghi chú thêm */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ghi chú thêm về yêu cầu hoặc thời gian nhận nhà
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="2"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="VD: Cần tư vấn tủ bếp cánh kính và hệ tủ áo kịch trần..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm sm:text-base transition duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed group text-balance"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                          <span className="whitespace-nowrap">Đang gửi thông tin đến kiến trúc sư...</span>
                        </>
                      ) : (
                        <>
                          <span>GỬI YÊU CẦU & NHẬN PHỐI CẢNH 3D MIỄN&nbsp;PHÍ</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-stone-400">
                    🔒 Cam kết bảo mật 100% dữ liệu. Khải Thiên chỉ liên hệ tư vấn chuyên môn nội thất.
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
