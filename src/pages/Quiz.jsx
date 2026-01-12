import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaRedo, FaArrowRight, FaCheck } from 'react-icons/fa';
import './Quiz.css';

const Quiz = () => {
  const navigate = useNavigate();

  // --- DỮ LIỆU CÂU HỎI (Giữ nguyên) ---
  const questions = [
    {
      questionText: 'Câu 1: Trong tác phẩm "Đường cách mệnh", Hồ Chí Minh ví vai trò lãnh đạo của Đảng Cộng sản như thế nào?',
      answerOptions: [
        { answerText: 'A. Người chỉ đường.', isCorrect: false },
        { answerText: 'B. Người cầm lái.', isCorrect: true },
        { answerText: 'C. Người tiên phong.', isCorrect: false },
        { answerText: 'D. Người đầy tớ.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 2: Điểm sáng tạo của Hồ Chí Minh về quy luật ra đời của Đảng Cộng sản Việt Nam so với lý luận Mác - Lênin là thêm yếu tố nào?',
      answerOptions: [
        { answerText: 'A. Phong trào công nhân.', isCorrect: false },
        { answerText: 'B. Chủ nghĩa xã hội khoa học.', isCorrect: false },
        { answerText: 'C. Phong trào yêu nước.', isCorrect: true },
        { answerText: 'D. Phong trào nông dân.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 3: Theo Hồ Chí Minh, nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng là gì?',
      answerOptions: [
        { answerText: 'A. Tinh thần yêu nước.', isCorrect: false },
        { answerText: 'B. Chủ nghĩa Mác - Lênin.', isCorrect: true },
        { answerText: 'C. Truyền thống dân tộc.', isCorrect: false },
        { answerText: 'D. Tinh hoa văn hóa nhân loại.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 4: Hồ Chí Minh coi nguyên tắc nào là "thang thuốc" tốt nhất để làm cho phần tốt nảy nở, phần xấu mất dần đi?',
      answerOptions: [
        { answerText: 'A. Tập trung dân chủ.', isCorrect: false },
        { answerText: 'B. Kỷ luật nghiêm minh.', isCorrect: false },
        { answerText: 'C. Tự phê bình và phê bình.', isCorrect: true },
        { answerText: 'D. Đoàn kết quốc tế.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 5: Bản chất giai cấp của Nhà nước Việt Nam Dân chủ Cộng hòa là gì?',
      answerOptions: [
        { answerText: 'A. Giai cấp nông dân.', isCorrect: false },
        { answerText: 'B. Giai cấp công nhân.', isCorrect: true },
        { answerText: 'C. Tầng lớp trí thức.', isCorrect: false },
        { answerText: 'D. Giai cấp tư sản dân tộc.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 6: Trong Nhà nước của dân, cán bộ nhà nước giữ vai trò gì đối với nhân dân?',
      answerOptions: [
        { answerText: 'A. Là quan phụ mẫu.', isCorrect: false },
        { answerText: 'B. Là người cai trị.', isCorrect: false },
        { answerText: 'C. Là người lãnh đạo và người đầy tớ (công bộc).', isCorrect: true },
        { answerText: 'D. Là người ban ơn.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 7: Nhà nước "Vì dân" theo tư tưởng Hồ Chí Minh là nhà nước như thế nào?',
      answerOptions: [
        { answerText: 'A. Do dân bầu ra.', isCorrect: false },
        { answerText: 'B. Được dân ủng hộ.', isCorrect: false },
        { answerText: 'C. Phục vụ lợi ích và nguyện vọng của nhân dân, không có đặc quyền đặc lợi.', isCorrect: true },
        { answerText: 'D. Quản lý bằng pháp luật.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 8: Theo Hồ Chí Minh, trong Nhà nước pháp quyền, công cụ quan trọng nhất để quản lý xã hội là gì?',
      answerOptions: [
        { answerText: 'A. Đạo đức.', isCorrect: false },
        { answerText: 'B. Hiến pháp và pháp luật.', isCorrect: true },
        { answerText: 'C. Dư luận xã hội.', isCorrect: false },
        { answerText: 'D. Mệnh lệnh hành chính.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 9: Nội dung nào sau đây thể hiện tính "nhân văn" trong tư tưởng pháp quyền của Hồ Chí Minh?',
      answerOptions: [
        { answerText: 'A. Pháp luật phải nghiêm khắc trừng trị mọi tội phạm.', isCorrect: false },
        { answerText: 'B. Pháp luật bảo vệ quyền con người, có tính khuyến thiện, giáo dục.', isCorrect: true },
        { answerText: 'C. Pháp luật chỉ bảo vệ giai cấp công nhân.', isCorrect: false },
        { answerText: 'D. Pháp luật ưu tiên người giàu.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 10: Để Nhà nước trong sạch, vững mạnh, Hồ Chí Minh nhấn mạnh biện pháp nào để chống sự lạm quyền?',
      answerOptions: [
        { answerText: 'A. Tăng lương cho cán bộ.', isCorrect: false },
        { answerText: 'B. Giảm bớt bộ máy hành chính.', isCorrect: false },
        { answerText: 'C. Kiểm soát quyền lực nhà nước.', isCorrect: true },
        { answerText: 'D. Tăng cường quyền lực cho người đứng đầu.', isCorrect: false },
      ],
    },
  ];

  // --- STATES ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  // State mới: Lưu index đáp án người dùng chọn cho từng câu (ban đầu là null hết)
  // Ví dụ: [null, null, 1, 0, ...] nghĩa là câu 1,2 chưa chọn, câu 3 chọn B, câu 4 chọn A
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  // --- XỬ LÝ CHỌN ĐÁP ÁN (Không chuyển câu ngay) ---
  const handleOptionSelect = (optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setUserAnswers(newAnswers);
  };

  // --- XỬ LÝ CHUYỂN CÂU ---
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); // Hết câu hỏi thì hiện điểm
    }
  };

  const handlePrevQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  // --- TÍNH ĐIỂM (Chỉ tính khi kết thúc) ---
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== null && questions[questionIndex].answerOptions[answerIndex].isCorrect) {
        score++;
      }
    });
    return score;
  };

  // --- RESET QUIZ ---
  const handleRestart = () => {
    setUserAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setShowScore(false);
  };

  const finalScore = calculateScore();

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        
        {/* MÀN HÌNH KẾT QUẢ */}
        {showScore ? (
          <div className="score-section">
            <h2>Kết quả của bạn</h2>
            <div className="score-circle">
              <span>{finalScore}</span> / {questions.length}
            </div>
            <p className="score-text">
              {finalScore === 10 ? "Xuất sắc! Bạn đã nắm vững kiến thức." : 
               finalScore >= 7 ? "Làm tốt lắm! Kiến thức của bạn khá vững." : 
               "Hãy cố gắng hơn nhé! Bạn có thể đọc lại sách để ôn tập."}
            </p>
            
            <div className="score-actions">
              <button className="btn-restart" onClick={handleRestart}>
                <FaRedo /> Làm lại
              </button>
              <button className="btn-home" onClick={() => navigate('/')}>
                <FaArrowLeft /> Về trang chủ
              </button>
            </div>
          </div>
        ) : (
          
          /* MÀN HÌNH CÂU HỎI */
          <>
            <div className="question-section">
              <div className="question-header">
                <span className="question-count">
                  Câu hỏi {currentQuestion + 1}/{questions.length}
                </span>
                <button className="btn-exit-quiz" onClick={() => navigate('/')}>Thoát</button>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => {
                // Kiểm tra xem đáp án này có đang được chọn không
                const isSelected = userAnswers[currentQuestion] === index;
                
                return (
                  <button
                    key={index}
                    className={`answer-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    {answerOption.answerText}
                  </button>
                );
              })}
            </div>

            {/* --- THANH ĐIỀU HƯỚNG MỚI --- */}
            <div className="navigation-footer">
              <button 
                className="btn-nav btn-prev" 
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0} // Ẩn/Disable nếu là câu đầu
              >
                <FaArrowLeft /> Quay lại
              </button>

              <button 
                className="btn-nav btn-next" 
                onClick={handleNextQuestion}
                disabled={userAnswers[currentQuestion] === null} // Disable nếu chưa chọn
              >
                {currentQuestion === questions.length - 1 ? (
                  <>Hoàn thành <FaCheck /></>
                ) : (
                  <>Tiếp theo <FaArrowRight /></>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;