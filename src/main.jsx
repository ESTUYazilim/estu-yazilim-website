import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamsPage from "./pages/TeamsPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import { ThemeModeProvider, useThemeMode } from "./ThemeContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppShell() {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>

        {/* 3. Sayfa içeriklerinin değişeceği alan */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/takimlar" element={<TeamsPage />} />
          <Route path="/etkinlikler" element={<EventsPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          {/* İhtiyacın olan diğer sayfaları da buraya alt alta ekleyebilirsin */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeModeProvider>
      <AppShell />
    </ThemeModeProvider>
  </StrictMode>,
);
