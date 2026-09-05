import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useThemeMode } from "../ThemeContext";

const serviceCards = [
  {
    title: "Kariyer ve Sektör Bağlantısı",
    text: "CareerD+ etkinliklerimizle sektör profesyonellerini üyelerimizle buluşturuyoruz. Uzmanlara doğrudan soru sorma, ilgi alanlarını keşfetme ve staj/iş fırsatlarını yakalama şansı sunuyoruz.",
  },
  {
    title: "Yazılım Geliştirme",
    text: "Web, mobil ve yapay zekâ alanlarında çalışan ekiplerimizle gerçek projeler üretiyoruz. Fikirden koda giden süreçte birlikte öğreniyor, birlikte inşa ediyoruz.",
  },
  {
    title: "Topluluk ve Etkinlik",
    text: "Workshoplar, meetup'lar ve sosyal etkinliklerle kulüp ruhunu canlı tutuyoruz. Yazılımı sadece kod değil, birlikte üretilen bir deneyim olarak yaşıyoruz.",
  },
  {
    title: "Mentorluk ve Eğitim",
    text: "Yeni üyelerimize deneyimli üyelerimiz eşlik ediyor. Düzenli eğitimler ve atölyelerle teorik bilgiyi pratiğe dönüştürüyoruz.",
  },
];

const highlights = [
  "Workshoplar",
  "Öğrenci odaklı proje ekipleri",
  "Yapay zeka, web ve mobil çalışma grupları",
];

const metrics = [
  { value: "400+", label: "Üye sayısı" },
  { value: "15", label: "Bu yıl düzenlenen etkinlik sayısı" },
  { value: "100%", label: "Öğrenci odaklı yapı" },
];

