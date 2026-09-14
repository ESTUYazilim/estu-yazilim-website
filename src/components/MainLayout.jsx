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
          ? "radial-gradient(circle at 12% 0%, rgba(21, 229, 229, 0.2) 0%, transparent 30%), radial-gradient(circle at 88% 82%, rgba(91, 111, 214, 0.18) 0%, transparent 34%), linear-gradient(120deg, #070b16 0%, #364b9e 52%, #121936 100%)"
          : "radial-gradient(circle at 12% 0%, rgba(21, 229, 229, 0.22) 0%, transparent 30%), radial-gradient(circle at 88% 82%, rgba(91, 111, 214, 0.16) 0%, transparent 34%), linear-gradient(120deg, #f7ffff 0%, #dce9ff 52%, #f4f8ff 100%)",
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
            ? "radial-gradient(circle at 50% 0%, rgba(21, 229, 229, 0.08), transparent 38%), linear-gradient(to right, rgba(168, 244, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 244, 255, 0.07) 1px, transparent 1px)"
            : "radial-gradient(circle at 50% 0%, rgba(21, 229, 229, 0.12), transparent 38%), linear-gradient(to right, rgba(54, 75, 158, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(54, 75, 158, 0.08) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 42px 42px, 42px 42px",
          backgroundRepeat: "no-repeat, repeat, repeat",
        }}
      >
        {/* SOL SÜTUN */}
        {/* 1. SOL SÜTUN (Hareketli Logo) */}
        {/* SOL LOGO */}
        <Box
          sx={{
            width: { xs: "0%", md: "20%", lg: "15%" },
            display: { xs: "none", md: "flex" },
            maxWidth: "150px",
            justifyContent: "flex-start", 
          }}
        >
          <InteractiveLogo
            src={isDark ? "/estu-yazilim-website/beyaz_sol.png" : "/estu-yazilim-website/sol.png"}
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

        {/* Sağ SÜTUN */}
        <Box
          sx={{
            width: { xs: "0%", md: "20%", lg: "15%" },
            display: { xs: "none", md: "flex" },
            maxWidth: "150px", 
            justifyContent: "flex-end", 
          }}
        > 
          <InteractiveLogo
            src={isDark ? "/estu-yazilim-website/beyaz_sag.png" : "/estu-yazilim-website/sag.png"}
            alt="Sağ Logo"
          />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
