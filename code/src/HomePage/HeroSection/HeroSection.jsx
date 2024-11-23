import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Chào mừng bạn đến với</h1>
        <h1>Hệ Thống In Bách Khoa</h1>
        <p>Tải lên tài liệu và in tại máy in gần nhất</p>
        <Link to="/LoginSelectionPage" className="cta-button">Đăng nhập ngay</Link>
      </div>
    </section>
  );
};

export default HeroSection;
