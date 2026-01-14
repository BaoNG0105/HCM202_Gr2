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
            <div className="card card-image" onClick={() => navigate('/about')}>
              <img src="img/card1.jpg" alt="Giới thiệu" className="card-bg" />
              {/* 2. Lớp phủ chứa chữ (Overlay) */}
              <div className="card-overlay">
                <div className="icon"><FaBookOpen /></div>
                <h3>Giới thiệu</h3>
                <p>Một số nội dung cốt lỗi về dự án này.</p>
              </div>
            </div>

            {/* Card 2: Đọc Sách */}
            <div className="card card-image" onClick={() => navigate('/e-book')}>
              <img src="img/1.png" alt="Bìa sách" className="card-bg" />
              <div className="card-overlay">
                <div className="icon"><FaBookOpen /></div>
                <h3>Đọc Sách</h3>
                <p>Trải nghiệm lật trang sống động như thật.</p>
              </div>
            </div>

            {/* Card 3: Quiz */}
            <div className="card card-image" onClick={() => navigate('/quiz')}>
              <img src="img/card3.jpg" alt="Quiz" className="card-bg" />
              <div className="card-overlay">
                <div className="icon"><FaQuestionCircle /></div>
                <h3>Làm Quiz</h3>
                <p>Thử thách kiến thức với 10 câu hỏi thú vị.</p>
              </div>
            </div>

            {/* Card 4: AI Chatbot */}
            <div className="card card-image" onClick={() => navigate('/ai-chatbot')}>
              <img src="img/card4.jpg" alt="AI Chatbot" className="card-bg" />
              <div className="card-overlay">
                <div className="icon"><FaQuestionCircle /></div>
                <h3>AI Chatbot</h3>
                <p>Hãy cùng trò chuyện với AI để tìm hiểu sâu hơn về kiến thức.</p>
              </div>
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