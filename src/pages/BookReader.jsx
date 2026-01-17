import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import Page from '../components/Page';
import './BookReader.css';
import Header from '../components/Header';

// Import Icons
import {
    FaChevronLeft, FaChevronRight, FaPlay, FaPause,
    FaSearchPlus, FaSearchMinus, FaList, FaExpand, FaCompress, FaTimes
} from 'react-icons/fa';

// Import pages images
const pagesImage = [
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
    '/img/4.png',
    '/img/5.png',
    '/img/6.png',
    '/img/7.png',
    '/img/8.png',
    '/img/9.png',
    '/img/10.png',
    '/img/11.png',
    '/img/12.png',
];

function BookReader() {
    const bookRef = useRef();

    // Navigation
    const navigate = useNavigate();

    // States
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mặc định mở Sidebar: Hiện tại đóng
    const [zoomScale, setZoomScale] = useState(1); // Zoom mặc định 100%
    const [isFullscreen, setIsFullscreen] = useState(false);

    // --- LOGIC LẬT TRANG & AUTO PLAY (Giữ nguyên như cũ) ---
    const nextFlip = () => bookRef.current?.pageFlip().flipNext();
    const prevFlip = () => bookRef.current?.pageFlip().flipPrev();

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                try { bookRef.current?.pageFlip().flipNext(); } catch (e) { setIsPlaying(false); }
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const onFlip = (e) => {
        setCurrentPage(e.data);
    };

    const onInit = (e) => {
        setTotalPage(bookRef.current.pageFlip().getPageCount());
    }

    // --- TÍNH NĂNG MỚI ---

    // 1. Zoom In/Out
    const handleZoom = (direction) => {
        setZoomScale(prev => {
            if (direction === 'in') return Math.min(prev + 0.2, 2.0); // Max zoom 2x
            if (direction === 'out') return Math.max(prev - 0.2, 0.6); // Min zoom 0.6x
            return prev;
        });
    };

    // 2. Fullscreen
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    // 3. Chuyển đến trang cụ thể (từ mục lục)
    const goToPage = (pageIndex) => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flip(pageIndex);
        }
    };

    return (
        <div className="book-page-layout">
            <Header />
            <div className="book-reader-container">

                {/* SIDEBAR - MỤC LỤC */}
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <span>Table of Contents</span>
                        <FaTimes style={{ cursor: 'pointer' }} onClick={() => setIsSidebarOpen(false)} />
                    </div>
                    <ul className="toc-list">
                        {/* Giả lập mục lục */}
                        <li className="toc-item" onClick={() => goToPage(0)}>Trang Bìa</li>
                        <li className="toc-item" onClick={() => goToPage(1)}>SỰ RA ĐỜI VÀ VAI TRÒ CỦA ĐẢN</li>
                        <li className="toc-item" onClick={() => goToPage(2)}>ĐẢNG PHẢI TRONG SẠCH, VỮNG SẠCH</li>
                        <li className="toc-item" onClick={() => goToPage(3)}>BẢN CHẤT NHÀ NƯỚC VIỆT NAM</li>
                        <li className="toc-item" onClick={() => goToPage(4)}>NHÀ NƯỚC CỦA NHÂN DÂN</li>
                        <li className="toc-item" onClick={() => goToPage(5)}>NHÀ NƯỚC DO NHÂN DÂN & vÌ NHÂN DÂN</li>
                        <li className="toc-item" onClick={() => goToPage(6)}>NHÀ NƯỚC PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA</li>
                        <li className="toc-item" onClick={() => goToPage(7)}>NHÀ NƯỚC TRONG SẠCH & KIỂM SOÁT QUYỀN LỰC</li>
                        <li className="toc-item" onClick={() => goToPage(8)}>VẬN DỤNG: XÂY DỰNG ĐẢNG "VỪA HỒNG, VỪA CHUYÊN"</li>
                        <li className="toc-item" onClick={() => goToPage(9)}>VẬN DỤNG: XÂY DỰNG NHÀ NƯỚC PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA</li>
                        <li className="toc-item" onClick={() => goToPage(10)}>QUYẾT LIỆT PHÒNG, CHỐNG THAM NHŨNG</li>
                        <li className="toc-item" onClick={() => goToPage(11)}>Trang Kết Thúc</li>
                    </ul>
                </div>

                {/* KHU VỰC CHÍNH */}
                <div className="main-content">
                    {/* Header hiển thị số trang */}
                    <div className="top-bar">
                        {/* Số trang hiển thị ở giữa */}
                        <span className="page-counter">{currentPage + 1} / {totalPage}</span>

                        {/* 3. Thêm nút Thoát ở đây */}
                        <button
                            className="btn-exit"
                            onClick={() => navigate('/')}
                            title="Thoát ra trang chủ"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Khu vực chứa sách + Mũi tên điều hướng */}
                    <div className="book-viewport">
                        {/* Nút Previous lớn bên trái */}
                        <button className="nav-btn nav-prev" onClick={prevFlip}>
                            <FaChevronLeft />
                        </button>

                        {/* SÁCH (Được bọc div để Zoom) */}
                        <div style={{ transform: `scale(${zoomScale})`, transition: 'transform 0.3s ease' }}>
                            <HTMLFlipBook
                                width={300}
                                height={500}
                                size="stretch"
                                minWidth={280}
                                maxWidth={500}
                                minHeight={350}
                                maxHeight={700}
                                showCover={true}
                                usePortrait={false}
                                mobileScrollSupport={true}
                                onFlip={onFlip}
                                onInit={onInit}
                                ref={bookRef}
                                className="my-book"
                            >
                                {pagesImage.map((path, index) => (
                                    <Page key={index} number={index + 1} image={path} />
                                ))}
                            </HTMLFlipBook>
                        </div>

                        {/* Nút Next lớn bên phải */}
                        <button className="nav-btn nav-next" onClick={nextFlip}>
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* BOTTOM TOOLBAR */}
                    <div className="bottom-toolbar">
                        {/* Nút Zoom */}
                        <button className="tool-btn" onClick={() => handleZoom('out')}><FaSearchMinus /></button>
                        <button className="tool-btn" onClick={() => handleZoom('in')}><FaSearchPlus /></button>

                        <div className="separator"></div>

                        {/* Nút Mục lục */}
                        <button className="tool-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <FaList />
                        </button>

                        {/* Nút Auto Play */}
                        <button className={`tool-btn ${isPlaying ? 'active' : ''}`} onClick={() => setIsPlaying(!isPlaying)}>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>

                        <div className="separator"></div>

                        {/* Nút Fullscreen */}
                        <button className="tool-btn" onClick={toggleFullscreen}>
                            {isFullscreen ? <FaCompress /> : <FaExpand />}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookReader;