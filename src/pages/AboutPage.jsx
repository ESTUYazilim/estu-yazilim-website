import { Typography, Paper, Grid, Box } from "@mui/material"; // Box eklendi
import MainLayout from "../components/MainLayout";
import { useThemeMode } from "../ThemeContext";

// Sayfadaki tüm başlıklarda kullanabileceğin ortak neon çubuk
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

export default function AboutPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  
  const cardStyle = {
    p: { xs: 3, md: 5 },
    borderRadius: 5,
    bgcolor: isDark ? "rgba(215, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.7)",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)"}`,
    backdropFilter: "none", // Arkadaki ızgaraları kapatmaması için
    boxShadow: "none",
    mt: 4,
  };

  return (
    <MainLayout>
      {/* 1. SAYFA BAŞLIĞI */}
      <Typography
        variant="h1"
        align="center"
        sx={{
          fontSize: { xs: "2.6rem", md: "3.8rem" },
          mb: 1,
          fontWeight: "bold",
          color: "text.primary",
          textAlign: "center",
        }}
      >
        Hakkımızda
      </Typography>

      {/* 2. BİZ KİMİZ KUTUSU */}
      <Paper elevation={0} sx={cardStyle}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography 
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                color: "text.primary",
              }}
            >
              Biz Kimiz ve Ne Yapıyoruz?
            </Typography>
            
            {/* ÇUBUK 1: Başlığın hemen altına */}
            <NeonBar />
            
            <Typography
              sx={{
                color: isDark ? "rgba(255,255,255,0.74)" : "rgba(17,24,39,0.72)",
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

      {/* 3. MİSYON KUTUSU */}
      <Paper elevation={0} sx={cardStyle}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                color: "text.primary",
              }}
            >
              Misyon
            </Typography>

            {/* ÇUBUK 2: Misyon başlığının hemen altına */}
            <NeonBar />

            <Typography
              sx={{
                color: isDark ? "rgba(255,255,255,0.74)" : "rgba(17,24,39,0.72)",
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

      {/* 4. VİZYON KUTUSU */}
      <Paper elevation={0} sx={cardStyle}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                color: "text.primary",
              }}
            >
              Vizyon
            </Typography>

            {/* ÇUBUK 3: Vizyon başlığının hemen altına */}
            <NeonBar />

            <Typography
              sx={{
                color: isDark ? "rgba(255,255,255,0.74)" : "rgba(17,24,39,0.72)",
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