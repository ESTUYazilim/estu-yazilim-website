import { Typography, Paper, Grid } from "@mui/material";
import MainLayout from "../components/MainLayout";
import { useThemeMode } from "../ThemeContext";
import EventGallery from "../components/EventGallery";

export default function AboutPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MainLayout>
      {/* SADECE BU SAYFAYA ÖZEL İÇERİKLER */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          bgcolor: "background.paper",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
          mt: 4,
        }}
      >
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "text.primary",
                mb: 2,
              }}
            >
              CareerD+
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
              }}
            >
              CareerD+ etkinliklerimizde, sektör profesyonellerini üyelerimizle
              bir araya getirerek akademi ile iş dünyası arasında sağlam bir
              köprü kurmayı amaçlıyoruz. Bu sayede üyelerimiz henüz öğrenciyken
              iş hayatının dinamiklerini öğrenme, uzmanlara doğrudan soru sorma,
              ilgi duydukları alanları keşfetme ve staj/iş fırsatlarını yakalama
              şansı bulurlar.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          bgcolor: "background.paper",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
          mt: 4,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            fontWeight: "bold",
            color: isDark ? "white" : "#121936",
          }}
        >
          Etkinliklerimizden Kareler
        </Typography>
        <EventGallery isDark={isDark} />
      </Paper>
    </MainLayout>
  );
}
