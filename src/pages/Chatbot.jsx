import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane, FaRobot, FaUser, FaTimes } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Gemini
import { BOOK_CONTENT } from '../data/bookContent'; // Import kiến thức sách
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
      text: "Chào bạn! Tôi là trợ lý AI. Tôi có thể hỗ trợ bạn về những kiến thức liên quan đến Chương IV. Bạn cần hỏi gì không?",
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

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Hiển thị câu hỏi người dùng
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      // 2. Tạo câu lệnh (Prompt) gửi cho AI
      // Kỹ thuật này gọi là "Grounding" (bắt AI trả lời dựa trên nguồn tin cậy)
      const prompt = `
        Bạn là một trợ lý ảo chuyên gia về Tư tưởng Hồ Chí Minh.
        Dưới đây là nội dung kiến thức nền tảng từ giáo trình:
        ---
        ${BOOK_CONTENT}
        ---
        Dựa vào nội dung trên, hãy trả lời câu hỏi sau của sinh viên một cách ngắn gọn, chính xác và dễ hiểu:
        "${userMsg.text}"
      `;

      // 3. Gọi API Gemini
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // 4. Hiển thị câu trả lời của Bot
      const botMsg = { id: Date.now() + 1, text: text, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Lỗi gọi API:", error);
      const errorMsg = { id: Date.now() + 1, text: "Xin lỗi, hệ thống đang bận. Bạn thử lại sau nhé!", sender: 'bot' };
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
            <p>Sử dụng công nghệ Gemini 2.5 Flash</p>
          </div>

          <div className="chat-window">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="avatar">
                  {msg.sender === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                {/* Dùng dangerouslySetInnerHTML nếu muốn AI render được chữ đậm/nghiêng */}
                <div className="bubble">
                  {msg.text}
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