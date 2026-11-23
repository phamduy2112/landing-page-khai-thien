import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfterSection from './components/BeforeAfterSection';
import RoomExperience from './components/RoomExperience';
import Portfolio from './components/Portfolio';
import ProjectVideoShowcase from './components/ProjectVideoShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import InfiniteGalleryWall from './components/InfiniteGalleryWall';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ConsultationForm from './components/ConsultationForm';
import HeadquartersSection from './components/HeadquartersSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 flex flex-col selection:bg-slate-900 selection:text-white">
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


        {/* 6. Khám Phá Không Gian Từng Phòng */}
        <RoomExperience />

        {/* 7. Tường Ảnh Vô Tận Show Hàng Loạt Không Gian Thực Tế */}
        <InfiniteGalleryWall />

        {/* 8. 4 Cam Kết Vàng Từ Xưởng Khải Thiên */}
        <WhyChooseUs />

        {/* 9. Quy Trình 4 Bước Chuẩn Hóa */}
        {/* <Roadmap /> */}

        {/* 5. Video Bàn Giao Thực Tế (Minh chứng sống động nhất) */}
        <ProjectVideoShowcase />

        {/* 10. Đánh Giá Từ Gia Chủ */}
        <Testimonials />

        {/* 11. Câu Hỏi Thường Gặp */}
        <FAQ />

        {/* 12. Form Đăng Ký Tư Vấn & Nhận Dự Toán */}
        <ConsultationForm />

        {/* 13. Hệ Thống Cơ Sở Trực Tiếp */}
        <HeadquartersSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingContact />
    </div>
  );
}
