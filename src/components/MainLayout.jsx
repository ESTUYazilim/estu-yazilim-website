import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useThemeMode } from "../ThemeContext";
import InteractiveLogo from "./InteractiveLogo";
export default function MainLayout({ children }) {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: isDark
          ? "radial-gradient(circle at top, rgba(21, 229, 229, 0.12) 0%, transparent 35%), linear-gradient(180deg, #121936 0%, #0f1530 100%)"
          : "radial-gradient(circle at top, rgba(21, 229, 229, 0.18) 0%, transparent 35%), linear-gradient(180deg, #f5fbff 0%, #eaf8ff 100%)",
      }}
    >
      <Navbar />

      {/* ARKA PLAN VE SÜTUN TAŞIYICISI */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          overflow: "hidden",
          flexGrow: 1,
          position: "relative",
          color: "text.primary",
          backgroundImage: isDark
            ? `linear-gradient(to right, rgba(21,229,229,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,229,229,0.07) 1px, transparent 1px)`
            : `linear-gradient(to right, rgba(21,229,229,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,229,229,0.10) 1px, transparent 1px)`,
          backgroundSize: "42px 42px, 42px 42px",
          backgroundRepeat: "repeat, repeat",
        }}
      >
        {/* SOL SÜTUN */}
        {/* 1. SOL SÜTUN (Hareketli Logo) */}
        {/* SOL LOGO */}
        <Box
          sx={{
            width: { xs: "0%", md: "20%", lg: "15%" },
            display: { xs: "none", md: "flex" },
          }}
        >
          <InteractiveLogo
            src={isDark ? "/beyaz_sol.png" : "/sol.png"}
            alt="Sol Logo"
          />
        </Box>
        {/* ORTA SÜTUN (İÇERİK BURAYA GELECEK) */}
        <Box
          sx={{
            flexGrow: 1,
            width: { xs: "100%", md: "60%", lg: "70%" },
            p: { xs: 2, md: 4 },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative" }}>
            {/* HER SAYFANIN KENDİ İÇERİĞİ BURADA RENDER EDİLİR */}
            {children}
          </Container>
        </Box>

        {/* SAĞ SÜTUN */}
        <Box
          component="img"
          src={isDark ? "/beyaz_sag.png" : "/sag.png"}
          alt="Sağ Logo"
          sx={{
            width: "10%",
            height: "auto",
            objectFit: "contain",
            transition: "transform 0.4s ease-out, filter 0.4s ease-out",

            "&:hover": {
              // rotate(-4deg): Logoyu sola doğru 4 derece döndürür
              transform: "translateY(-15px) scale(1.08) rotate(-4deg)",
              filter: "drop-shadow(0 15px 25px rgba(21, 229, 229, 0.4))",
              cursor: "pointer",
            },
          }}
        />
      </Box>

      <Footer />
    </Box>
  );
}
