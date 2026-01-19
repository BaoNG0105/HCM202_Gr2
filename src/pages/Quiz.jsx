import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShip, FaFlagCheckered, FaHeart, FaRegHeart, FaHome, FaRedo } from 'react-icons/fa';
import './Quiz.css';

const Quiz = () => {
  const navigate = useNavigate();

  // --- DỮ LIỆU CÂU HỎI ---
  const questions = [
    {
      questionText: 'Câu 1: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là sản phẩm của sự kết hợp giữa các yếu tố nào?',
      answerOptions: [
        { answerText: 'A. Chủ nghĩa Mác - Lênin và phong trào công nhân.', isCorrect: false },
        { answerText: 'B. Chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước.', isCorrect: true },
        { answerText: 'C. Chủ nghĩa Mác - Lênin và tư tưởng truyền thống dân tộc.', isCorrect: false },
        { answerText: 'D. Phong trào công nhân và phong trào yêu nước.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 2: Hồ Chí Minh khẳng định: "Đảng muốn vững thì phải có..."?',
      answerOptions: [
        { answerText: 'A. Nhiều đảng viên.', isCorrect: false },
        { answerText: 'B. Nhiều vũ khí.', isCorrect: false },
        { answerText: 'C. Chủ nghĩa làm cốt.', isCorrect: true },
        { answerText: 'D. Tài chính vững mạnh.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 3: Trong tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam là Đảng của ai?',
      answerOptions: [
        { answerText: 'A. Chỉ của giai cấp công nhân.', isCorrect: false },
        { answerText: 'B. Của giai cấp công nhân và nhân dân lao động.', isCorrect: false },
        { answerText: 'C. Của giai cấp công nhân, của nhân dân lao động và của dân tộc Việt Nam.', isCorrect: true },
        { answerText: 'D. Của toàn bộ tầng lớp trí thức.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 4: Luận điểm "Đảng ta là đạo đức, là văn minh" được Hồ Chí Minh trình bày tại sự kiện nào?',
      answerOptions: [
        { answerText: 'A. Lễ kỷ niệm 30 năm thành lập Đảng (1960).', isCorrect: true },
        { answerText: 'B. Đại hội II của Đảng (1951).', isCorrect: false },
        { answerText: 'C. Đại hội III của Đảng (1960).', isCorrect: false },
        { answerText: 'D. Hội nghị Trung ương 4 (1961).', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 5: Nguyên tắc tổ chức cơ bản nhất của Đảng theo tư tưởng Hồ Chí Minh là gì?',
      answerOptions: [
        { answerText: 'A. Tự phê bình và phê bình.', isCorrect: false },
        { answerText: 'B. Tập trung dân chủ.', isCorrect: true },
        { answerText: 'C. Kỷ luật nghiêm minh, tự giác.', isCorrect: false },
        { answerText: 'D. Đoàn kết thống nhất.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 6: Hồ Chí Minh ví việc "Tự phê bình và phê bình" trong Đảng giống như việc gì hằng ngày?',
      answerOptions: [
        { answerText: 'A. Ăn cơm.', isCorrect: false },
        { answerText: 'B. Rửa mặt.', isCorrect: true },
        { answerText: 'C. Quét nhà.', isCorrect: false },
        { answerText: 'D. Tập thể dục.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 7: Theo Hồ Chí Minh, "Giữ gìn sự đoàn kết nhất trí của Đảng như..."?',
      answerOptions: [
        { answerText: 'A. Giữ gìn danh dự cá nhân.', isCorrect: false },
        { answerText: 'B. Giữ gìn con ngươi của mắt mình.', isCorrect: true },
        { answerText: 'C. Giữ gìn tính mạng của mình.', isCorrect: false },
        { answerText: 'D. Giữ gìn tài sản của quốc gia.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 8: Hồ Chí Minh khẳng định: "Cán bộ là cái... của mọi công việc."',
      answerOptions: [
        { answerText: 'A. Gốc.', isCorrect: true },
        { answerText: 'B. Ngọn.', isCorrect: false },
        { answerText: 'C. Thân.', isCorrect: false },
        { answerText: 'D. Lá.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 9: Để xây dựng Đảng trong sạch, vững mạnh, Hồ Chí Minh đặc biệt nhấn mạnh việc phòng chống loại giặc nào?',
      answerOptions: [
        { answerText: 'A. Giặc đói.', isCorrect: false },
        { answerText: 'B. Giặc dốt.', isCorrect: false },
        { answerText: 'C. Giặc ngoại xâm.', isCorrect: false },
        { answerText: 'D. Giặc nội xâm (Tham ô, lãng phí, quan liêu).', isCorrect: true },
      ],
    },
    {
      questionText: 'Câu 10: Vai trò của Đảng Cộng sản Việt Nam trong hệ thống chính trị là gì?',
      answerOptions: [
        { answerText: 'A. Quản lý xã hội.', isCorrect: false },
        { answerText: 'B. Lãnh đạo Nhà nước và xã hội.', isCorrect: true },
        { answerText: 'C. Thực hiện phản biện xã hội.', isCorrect: false },
        { answerText: 'D. Giám sát các hoạt động hành pháp.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 11: "Nhà nước của nhân dân" theo tư tưởng Hồ Chí Minh có nghĩa là gì?',
      answerOptions: [
        { answerText: 'A. Mọi quyền lực trong Nhà nước và xã hội đều thuộc về nhân dân.', isCorrect: true },
        { answerText: 'B. Nhân dân chỉ đi bầu cử rồi giao lại quyền cho cán bộ.', isCorrect: false },
        { answerText: 'C. Nhà nước do cấp trên bổ nhiệm xuống.', isCorrect: false },
        { answerText: 'D. Nhà nước chỉ phục vụ người nghèo.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 12: Đặc điểm nào sau đây thể hiện bản chất "Nhà nước do nhân dân"?',
      answerOptions: [
        { answerText: 'A. Nhân dân đóng thuế để nuôi bộ máy nhà nước.', isCorrect: false },
        { answerText: 'B. Nhân dân lựa chọn, bầu ra những đại biểu thay mặt mình quản lý nhà nước.', isCorrect: true },
        { answerText: 'C. Nhà nước làm mọi việc thay cho dân.', isCorrect: false },
        { answerText: 'D. Dân không có quyền bãi miễn đại biểu.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 13: Quan điểm "Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì có hại cho dân, ta phải hết sức tránh" thể hiện bản chất nào của Nhà nước?',
      answerOptions: [
        { answerText: 'A. Nhà nước của dân.', isCorrect: false },
        { answerText: 'B. Nhà nước vì dân.', isCorrect: true },
        { answerText: 'C. Nhà nước pháp quyền.', isCorrect: false },
        { answerText: 'D. Nhà nước dân chủ.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 14: Theo Hồ Chí Minh, bản chất giai cấp công nhân của Nhà nước ta thống nhất với yếu tố nào?',
      answerOptions: [
        { answerText: 'A. Tính nhân dân và tính dân tộc.', isCorrect: true },
        { answerText: 'B. Tính quốc tế.', isCorrect: false },
        { answerText: 'C. Tính tôn giáo.', isCorrect: false },
        { answerText: 'D. Tính giai cấp phong kiến.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 15: Nội dung cốt lõi của Nhà nước pháp quyền theo tư tưởng Hồ Chí Minh là gì?',
      answerOptions: [
        { answerText: 'A. Nhà nước không cần luật pháp.', isCorrect: false },
        { answerText: 'B. Quản lý xã hội bằng pháp luật và đề cao Hiến pháp.', isCorrect: true },
        { answerText: 'C. Chỉ sử dụng đạo đức để quản lý xã hội.', isCorrect: false },
        { answerText: 'D. Quyền lực tập trung vào một cá nhân.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 16: Bản Hiến pháp đầu tiên của nước ta năm 1946 do Hồ Chí Minh làm Trưởng ban soạn thảo mang đậm tư tưởng gì?',
      answerOptions: [
        { answerText: 'A. Tư tưởng quân chủ.', isCorrect: false },
        { answerText: 'B. Tư tưởng dân chủ pháp trị.', isCorrect: true },
        { answerText: 'C. Tư tưởng vô chính phủ.', isCorrect: false },
        { answerText: 'D. Tư tưởng độc tài.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 17: Để đảm bảo tính nghiêm minh của pháp luật, Hồ Chí Minh yêu cầu cán bộ phải là người như thế nào?',
      answerOptions: [
        { answerText: 'A. Đứng ngoài vòng pháp luật.', isCorrect: false },
        { answerText: 'B. Gương mẫu chấp hành pháp luật, "pháp bất vị thân".', isCorrect: true },
        { answerText: 'C. Có quyền linh hoạt thay đổi luật theo ý muốn.', isCorrect: false },
        { answerText: 'D. Chỉ thực hiện luật khi có người giám sát.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 18: Hồ Chí Minh chủ trương xây dựng cơ chế kiểm soát quyền lực nhà nước như thế nào?',
      answerOptions: [
        { answerText: 'A. Nhân dân kiểm soát và các cơ quan nhà nước tự kiểm soát lẫn nhau.', isCorrect: true },
        { answerText: 'B. Không cần kiểm soát vì cán bộ đều là người tốt.', isCorrect: false },
        { answerText: 'C. Chỉ có Đảng mới có quyền kiểm soát.', isCorrect: false },
        { answerText: 'D. Chỉ để cấp trên kiểm soát cấp dưới.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 19: Theo Hồ Chí Minh, tiêu chuẩn hàng đầu của người cán bộ trong bộ máy Nhà nước là gì?',
      answerOptions: [
        { answerText: 'A. Giàu có, quyền thế.', isCorrect: false },
        { answerText: 'B. Là "công bộc", là "đầy tớ" của nhân dân.', isCorrect: true },
        { answerText: 'C. Khéo léo che đậy khuyết điểm.', isCorrect: false },
        { answerText: 'D. Có trình độ học vấn cao nhưng không cần đạo đức.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 20: Mục tiêu cao nhất của việc xây dựng Nhà nước dân chủ pháp quyền theo Hồ Chí Minh là gì?',
      answerOptions: [
        { answerText: 'A. Để thế giới công nhận.', isCorrect: false },
        { answerText: 'B. Để khẳng định quyền lực của bộ máy quản lý.', isCorrect: false },
        { answerText: 'C. Đảm bảo quyền làm chủ thực sự của nhân dân và phục vụ lợi ích của dân.', isCorrect: true },
        { answerText: 'D. Để thực hiện các cuộc vận động kinh tế.', isCorrect: false },
      ],
    },
  ];

  // --- STATES GAME ---
  const [gameState, setGameState] = useState('welcome'); // 'welcome', 'playing', 'finished'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5); // Game có 5 mạng
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Lưu đáp án vừa chọn
  const [isAnswering, setIsAnswering] = useState(false); // Chặn click khi đang chờ chuyển câu

  // --- LOGIC GAME ---
  const handleStart = () => {
    setGameState('playing');
    setLives(5);
    setScore(0);
    setCurrentQuestion(0);
    // [FIX 2] Reset lại trạng thái trả lời để các nút không bị khóa/hiện màu cũ
    setSelectedAnswer(null);
    setIsAnswering(false);
  };

  const handleAnswerClick = (isCorrect) => {
    if (isAnswering) return; // Không cho click liên tục
    setIsAnswering(true);
    setSelectedAnswer(isCorrect); // Để CSS biết đúng hay sai

    // Xử lý Logic
    if (isCorrect) {
      setScore(score + 1);
      // Âm thanh 'ting' (nếu muốn)
    } else {
      setLives(lives - 1);
      // Rung màn hình hoặc âm thanh sai
    }

    // Đợi 1s để người chơi nhìn thấy kết quả rồi mới chuyển
    setTimeout(() => {
      // Kiểm tra nếu hết mạng
      if (lives - (isCorrect ? 0 : 1) <= 0) {
        setGameState('finished');
      } else {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null);
          setIsAnswering(false);
        } else {
          setGameState('finished'); // Hết câu hỏi -> Win
        }
      }
    }, 1000);
  };

  // [FIX 1] Tính % tiến độ dựa trên SCORE (số câu đúng) thay vì số câu đã qua
  // Điều này đảm bảo trả lời sai thì thuyền đứng yên.
  const progressPercentage = (score / questions.length) * 100;

  return (
    <div className="quiz-page-wrapper">
      {/* Trang trí sóng biển */}
      <div className="ocean-waves"></div>

      <main className="quiz-body">

        {/* THANH TIẾN ĐỘ (CON THUYỀN) - Chỉ hiện khi đang chơi */}
        {gameState === 'playing' && (
          <div className="game-progress-track">
            {/* Con thuyền di chuyển theo % ĐIỂM SỐ */}
            <div
              className="ship-icon"
              style={{ left: `${progressPercentage}%` }}
            >
              <img src="/img/ship.png" alt="Con thuyền" className="ship-img-moving" />
            </div>
            {/* Cờ đích */}
            <div className="flag-icon"><FaFlagCheckered /></div>
          </div>
        )}

        <div className="quiz-container">

          {/* 1. MÀN HÌNH CHÀO MỪNG */}
          {gameState === 'welcome' && (
            <div className="welcome-section">
              <div className="welcome-icon"></div>
              <img src="/img/ship.png" alt="Welcome Ship" className="welcome-ship-img" />
              <h1>Vượt Sóng Ra Khơi</h1>
              <p>Chào mừng đồng chí đến với hành trình tìm kiếm chân lý!</p>
              <p>Hãy giúp con thuyền Cách mạng vượt qua <strong>{questions.length} thử thách</strong> để cập bến vinh quang.</p>
              <div style={{ margin: '20px 0', fontSize: '0.9rem', color: '#666' }}>
                Luật chơi: Bạn có <span style={{ color: 'red' }}>5 <FaHeart /></span>. Trả lời sai sẽ mất 1 mạng.
              </div>
              <button className="btn-start" onClick={handleStart}>Ra Khơi Ngay</button>
            </div>
          )}

          {/* 2. MÀN HÌNH CHƠI GAME */}
          {gameState === 'playing' && (
            <>
              <div className="game-header">
                <div className="lives">
                  {/* Render số tim */}
                  {[...Array(5)].map((_, i) => (
                    i < lives ? <FaHeart key={i} /> : <FaRegHeart key={i} style={{ opacity: 0.3 }} />
                  ))}
                </div>
                <div className="score-board">
                  Câu: {currentQuestion + 1}/{questions.length}
                </div>
              </div>

              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>

              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((option, index) => {
                  // Logic đổi màu nút
                  let btnClass = "answer-btn";
                  if (selectedAnswer !== null) { // Người dùng đã bấm chọn
                    if (option.isCorrect) btnClass += " correct"; // Hiện màu xanh cho đáp án đúng
                    // Nếu bấm sai thì hiện màu đỏ ở nút vừa bấm
                    else if (selectedAnswer === false && isAnswering) btnClass += " wrong";
                  }

                  return (
                    <button
                      key={index}
                      className={btnClass}
                      onClick={() => handleAnswerClick(option.isCorrect)}
                      disabled={isAnswering} // Khóa nút khi đang chờ chuyển
                    >
                      {option.answerText}
                    </button>
                  )
                })}
              </div>
            </>
          )}

          {/* 3. MÀN HÌNH KẾT THÚC */}
          {gameState === 'finished' && (
            <div className="score-section">
              <div className="welcome-icon">
                {lives <= 0 ? (
                  /* Trường hợp 1: Thua (Hết mạng) */
                  <img src="/img/ship.png" alt="Thuyền chìm" className="result-ship-img sunk" />                ) : score === questions.length ? (
                  /* Trường hợp 2: Thắng tuyệt đối 20/20 */
                  <FaFlagCheckered style={{ color: '#d4af37' }} />
                ) : (
                  /* Trường hợp 3: Còn mạng nhưng không đúng hết */
                  <img src="/img/ship.png" alt="Thuyền về đích" className="result-ship-img" />)}
              </div>

              {/* LOGIC TIÊU ĐỀ MỚI */}
              <h2>
                {lives <= 0
                  ? "THUYỀN GẶP BÃO!"
                  : score === questions.length
                    ? "CẬP BẾN THÀNH CÔNG!"
                    : "HÀNH TRÌNH KẾT THÚC"}
              </h2>

              <p className="score-text">
                {lives <= 0 ? (
                  /* Nội dung khi Thua */
                  `Rất tiếc, hành trình đã dừng lại ở câu số ${currentQuestion + 1}. Hãy ôn tập lại kiến thức nhé!`
                ) : score === questions.length ? (
                  /* Nội dung khi Thắng tuyệt đối */
                  `Xuất sắc! Bạn đã trả lời đúng tuyệt đối ${score}/${questions.length} câu hỏi và cập bến vinh quang.`
                ) : (
                  /* Nội dung khi Thắng nhưng chưa tuyệt đối */
                  `Bạn đã về đích với ${score}/${questions.length} câu đúng. Tuy nhiên, để gọi là "Cập bến thành công", bạn cần trả lời đúng tất cả các câu hỏi. Hãy thử lại nhé!`
                )}
              </p>

              <div className="score-actions">
                <button className="btn-restart" onClick={handleStart}>
                  <FaRedo /> Chơi Lại
                </button>
                <button className="btn-home" onClick={() => navigate('/')}>
                  <FaHome /> Về Trang Chủ
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Quiz;