@echo off
chcp 65001 > nul
title Khởi Động Khải Thiên Furnishing Landing Page
color 0B
echo ======================================================================
echo   KHỞI CHẠY LANDING PAGE: KHẢI THIÊN FURNISHING (noithatkhaithien.com)
echo ======================================================================
echo.
echo [1/1] Đang khởi động dev server (npm run dev)...
echo Dự án sẽ tự động bật trình duyệt tại http://localhost:3000...
echo.
call npm run dev
pause

