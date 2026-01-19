import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaQuestionCircle } from 'react-icons/fa'; // Giữ nguyên import icon của bạn
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* --- PHẦN MỚI: VIDEO BACKGROUND --- */}
      <div className="video-background-wrapper">
        <iframe
          className="video-iframe"
          /* Link đã thêm tham số để tự chạy, tắt tiếng, lặp lại */
          src="https://www.youtube.com/embed/rG3aZznMIm8?autoplay=1&mute=1&loop=1&playlist=rG3aZznMIm8&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Lớp phủ tối màu để chữ hiển thị rõ trên nền video */}
        <div className="video-overlay"></div>
      </div>
      {/* ---------------------------------- */}

      {/* 2. Nội dung chính (Body) */}
      <main className="home-body">
        <div className="hero-section">
          <h1>Khám phá tri thức nhân loại</h1>
          <p>Chào mừng bạn đến với dự án sản phẩm sáng tạo môn học HCM202 - Tư tưởng Hồ Chí Minh.</p>

          <div className="action-cards">

            {/* Card 1: Giới thiệu */}
            <div className="card card-image" onClick={() => navigate('/about')}>
              <img src="img/card1.jpg" alt="Giới thiệu" className="card-bg" />
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
    </div>
  );
};

export default Home;