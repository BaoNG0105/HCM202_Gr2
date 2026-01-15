import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  const sections = [
    {
      id: 1,
      title: "Sự ra đời và vai trò của Đảng",
      subtitle: "Người cầm lái vĩ đại",
      content: (
        <>
          <p>Đảng Cộng sản Việt Nam ra đời là sự kết hợp của 3 yếu tố: Chủ nghĩa Mác - Lênin, Phong trào công nhân và Phong trào yêu nước. Đảng đóng vai trò như 'người cầm lái' cho con thuyền cách mạng.</p>
          <blockquote className="quote-box">
            "Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy." 
          </blockquote>
        </>
      ),
      img: "img/about1.jpg",
      reverse: false
    },
    {
      id: 2,
      title: "Đảng phải trong sạch, vững mạnh",
      subtitle: "Đạo đức là cái gốc",
      content: (
        <>
          <p>Hoạt động dựa trên 5 nguyên tắc: Lấy chủ nghĩa Mác - Lênin làm nền tảng, Tập trung dân chủ, Tự phê bình và phê bình, Kỷ luật nghiêm minh, và Đoàn kết thống nhất.</p>
          <blockquote className="quote-box">
            "Đảng ta là đạo đức, là văn minh." 
          </blockquote>
        </>
      ),
      img: "img/about2.jpg",
      reverse: true
    },
    {
      id: 3,
      title: "Bản chất Nhà nước Việt Nam",
      subtitle: "Dân chủ - Nhân dân - Dân tộc",
      content: (
        <>
          <p>Nhà nước dân chủ nhân dân, dựa trên liên minh Công - Nông - Trí, do giai cấp công nhân lãnh đạo. Bản chất giai cấp công nhân thống nhất với tính nhân dân và tính dân tộc.</p>
          <blockquote className="quote-box">
            "Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên nền tảng liên minh công nông, do giai cấp công nhân lãnh đạo." 
          </blockquote>
        </>
      ),
      img: "img/about3.jpg",
      reverse: false
    },
    {
      id: 4,
      title: "Nhà nước của Dân, do Dân & vì Dân",
      subtitle: "Quyền lực thuộc về nhân dân",
      content: (
        <>
          <ul className="custom-list">
            <li><strong>Của Dân:</strong> Tất cả quyền lực nhà nước và xã hội đều thuộc về nhân dân.</li>
            <li><strong>Do Dân:</strong> Dân lập nên, dân ủng hộ, dân đóng thuế xây dựng nhà nước.</li>
            <li><strong>Vì Dân:</strong> Phục vụ lợi ích nhân dân. Việc gì có lợi cho dân thì phải hết sức làm.</li>
          </ul>
          <blockquote className="quote-box">
            "Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ."
          </blockquote>
        </>
      ),
      img: "img/about4.jpg",
      reverse: true
    },
    {
      id: 5,
      title: "Nhà nước Pháp quyền",
      subtitle: "Thượng tôn pháp luật",
      content: (
        <>
          <p>Quản lý xã hội bằng Hiến pháp và pháp luật. Xây dựng nền pháp quyền nhân nghĩa: Pháp luật tôn trọng quyền con người, có tính nhân văn và khuyến thiện.</p>
          <blockquote className="quote-box">
            "Phải nêu cao cái gương 'phụng công, thủ pháp, chí công, vô tư' cho nhân dân noi theo."
          </blockquote>
        </>
      ),
      img: "img/about5.jpg",
      reverse: false
    },
    {
      id: 6,
      title: "Nhà nước trong sạch & Kiểm soát quyền lực",
      subtitle: "Chống tha hóa quyền lực",
      content: (
        <>
          <p>Quyền lực nhà nước là do nhân dân ủy thác. Cần kiểm soát chặt chẽ để cán bộ không biến thành 'quan cách mạng'. Phát huy quyền giám sát của nhân dân.</p>
          <blockquote className="quote-box">
            "Mong đồng bào giúp đỡ, đôn đốc, kiểm soát và phê bình để làm trọn nhiệm vụ của mình."
          </blockquote>
        </>
      ),
      img: "img/about6.jpg",
      reverse: true
    },
    {
      id: 7,
      title: "Vận dụng: Xây dựng Đảng",
      subtitle: "Vừa hồng, vừa chuyên",
      content: (
        <>
          <p>Nhiệm vụ then chốt là xây dựng Đảng về đạo đức. Xây dựng đội ngũ cán bộ có đức, có tài, dám nghĩ, dám làm, dám chịu trách nhiệm.</p>
          <blockquote className="quote-box">
            "Muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém."
          </blockquote>
        </>
      ),
      img: "img/about7.jpg",
      reverse: false
    },
    {
      id: 8,
      title: "Quyết liệt phòng, chống tham nhũng",
      subtitle: "Không có vùng cấm",
      content: (
        <>
          <p>Tham nhũng là 'giặc nội xâm', đe dọa sự tồn vong của chế độ. Phương châm hành động là kết hợp chặt chẽ giữa 'xây' và 'chống'.</p>
          <blockquote className="quote-box">
            "Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai."
          </blockquote>
        </>
      ),
      img: "img/about8.jpg",
      reverse: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="about-page">
      <Header />

      <main className="about-body">
        <div className="about-hero animate-on-scroll">
          <h1>Tư Tưởng Hồ Chí Minh</h1>
          <p className="subtitle">Về Đảng Cộng sản Việt Nam và Nhà nước của Nhân dân</p>
        </div>

        <div className="content-container">
          {sections.map((item) => (
            <section
              key={item.id}
              className={`info-section animate-on-scroll ${item.reverse ? 'reverse' : ''}`}
            >
              <div className="text-content">
                <div className="section-number">Phần 0{item.id}</div>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <div className="description">{item.content}</div>
              </div>
              <div className="image-content">
                <img src={item.img} alt={item.title} />
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;