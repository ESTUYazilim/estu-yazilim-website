import React, { useState } from 'react';
import { Box } from '@mui/material';

export default function EasterEggLogo({ isDark }) {
  // Logonun kayma mesafesini ve kaçma sayısını tutan state
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);

  // Mouse logonun üzerine her geldiğinde çalışır
  const handleMouseEnter = () => {
    // -80px ile +80px arasında rastgele bir yöne kaçış mesafesi
    const randomX = (Math.random() - 0.5) * 160;
    const randomY = (Math.random() - 0.5) * 160;

    setOffset({ x: randomX, y: randomY });
    setEscapeCount((prev) => prev + 1);
  };

  // Easter egg: Eğer 5 kez yakalamaya çalışırsa orijinal yerine dönsün
  const handleClick = () => {
    alert("🎉 Tebrikler! Kaçan logoyu yakaladın!");
    setOffset({ x: 0, y: 0 });
    setEscapeCount(0);
    sx={
      transform: 'bounce',
    }
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        display: 'inline-block',
        // Yumuşak kaçış efekti sağlayan transition
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        // Hem kaçış koordinatını hem de süzülme animasyonunu birleştiriyoruz
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        userSelect: 'none',
      }}
    >
      <img
        src={isDark ? "/beyaz-tam.png" : "/beyaz-tam.png"}
        alt="Kaçan Logo"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          pointerEvents: "auto",
        }}
      />
    </Box>
  );
}