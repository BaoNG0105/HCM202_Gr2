import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaQuestionCircle } from 'react-icons/fa';
import Header from '../components/Header'; // Import Header mới
import Footer from '../components/Footer'; // Import Footer mới
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* 1. Header nằm trên cùng */}
      <Header />

      {/* 2. Nội dung chính (Body) */}
      <main className="home-body">
        <div className="hero-section">
          <h1>Khám phá tri thức nhân loại</h1>
          <p>Chào mừng bạn đến với dự án sản phẩm sáng tạo môn học HCM202 - Tư tưởng Hồ Chí Minh.</p>

          <div className="action-cards">

            {/* Card 1: Giới thiệu */}
            <div className="card" onClick={() => navigate('/about')}>
              <div className="icon"><FaQuestionCircle /></div>
              <h3>Giới thiệu</h3>
              {/* Thêm thẻ p nếu muốn đồng bộ giao diện, hoặc để trống */}
              <p>Một số nội dung cốt lỗi về dự án này.</p>
            </div>

            {/* Card 2: Đọc Sách */}
            <div className="card" onClick={() => navigate('/e-book')}>
              <div className="icon"><FaBookOpen /></div>
              <h3>Đọc Sách</h3>
              <p>Trải nghiệm lật trang sống động như thật.</p>
            </div>

            {/* Card 3: Quiz */}
            <div className="card" onClick={() => navigate('/quiz')}>
              <div className="icon"><FaQuestionCircle /></div>
              <h3>Làm Quiz</h3>
              <p>Thử thách kiến thức với 10 câu hỏi thú vị.</p>
            </div>

          </div>
        </div>
      </main>

      {/* 3. Footer nằm dưới cùng */}
      <Footer />
    </div>
  );
};

export default Home;