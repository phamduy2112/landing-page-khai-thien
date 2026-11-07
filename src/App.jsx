import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import RoomExperience from './components/RoomExperience';
import StylesSection from './components/StylesSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import FactorySection from './components/FactorySection';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ConsultationForm from './components/ConsultationForm';
import HeadquartersSection from './components/HeadquartersSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFBF9] text-slate-800 flex flex-col selection:bg-amber-700 selection:text-white">
      {/* 1. Header & Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section - Định Vị Kiến Trúc Sang Trọng */}
        <Hero />

        {/* 3. Dịch Vụ Trọng Tâm */}
        <Services />

        {/* 4. Trải Nghiệm Không Gian Từng Phòng (Thay thế dự toán thô) */}
        {/* <RoomExperience /> */}

        {/* 5. Bộ Sưu Tập Phong Cách */}
        {/* <StylesSection /> */}

        {/* 6. Minh Chứng Cam Kết: Bản Vẽ 3D vs Thực Tế Bàn Giao */}
        {/* <div id="before-after">
          <BeforeAfterSection />
        </div> */}

        {/* 7. Năng Lực Xưởng Sản Xuất Trực Tiếp & Hệ Thống Máy Móc */}
        {/* <div id="factory">
          <FactorySection />
        </div> */}

        {/* 8. 4 Cam Kết Vàng Từ Khải Thiên */}
        <WhyChooseUs />

        {/* 9. Dự Án Tiêu Biểu Bàn Giao */}
        <Portfolio />

        {/* 10. Quy Trình 5 Bước Khép Kín */}
        <Roadmap />

        {/* 11. Đánh Giá Từ Gia Chủ */}
        <Testimonials />

        {/* 12. Câu Hỏi Thường Gặp */}
        <FAQ />

        {/* 13. Form Đăng Ký Tư Vấn & Nhận Bản Vẽ 3D */}
        <ConsultationForm />

        {/* 14. Hệ Thống Cơ Sở & Trụ Sở Trực Tiếp */}
        <HeadquartersSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Thanh Tiện Ích Dính Mobile & Nút Nổi Desktop */}
      <FloatingContact />
    </div>
  );
}
