import React, { useState } from 'react';
import { Box } from '@mui/material';

export default function InteractiveLogo({ src, alt }) {
  // Logonun dönüş (eğim) derecelerini tutacağımız state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
  // Farenin logonun üzerinde olup olmadığını takip ediyoruz
  const [isHovered, setIsHovered] = useState(false);

  // Fare logonun üzerinde hareket ettikçe çalışacak fonksiyon
  const handleMouseMove = (e) => {
    // Logonun ekrandaki konumunu ve boyutlarını alıyoruz
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Farenin logonun sol üst köşesine göre nerede olduğunu buluyoruz
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Logonun tam orta noktasını hesaplıyoruz
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Farenin merkeze olan uzaklığına göre dönüş derecesi belirliyoruz (Maksimum 15 derece)
    const rotateX = ((y - centerY) / centerY) * -15; // Fare aşağıdaysa yukarı, yukarıdaysa aşağı dönsün
    const rotateY = ((x - centerX) / centerX) * 15;  // Fare sağdaysa sağa, soldaysa sola dönsün

    setTilt({ x: rotateX, y: rotateY });
    setIsHovered(true);
  };

  // Fare logodan çıkınca değerleri sıfırlayarak eski haline döndürüyoruz
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "60%",
        height: "auto",
        objectFit: "contain",
        cursor: "pointer",
        // Fare üzerindeyken anında takip etmesi için transition'ı kapatıyoruz (çok daha akıcı olur)
        // Fare çıkınca eski yerine yumuşakça dönmesi için transition ekliyoruz
        transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), filter 0.5s ease",
        
        // perspective(1000px): 3D derinlik hissini yaratır (olmazsa düz bir resim gibi döner)
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale(1.1)' : 'scale(1)'}`,
        
        // ESTÜ Kurumsal rengi ile neon parlama[cite: 1]
        filter: isHovered 
          ? "drop-shadow(0 15px 30px rgba(21, 229, 229, 0.4))" 
          : "drop-shadow(0 0 0 rgba(0,0,0,0))",
      }}
    />
  );
}