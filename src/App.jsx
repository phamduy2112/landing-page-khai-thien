import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfterSection from './components/BeforeAfterSection';
import RoomExperience from './components/RoomExperience';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ConsultationForm from './components/ConsultationForm';
import HeadquartersSection from './components/HeadquartersSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 flex flex-col selection:bg-amber-700 selection:text-white">
      {/* 1. Header & Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Dịch Vụ Trọng Tâm */}
        <Services />

        {/* 4. Minh Chứng 3D vs Thực Tế Bàn Giao */}
        <BeforeAfterSection />

        {/* 5. Khám Phá Không Gian Từng Phòng */}
        <RoomExperience />

        {/* 6. Dự Án Tiêu Biểu Bàn Giao */}
        <Portfolio />

        {/* 7. 4 Cam Kết Vàng Từ Khải Thiên */}
        <WhyChooseUs />

        {/* 8. Quy Trình 5 Bước */}
        <Roadmap />

        {/* 9. Đánh Giá Từ Gia Chủ */}
        <Testimonials />

        {/* 10. Câu Hỏi Thường Gặp */}
        <FAQ />

        {/* 11. Form Đăng Ký Tư Vấn & Nhận Dự Toán */}
        <ConsultationForm />

        {/* 12. Hệ Thống Cơ Sở Trực Tiếp */}
        <HeadquartersSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingContact />
    </div>
  );
}
