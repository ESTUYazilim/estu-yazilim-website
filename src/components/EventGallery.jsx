import React from 'react';
import { Box, Typography } from '@mui/material';

// Buraya etkinlik fotoğraflarının yollarını ekleyeceksin
const eventPhotos = [
  "../../public/events/etkinlik1.jpg",
  "../../public/events/etkinlik2.jpg",
  "../../public/events/etkinlik3.jpg",
  "../../public/events/etkinlik4.jpg",
  "../../public/events/etkinlik5.jpg",
  "../../public/events/etkinlik6.jpg",
];

export default function EventGallery({ isDark }) {
  return (
    <Box sx={{ py: 8, overflow: 'hidden', width: '100%' }}>
      


      {/* 1. DIŞ TAŞIYICI (Taşan fotoğrafları gizler ve Flex yapısı kurar) */}
      <Box
        sx={{
          display: 'flex',
          gap: 3, // İki fotoğraf bloğu arasındaki boşluk
          width: 'max-content',
          // Fare galeriye girdiğinde animasyonu duraklatır (Kullanıcı fotoğrafı inceleyebilir)
          '&:hover .kayan-kutu': {
            animationPlayState: 'paused',
          },
        }}
      >
        
        {/* Kesintisiz döngü için aynı bloğu yan yana 2 kez yazdırıyoruz */}
        {[1, 2].map((blokId) => (
          
          /* 2. İÇ TAŞIYICI (Hareket eden asıl kutu) */
          <Box
            key={blokId}
            className="kayan-kutu"
            sx={{
              display: 'flex',
              gap: 3, // Fotoğraflar arası boşluk
              // 40 saniyede bir tur atar, 'linear' ile hızı hep sabit kalır
              animation: 'sonsuz-kayma 40s linear infinite',
            }}
          >
            {eventPhotos.map((photo, index) => (
              
              /* FOTOĞRAF KARTI */
              <Box
                key={index}
                component="img"
                src={photo}
                alt={`Etkinlik ${index + 1}`}
                sx={{
                  height: { xs: 200, md: 300 }, // Mobilde daha küçük, bilgisayarda büyük
                  width: { xs: 300, md: 450 },  // 16:9 geniş ekran formatına yakın
                  objectFit: 'cover', // Fotoğrafların en-boy oranını bozmadan kutuyu doldurur
                  borderRadius: 4,
                  // ESTÜ kurumsal cam göbeği/turkuaz rengi ile hafif gölge (Karanlık temaya uyumlu)[cite: 1]
                  boxShadow: isDark 
                    ? '0 8px 24px rgba(21, 229, 229, 0.08)' 
                    : '0 8px 24px rgba(18, 25, 54, 0.1)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  cursor: 'pointer',
                  
                  // Farenin üzerine geldiği tekil fotoğraf parlar ve büyür
                  '&:hover': {
                    transform: 'scale(1.05) translateY(-10px)', // Büyüt ve yukarı kaldır
                    boxShadow: '0 16px 40px rgba(21, 229, 229, 0.4)', // Parlak Turkuaz neon efekt[cite: 1]
                  }
                }}
              />
            ))}
          </Box>
        ))}
        
      </Box>
    </Box>
  );
}