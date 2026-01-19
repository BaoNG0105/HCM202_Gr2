import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BookReader from './pages/BookReader';
import Quiz from './pages/Quiz';
import AiChatbot from './pages/Chatbot';
import MusicPlayer from './components/MusicPlayer';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MusicPlayer />

      <Routes>
        {/* Đường dẫn mặc định (Trang chủ) */}
        <Route path="/" element={<Home />} />

        {/* Đường dẫn giới thiệu về dự án */}
        <Route path="/about" element={<About />} />

        {/* Đường dẫn đọc sách */}
        <Route path="/e-book" element={<BookReader />} />

        {/* Đường dẫn làm quiz */}
        <Route path="/quiz" element={<Quiz />} />

        {/* Đường dẫn AI Chatbot */}
        <Route path="/ai-chatbot" element={<AiChatbot />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;