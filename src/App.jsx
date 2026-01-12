// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookReader from './pages/BookReader';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Đường dẫn mặc định (Trang chủ) */}
        <Route path="/" element={<Home />} />
        
        {/* Đường dẫn đọc sách */}
        <Route path="/book" element={<BookReader />} />
        
        {/* Đường dẫn làm quiz */}
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;