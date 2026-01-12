import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaQuestionCircle } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* HEADER */}
      <header className="home-header">
        <div className="logo">HCM202</div>
        <nav>
          <button className="nav-link">Giới thiệu</button>
          <button className="nav-link">Liên hệ</button>
        </nav>
      </header>

      {/* BODY */}
      <main className="home-body">
        <div className="hero-section">
          <h1>Khám phá tri thức nhân loại</h1>
          <p>Chào mừng bạn đến với dự án môn học HCM202 - Tư tưởng Hồ Chí Minh. Hãy chọn một hoạt động để bắt đầu.</p>
          
          <div className="action-cards">
            {/* Card Đọc sách */}
            <div className="card" onClick={() => navigate('/book')}>
              <div className="icon"><FaBookOpen /></div>
              <h3>Đọc Sách</h3>
              <p>Trải nghiệm lật trang sống động như thật.</p>
            </div>

            {/* Card Quiz */}
            <div className="card" onClick={() => navigate('/quiz')}>
              <div className="icon"><FaQuestionCircle /></div>
              <h3>Làm Quiz</h3>
              <p>Thử thách kiến thức với 10 câu hỏi thú vị.</p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="home-footer">
        <p>© 2026 HCM202 E-Book Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;