export default function PageLayout() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box
      id="anasayfa"
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
            ? `
              linear-gradient(to right, rgba(21,229,229,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(21,229,229,0.07) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(21,229,229,0.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(21,229,229,0.10) 1px, transparent 1px)
            `,
          backgroundSize: "42px 42px, 42px 42px",
          backgroundRepeat: "repeat, repeat",
        }}
      >
        {/* 1. SOL SÜTUN (Görsel) */}
        <Box
          sx={{
            // Genişlik: Mobilde 0, tablet ve üstünde %15-%20 arası
            width: { xs: "0%", md: "20%", lg: "15%" },
            // Mobilde yan görselleri gizleyerek içeriğe yer açıyoruz
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-start",
            alignItems: "flex-start", // Görseli yukarı yaslar
          }}
        >
          <img
            src= {isDark ? "./beyaz_sol.png" : "./sol.png"}
            alt="Sol"
            // Görsel genişliği kutuyu doldurur, yüksekliği otomatik ayarlanır
            style={{ width: "30%", height: "auto", objectFit: "contain" }}
          />
        </Box>

        {/* 2. ORTA SÜTUN (Ana İçerik) */}
        {/* Ortadaki içerik kalan tüm boşluğu (flexGrow: 1) doldurur */}
        <Box
          sx={{
            flexGrow: 1,
            width: { xs: "100%", md: "60%", lg: "70%" },
            p: { xs: 2, md: 4 },
          }}
        >
          <Container
            maxWidth="xlg"
            sx={{
              position: "relative",
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={3} sx={{ maxWidth: 720 }}>
                  <Chip
                    label="ESTÜ Yazılım Kulübü | 2026"
                    sx={{
                      alignSelf: "flex-start",
                      letterSpacing: "0.12em",
                      bgcolor: "rgba(21, 229, 229, 0.1)",
                      color: "#15E5E5",
                      border: "1px solid rgba(21, 229, 229, 0.22)",
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "3rem", md: "4.7rem" },
                      lineHeight: 1.1,
                      letterSpacing: "-0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Satırların Ötesİne Geç: Tasarla, Gelİştİr ve İz Bırak.
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: 640,
                      color: isDark ? "rgba(255,255,255,0.76)" : "rgba(17,24,39,0.72)",
                      lineHeight: 1.8,
                    }}
                  >
                  Yazılım öğrenmek isteyen her öğrenciye kapımız açık. 
                  Ekipler kuruyor, projeler üretiyor, sektör profesyonelleriyle buluşturuyoruz hepsi bir arada, bir toplulukta.                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button
                      href="#hizmetler"
                      size="large"
                      variant="contained"
                      sx={{
                        bgcolor: "#15E5E5",
                        color: isDark ? "#121936" : "#0B172A",
                        px: 3,
                        py: 1.5,
                        boxShadow: "0 12px 30px rgba(21, 229, 229, 0.28)",
                        "&:hover": { bgcolor: "#7bf0f0" },
                      }}
                    >
                      Bizi Keşfet
                    </Button>
                    <Button
                      href="#iletisim"
                      size="large"
                      variant="outlined"
                      sx={{
                        borderColor: isDark ? "rgba(255,255,255,0.24)" : "rgba(15,23,42,0.16)",
                        color: isDark ? "#FFFFFF" : "#101828",
                        px: 3,
                        py: 1.5,
                        "&:hover": {
                          borderColor: "rgba(21, 229, 229, 0.5)",
                          backgroundColor: "rgba(21, 229, 229, 0.08)",
                        },
                      }}
                    >
                      İletişime Geç
                    </Button>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ pt: 1, flexWrap: "wrap" }}
                  >
                    {highlights.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        variant="outlined"
                        sx={{
                          borderColor: isDark ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.12)",
                          color: isDark ? "rgba(255,255,255,0.84)" : "rgba(17,24,39,0.72)",
                          bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.5)",
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: 5,
                    bgcolor: isDark ? "rgba(215, 255, 255, 0.04)" : "rgba(255,255,255,0.72)",
                    border: `1px solid ${isDark ? "rgba(21, 229, 229, 0.18)" : "rgba(15, 23, 42, 0.08)"}`,
                    backdropFilter: "blur(14px)",
                    boxShadow: isDark ? "0 24px 60px rgba(0, 0, 0, 0.28)" : "0 24px 60px rgba(15, 23, 42, 0.08)",
                  }}
                >
                  <Stack spacing={3}>
                    <Typography
                      variant="overline"
                      sx={{ color: "#15E5E5", letterSpacing: "0.18em" }}
                    >
                      BİR BAKIŞTA
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" } }}
                    >
                      Kod yazan, üreten, birlikte büyüyen bir topluluk.
                    </Typography>
                    <Typography
                      sx={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)", lineHeight: 1.8 }}
                    >
                      ESTÜ Yazılım Kulübü, farklı bölümlerden öğrencileri bir araya getiren disiplinler arası bir yapı. Workshoplar, gerçek projeler ve sektörle kurulan bağlarla teoriyi pratiğe dönüştürüyoruz.
                    </Typography>
                    <Grid container spacing={2}>
                      {metrics.map((metric) => (
                        <Grid size={4} key={metric.label}>
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2,
                              borderRadius: 4,
                              bgcolor: isDark ? "rgba(18, 25, 54, 0.72)" : "rgba(255,255,255,0.8)",
                              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              variant="h4"
                              sx={{
                                fontSize: { xs: "1.35rem", md: "1.75rem" },
                                color: "#15E5E5",
                              }}
                            >
                              {metric.value}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)" }}
                            >
                              {metric.label}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>

            <Box id="hakkimizda" sx={{ pt: { xs: 8, md: 12 } }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 5,
                  bgcolor: isDark ? "rgba(215, 255, 255, 0.035)" : "rgba(255,255,255,0.7)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
                }}
              >
                <Grid container spacing={3} sx={{ alignItems: "center" }}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                      Hakkımızda
                    </Typography>
                    <Typography
                      sx={{ color: isDark ? "rgba(255,255,255,0.74)" : "rgba(17,24,39,0.72)", lineHeight: 1.9 }}
                    >
                      ESTÜ Yazılım Kulübü, 2022-2023 akademik yılında kurulan, 
                      disiplinler arası bir öğrenci topluluğudur. Üyelerimize takım çalışması kültürü, 
                      kulüp içi eğitimler ve sektör profesyonelleriyle bir araya gelme fırsatı sunuyoruz.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Grid container spacing={2}>
                      {[
                        "Disiplinler arası bir topluluk.",
                        "Takım kültürüyle öğreniyoruz!",
                        "Sektörle doğrudan bağlantı!",
                        "Dinamik kadro, istekli öğrenciler.",
                      ].map((item) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={item}>
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2.5,
                              borderRadius: 4,
                              height: "100%",
                              bgcolor: isDark ? "rgba(18, 25, 54, 0.72)" : "rgba(255,255,255,0.8)",
                              border: `1px solid ${isDark ? "rgba(21, 229, 229, 0.12)" : "rgba(15,23,42,0.08)"}`,
                            }}
                          >
                            <Typography sx={{ lineHeight: 1.8 }}>
                              {item}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Box>

            <Box id="hizmetler" sx={{ pt: { xs: 8, md: 12 } }}>
              <Stack spacing={1.5} sx={{ mb: 4, maxWidth: 720 }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                >
                  Neler Yapıyoruz?
                </Typography>
                <Typography
                  sx={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)", lineHeight: 1.8 }}
                >
                  Kulüp içinde farklı alanlarda çalışan ekiplerimizle öğreniyor, 
                  üretiyor ve büyüyoruz. İster yeni başlıyor ol ister deneyimli, 
                  sana uygun bir çalışma alanı burada.
                </Typography>
              </Stack>
              <Grid container spacing={3}>
                {serviceCards.map((card) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={card.title}>
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        p: 3,
                        borderRadius: 5,
                        bgcolor: isDark ? "rgba(215, 255, 255, 0.03)" : "rgba(255,255,255,0.75)",
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
                        transition:
                          "transform 180ms ease, border-color 180ms ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          borderColor: "rgba(21, 229, 229, 0.25)",
                        },
                      }}
                    >
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 3,
                            bgcolor: "rgba(21, 229, 229, 0.12)",
                            border: "1px solid rgba(21, 229, 229, 0.22)",
                          }}
                        />
                        <Typography
                          variant="h3"
                          sx={{ fontSize: { xs: "1.4rem", md: "1.7rem" } }}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)",
                            lineHeight: 1.8,
                          }}
                        >
                          {card.text}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box
              id="iletisim"
              sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 8 } }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 5,
                  bgcolor: isDark ? "rgba(21, 229, 229, 0.12)" : "rgba(21, 229, 229, 0.06)",
                  border: `1px solid ${isDark ? "rgba(21, 229, 229, 0.18)" : "rgba(21, 229, 229, 0.18)"}`,
                  background: isDark
                    ? "linear-gradient(135deg, rgba(21, 229, 229, 0.12), rgba(18, 25, 54, 0.88))"
                    : "linear-gradient(135deg, rgba(21, 229, 229, 0.08), rgba(255, 255, 255, 0.9))",
                }}
              >
                <Grid container spacing={3} sx={{ alignItems: "center" }}>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                      İletişim
                    </Typography>
                    <Typography
                      sx={{ color: isDark ? "rgba(255,255,255,0.74)" : "rgba(17,24,39,0.72)", lineHeight: 1.9 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur sodales ligula in libero. Sed dignissim lacinia
                      nunc.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Stack spacing={2}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2.5,
                          borderRadius: 4,
                          bgcolor: isDark ? "rgba(18, 25, 54, 0.72)" : "rgba(255,255,255,0.84)",
                          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
                        }}
                      >
                        <Typography sx={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)" }}>
                          lorem@ipsum.edu.tr
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2.5,
                          borderRadius: 4,
                          bgcolor: isDark ? "rgba(18, 25, 54, 0.72)" : "rgba(255,255,255,0.84)",
                          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
                        }}
                      >
                        <Typography sx={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)" }}>
                          +90 (5xx) xxx xx xx
                        </Typography>
                      </Paper>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Container>
        </Box>

        {/* 3. SAĞ SÜTUN (Görsel) */}
        <Box
          sx={{
            width: { xs: "0%", md: "20%", lg: "15%" },
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <img
            src="./beyaz_sag.png"
            alt="Sağ"
            style={{ width: "15%", height: "auto" }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
