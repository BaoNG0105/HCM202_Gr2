import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">

        {/* Cột 1 */}
        <div className="footer-column">
          <h3>Tư Tưởng Hồ Chí Minh</h3>
          <p className="subtitle">Về ĐCSVN & Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân.</p>
          <div className="quote-box">
            “Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân... Chính quyền từ xã đến Chính phủ trung ương do dân cử ra.”
          </div>
        </div>

        {/* Cột 2 */}
        <div className="footer-column">
          <h3>Nội dung cốt lõi Chương 4</h3>
          <ul className="footer-list">
            <li>• ĐCSVN là nhân tố hàng đầu đưa cách mạng thắng lợi</li>
            <li>• Đảng phải trong sạch, vững mạnh</li>
            <li>• Bản chất của Nhà nước Việt Nam</li>
            <li>• Nhà nước của dân, do dân, vì dân</li>
            <li>• Nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ</li>
            <li>• Nhà nước trong sạch & kiểm soát quyền lực</li>
            <li>• Vận dụng xây dựng Đảng "vừa hồng, vừa chuyên"</li>
            <li>• Quyết liệt phòng, chống tham nhũng</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-column">
          <h3>Thông tin nhóm thực hiện</h3>
          <ul className="footer-info">
            <li><span>Môn học:</span>HCM Ideology - Tư tưởng Hồ Chí Minh (HCM202)</li>
            <li><span>Nhóm thực hiện: Nhóm 2</span></li>
            <li>
              <ul>
                <li>Nguyễn Viết Hoàng - SE183852</li>
                <li>Ngô Gia Bảo - SE184840</li>
                <li>Nguyễn Anh Việt - SE180540</li>
                <li>Đinh Vương Thiên Tứ - SE183314</li>
                <li>Cao Hoàng Đăng Khoa- SE184266</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 HCM202 Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;