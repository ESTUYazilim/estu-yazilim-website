import { Box, Grid, Paper, Stack, Typography, IconButton } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MainLayout from "../components/MainLayout";
import { useThemeMode } from "../ThemeContext";

function NeonBar({ align = "left" }) {
  return (
    <Box
      sx={{
        width: 48,
        height: 3.5,
        bgcolor: "#15E5E5",
        borderRadius: 999,
        boxShadow: "0 0 10px rgba(21, 229, 229, 0.5)",
        my: 2, // Başlık ile metin arasındaki ideal boşluk
        mx: align === "center" ? "auto" : 0,
      }}
    />
  );
}

export default function ContactPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MainLayout>
      <Stack spacing={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            İletişim
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            bgcolor: "background.paper",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
          }}
        >
          <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                spacing={2.5}
                sx={{ alignItems: { xs: "center", md: "flex-start" } }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.9rem", md: "2.6rem" },
                      color: "text.primary",
                      mb: 1.5,
                    }}
                  >
                    Bize yazın, kısa sürede dönüş yapalım.
                  </Typography>
                   <NeonBar />
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.9 }}>
                    Etkinlikler, üyelik, proje fikirleri veya ortak çalışmalar
                    için e-posta üzerinden ulaşabilir ya da sosyal
                    hesaplarımızdan bize yazabilirsiniz.
                  </Typography>
                </Box>

                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1.5}>
                    <IconButton
                      component="a"
                      href={`mailto:estuyazilim@gmail.com`}
                      aria-label="E-posta gönder"
                      sx={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.12)"}`,
                        color: "text.primary",
                        bgcolor: isDark
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(255,255,255,0.68)",
                        "&:hover": {
                          borderColor: "#15E5E5",
                          bgcolor: isDark
                            ? "rgba(21, 229, 229, 0.08)"
                            : "rgba(21, 229, 229, 0.08)",
                        },
                      }}
                    >
                      <EmailOutlinedIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://www.instagram.com/estuyazilim/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      sx={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.12)"}`,
                        color: "text.primary",
                        bgcolor: isDark
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(255,255,255,0.68)",
                        "&:hover": {
                          borderColor: "#15E5E5",
                          bgcolor: isDark
                            ? "rgba(21, 229, 229, 0.08)"
                            : "rgba(21, 229, 229, 0.08)",
                        },
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/company/estuyazilim/home/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      sx={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.12)"}`,
                        color: "text.primary",
                        bgcolor: isDark
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(255,255,255,0.68)",
                        "&:hover": {
                          borderColor: "#15E5E5",
                          bgcolor: isDark
                            ? "rgba(21, 229, 229, 0.08)"
                            : "rgba(21, 229, 229, 0.08)",
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://github.com/estuyazilim"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      sx={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.12)"}`,
                        color: "text.primary",
                        bgcolor: isDark
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(255,255,255,0.68)",
                        "&:hover": {
                          borderColor: "#15E5E5",
                          bgcolor: isDark
                            ? "rgba(21, 229, 229, 0.08)"
                            : "rgba(21, 229, 229, 0.08)",
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 4,
                  bgcolor: isDark
                    ? "rgba(18, 25, 54, 0.72)"
                    : "rgba(255,255,255,0.82)",
                  border: `1px solid ${isDark ? "rgba(21, 229, 229, 0.12)" : "rgba(15,23,42,0.08)"}`,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <PlaceOutlinedIcon
                    sx={{ color: "#ffffff", alignSelf: "flex-start" }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "text.primary" }}>
                      Konum
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Eskişehir Teknik Üniversitesi, İki Eylül Kampüsü, 26555
                      Tepebaşı / Eskişehir
                    </Typography>
                    <Box
                      component="iframe"
                      title="Eskişehir Teknik Üniversitesi konumu"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6129.1634197150315!2d30.532763231999688!3d39.816373605984644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc3fd651b06c63%3A0x588a36c4fd0d8dd1!2sEskisehir%20Technical%20University!5e0!3m2!1sen!2sso!4v1788776300402!5m2!1sen!2sso"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      sx={{
                        mt: 1.5,
                        width: "100%",
                        height: { xs: 280, md: 340 },
                        border: 0,
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </MainLayout>
  );
}
