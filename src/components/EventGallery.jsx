import { Box } from "@mui/material";


export default function EventGallery({ isDark, photos }) {

  // Eğer dışarıdan fotoğraf gönderilmezse hata vermemesi için boş dizi 
  const galleryPhotos = photos || [];

  return (
    <Box sx={{ py: 8, overflow: "hidden", width: "100%" }}>
      {/* 1. DIŞ TAŞIYICI */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "max-content",
          "&:hover .kayan-kutu": {
            animationPlayState: "paused",
          },
        }}
      >
        {/* 2 Kez Döndürme */}
        {[1, 2].map((blokId) => (
          <Box
            key={blokId}
            className="kayan-kutu"
            sx={{
              display: "flex",
              gap: 3,
              animation: "sonsuz-kayma 40s linear infinite",
            }}
          >
            {/* BURASI DEĞİŞTİ: Artık dışarıdan gelen galleryPhotos dizisini kullanıyoruz */}
            {galleryPhotos.map((photo, index) => (
              <Box
                key={index}
                component="img"
                src={photo}
                alt={`Etkinlik ${index + 1}`}
                sx={{
                  height: { xs: 200, md: 300 },
                  width: { xs: 300, md: 450 },
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: isDark
                    ? "0 8px 24px rgba(21, 229, 229, 0.08)"
                    : "0 8px 24px rgba(18, 25, 54, 0.1)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05) translateY(-10px)",
                    boxShadow: "0 16px 40px rgba(21, 229, 229, 0.4)",
                  },
                }}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
