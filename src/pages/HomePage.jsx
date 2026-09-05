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
    title: "Ürün Tasarımı",
    text: "BERAT ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Yazılım Geliştirme",
    text: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Topluluk ve Etkinlik",
    text: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    title: "Mentorluk ve Eğitim",
    text: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
  },
];

const highlights = [
  "Haftalık ürün laboratuvarı",
  "Öğrenci odaklı proje sprintleri",
  "Yapay zeka, web ve mobil çalışma grupları",
];

const metrics = [
  { value: "12+", label: "Aktif çalışma alanı" },
  { value: "48", label: "Saatlik üretim döngüsü" },
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
                      fontSize: { xs: "3rem", md: "5.1rem" },
                      lineHeight: 0.95,
                      letterSpacing: "-0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: 640,
                      color: isDark ? "rgba(255,255,255,0.76)" : "rgba(17,24,39,0.72)",
                      lineHeight: 1.8,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </Typography>
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
                      Hizmetleri Keşfet
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
                      Studio Brief
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" } }}
                    >
                      Lorem ipsum dolor sit amet, consectetur.
                    </Typography>
                    <Typography
                      sx={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)", lineHeight: 1.8 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Grid container spacing={2}>
                      {[
                        "Lorem ipsum dolor sit amet.",
                        "Consectetur adipiscing elit sed do.",
                        "Eiusmod tempor incididunt ut labore.",
                        "Ut enim ad minim veniam quis nostrud.",
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
                  Hizmetler
                </Typography>
                <Typography
                  sx={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(17,24,39,0.72)", lineHeight: 1.8 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
