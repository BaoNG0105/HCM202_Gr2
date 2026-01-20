import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane, FaRobot, FaUser, FaTimes } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Gemini
import { BOOK_CONTENT } from '../data/bookContent'; // Import kiến thức sách
import ReactMarkdown from 'react-markdown'; // Dùng để render markdown nếu cần
import './Chatbot.css';

const Chatbot = () => {
  const navigate = useNavigate(); // 3. Khởi tạo hook navigate

  // --- CẤU HÌNH GEMINI ---
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  if (!API_KEY) {
    console.error("Chưa cấu hình API Key!");
  }
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Chào bạn! Tôi là trợ lý AI. Tôi có thể hỗ trợ bạn về những kiến thức liên quan đến tư tưởng Hồ Chí Minh. Bạn cần hỏi gì không?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- HÀM GỬI TIN NHẮN (LOGIC CHÍNH) ---
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Hiển thị tin nhắn người dùng
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      // 2. KIẾN THỨC BỔ SUNG (ĐẠI HỘI XIV & CHÍNH TRỊ MỚI)
      // Bạn có thể viết thêm bất kỳ kiến thức mới nào vào đây
      const extraKnowledge = `
      - Thông tin cập nhật 2026: Năm 2026 là năm diễn ra Đại hội đại biểu toàn quốc lần thứ XIV của Đảng Cộng sản Việt Nam (Đại hội XIV).
      - Ý nghĩa Đại hội XIV: Đây là sự kiện chính trị trọng đại, đánh dấu mốc quan trọng trong việc tổng kết 40 năm đổi mới, định hướng chiến lược đưa đất nước bước vào kỷ nguyên vươn mình của dân tộc.
      - Bối cảnh hiện nay: Đảng ta tiếp tục đẩy mạnh xây dựng, chỉnh đốn Đảng, phòng chống tham nhũng, tiêu cực ("không có vùng cấm"), xây dựng Nhà nước pháp quyền XHCN thực sự của dân, do dân, vì dân theo tư tưởng Hồ Chí Minh.
    `;

      // 3. TẠO PROMPT (RA LỆNH CHO AI)
      const prompt = `
      Bạn là một Chuyên gia/Giảng viên cao cấp về môn "Tư tưởng Hồ Chí Minh" và Chính trị Việt Nam.

      NHIỆM VỤ CỦA BẠN:
      Trả lời câu hỏi của sinh viên dựa trên 2 nguồn dữ liệu sau:
      1. Nguồn cốt lõi (Giáo trình Chương IV):
      ---
      ${BOOK_CONTENT}
      ---
      2. Nguồn cập nhật (Chính trị hiện nay & Đại hội XIV):
      ---
      ${extraKnowledge}
      ---

      QUY TẮC QUAN TRỌNG (BẮT BUỘC TUÂN THỦ):
      1. **Phạm vi trả lời:** CHỈ trả lời các câu hỏi liên quan đến Tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam, Nhà nước, và các sự kiện chính trị quan trọng (như Đại hội XIV).
      2. **Cơ chế từ chối:** Nếu người dùng hỏi các vấn đề KHÔNG LIÊN QUAN (ví dụ: hỏi giờ, thời tiết, toán học, giải trí, code, phim ảnh, tình yêu...), bạn hãy trả lời chính xác câu sau:
         "Xin lỗi, tôi là trợ lý học tập môn Tư tưởng Hồ Chí Minh. Tôi chỉ hỗ trợ giải đáp các vấn đề về lý luận chính trị, Đảng và Nhà nước."
      3. **Phong cách:** Trả lời ngắn gọn, súc tích, học thuật nhưng dễ hiểu. Sử dụng định dạng Markdown (in đậm, gạch đầu dòng) để trình bày đẹp.

      Câu hỏi của sinh viên: "${userMsg.text}"
    `;

      // 4. Gọi API
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // 5. Hiển thị phản hồi
      const botMsg = { id: Date.now() + 1, text: text, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Lỗi gọi API:", error);
      const errorMsg = { id: Date.now() + 1, text: "Hệ thống đang bận, vui lòng thử lại sau.", sender: 'bot' };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-page">
      <main className="chatbot-body">
        <div className="chat-container">
          <div className="chat-header">
            {/* Nút thoát nằm góc phải */}
            <button className="btn-close-chat" onClick={() => navigate('/')} title="Thoát">
              <FaTimes />
            </button>

            <h2>Hỏi đáp Tư tưởng Hồ Chí Minh (AI Powered)</h2>
            <p>Sử dụng công nghệ Gemini</p>
          </div>

          <div className="chat-window">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="avatar">
                  {msg.sender === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                <div className="bubble">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>

              </div>
            ))}

            {isTyping && (
              <div className="message bot">
                <div className="avatar"><FaRobot /></div>
                <div className="bubble typing">Đang phân tích kiến thức...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping} // Khóa ô nhập khi đang chờ AI
            />
            <button type="submit" disabled={isTyping}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;