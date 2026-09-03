import { Typography, Paper, Grid } from "@mui/material";
import MainLayout from "../components/MainLayout";
import { useThemeMode } from "../ThemeContext";

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
              Ne Yapıyoruz ve Biz Kimiz?
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
              }}
            >
              ESTÜ Yazılım Kulübü, 2022-2023 akademik yılında Eskişehir Teknik
              Üniversitesi bünyesinde kurulmuştur. Disiplinler arası bir yapıya
              sahip olan topluluğumuz, üniversite genelinde yazılım bilincini
              geliştirmeyi hedefler. Üyelerimizin takım çalışması kültürünü
              benimsemesini, çeşitli ekiplerde aktif sorumluluk alarak iş
              hayatına hazırlanmasını ve kulüp içi eğitimlerle akademik
              gelişimlerini desteklemeyi amaçlıyoruz. Ayrıca üyelerimizi
              sektörden profesyonellerle bir araya getiriyor, gelişen
              teknolojileri yakından tanıyarak bu alanlarda yetkinlik
              kazanmalarına olanak sağlıyoruz. Topluluğumuz, dinamik kadrosu ve
              güçlü altyapısıyla organize ettiği etkinliklerle faaliyetlerini
              sürdürmektedir.
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
              Misyon
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
              }}
            >
              Yazılım öğrenmek veya mevcut bilgisini geliştirmek isteyen
              öğrencilere teorik ve pratik yazılım yetkinliği kazandırmak;
              dinamik çalışma ekipleriyle üyeleri alanında uzman isimlerle
              buluşturup tecrübe aktarımı sağlamak; staj ve iş fırsatlarına
              erişimde köprü olmak ve üyelerimizin sosyo-kültürel gelişimlerini
              destekleyen etkinliklerle hedeflerini büyütmelerine katkı
              sunmaktır.
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
              Vizyon
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
              }}
            >
              İş dünyası ile ESTÜ Yazılım Kulübü arasında güçlü bir bağ kurmak;
              üyelerimizin hızla gelişen teknoloji ve yazılım dünyasında etkin
              roller almasını sağlamak; sunduğumuz eğitim ve projelerle onların
              akademik ve profesyonel gelişimlerine yön veren öncü bir topluluk
              olmaktır.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </MainLayout>
  );
}
