import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        {/* Cột 1 */}
        <div className="footer-column">
          <h3>Tư Tưởng Hồ Chí Minh</h3>
          <p className="subtitle">Về ĐCSVN & Nhà nước của Dân</p>
          <div className="quote-box">
            “Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân... Chính quyền từ xã đến Chính phủ trung ương do dân cử ra.”
          </div>
        </div>

        {/* Cột 2 */}
        <div className="footer-column">
          <h3>Nội dung cốt lõi Chương 4</h3>
          <ul className="footer-list">
            <li>• ĐCSVN là nhân tố hàng đầu đưa cách mạng thắng lợi</li>
            <li>• Nhà nước của dân, do dân, vì dân</li>
            <li>• Bản chất giai cấp công nhân của Nhà nước</li>
            <li>• Nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-column">
          <h3>Thông tin nhóm thực hiện</h3>
          <ul className="footer-info">
            <li><span>Môn học:</span> Tư tưởng Hồ Chí Minh (HCM202)</li>
            <li><span>Chủ đề:</span> Xây dựng Nhà nước pháp quyền</li>
            <li><span>GVHD:</span> Nguyễn Trung Hiếu</li>
            <li><span>Thực hiện:</span> Nhóm 4</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Tiểu luận Chương 4: Đảng Cộng sản Việt Nam & Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân.</p>
      </div>
    </footer>
  );
};

export default Footer;