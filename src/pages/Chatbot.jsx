import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Chào bạn! Tôi là trợ lý AI chuyên về Tư tưởng Hồ Chí Minh (Chương IV). Bạn muốn hỏi gì về Đảng hoặc Nhà nước?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Tự động cuộn xuống tin nhắn mới nhất
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- DỮ LIỆU TRÍ TUỆ CỦA BOT (Trích xuất từ PDF) ---
  const knowledgeBase = [
    {
      keywords: ["đảng ra đời", "nguồn gốc đảng", "yếu tố"],
      answer: "Đảng Cộng sản Việt Nam ra đời là sự kết hợp của 3 yếu tố: Chủ nghĩa Mác - Lênin, Phong trào công nhân và Phong trào yêu nước [cite: 7-11]."
    },
    {
      keywords: ["vai trò", "người cầm lái"],
      answer: "Đảng đóng vai trò là 'người cầm lái' cho con thuyền cách mạng. Đảng có vững, cách mệnh mới thành công [cite: 4-6]."
    },
    {
      keywords: ["nguyên tắc", "tập trung dân chủ"],
      answer: "Đảng hoạt động dựa trên 5 nguyên tắc: 1. Lấy chủ nghĩa Mác - Lênin làm nền tảng; 2. Tập trung dân chủ; 3. Tự phê bình và phê bình; 4. Kỷ luật nghiêm minh; 5. Đoàn kết thống nhất [cite: 16-22]."
    },
    {
      keywords: ["nhà nước", "bản chất"],
      answer: "Bản chất Nhà nước ta là nhà nước dân chủ nhân dân, dựa trên liên minh Công - Nông - Trí, do giai cấp công nhân lãnh đạo[cite: 25]."
    },
    {
      keywords: ["của dân", "do dân", "vì dân"],
      answer: "Nhà nước của dân: Quyền lực thuộc về nhân dân. Nhà nước do dân: Dân lập nên và đóng thuế. Nhà nước vì dân: Phục vụ lợi ích nhân dân, việc gì có lợi cho dân phải hết sức làm [cite: 31-47]."
    },
    {
      keywords: ["pháp quyền", "pháp luật"],
      answer: "Nhà nước pháp quyền là quản lý xã hội bằng Hiến pháp và pháp luật. Pháp luật phải nghiêm minh nhưng cũng cần có tính nhân văn (pháp quyền nhân nghĩa) [cite: 48-55]."
    },
    {
      keywords: ["tham nhũng", "tiêu cực"],
      answer: "Tham nhũng là 'giặc nội xâm'. Phương châm phòng chống là: 'Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai'[cite: 90, 99]."
    },
    {
      keywords: ["vùng cấm", "ngoại lệ"],
      answer: "Trong phòng chống tham nhũng, Bác Hồ và Đảng ta khẳng định: 'Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai'[cite: 99]."
    }
  ];

  // Hàm xử lý logic trả lời
  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Tìm câu trả lời khớp với từ khóa
    const found = knowledgeBase.find(item => 
      item.keywords.some(keyword => lowerInput.includes(keyword))
    );

    if (found) return found.answer;
    
    return "Xin lỗi, tôi chỉ có kiến thức về Chương IV (Đảng và Nhà nước). Bạn thử hỏi về 'nguyên tắc đảng', 'tham nhũng', hoặc 'nhà nước của dân' xem sao nhé!";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Thêm tin nhắn người dùng
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // 2. Giả lập Bot đang suy nghĩ (delay 1s)
    setTimeout(() => {
      const botReplyText = getBotResponse(input);
      const botMsg = { id: Date.now() + 1, text: botReplyText, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-page">
      <Header />
      
      <main className="chatbot-body">
        <div className="chat-container">
          <div className="chat-header">
            <h2>Hỏi đáp Tư tưởng Hồ Chí Minh</h2>
            <p>Trợ lý ảo hỗ trợ học tập</p>
          </div>

          <div className="chat-window">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="avatar">
                  {msg.sender === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                <div className="bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="avatar"><FaRobot /></div>
                <div className="bubble typing">Đang suy nghĩ...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Nhập câu hỏi của bạn (VD: Nguyên tắc hoạt động của Đảng...)" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit"><FaPaperPlane /></button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chatbot;