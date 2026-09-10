import { Typography, Paper, Grid, Box } from "@mui/material";
import MainLayout from "../components/MainLayout";
import { useThemeMode } from "../ThemeContext";
import EventGallery from "../components/EventGallery";

const careerPhotos = [
  "./events/etkinlik1.jpg",
  "./events/etkinlik2.jpg",
  "./events/etkinlik3.jpg",
  "./events/etkinlik4.jpg",
  "./events/etkinlik5.jpg",
  "./events/etkinlik6.jpg",
];
const trainingPhotos = [
  "./events/training1.jpg",
  "./events/training2.jpg",
  "./events/training3.jpg",
  "./events/training4.jpg",
  "./events/training5.jpg",
  "./events/training6.jpg",
];
const eventPhotos = [
  "./events/event1.jpg",
  "./events/event2.jpg",
  "./events/event3.png",
  // "./events/event4.jpg",
  // "./events/event5.jpg",
  // "./events/event6.jpg",
];
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

  return (
    <MainLayout>
      {/* SADECE BU SAYFAYA ÖZEL İÇERİKLER */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.6rem", md: "3.8rem" },
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Etkinliklerimiz
      </Typography>
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
            <NeonBar />
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
            <EventGallery isDark={isDark} photos={careerPhotos} />
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
              TrainingD+
            </Typography>
            <NeonBar />
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
              }}
            >
              TrainingD+ etkinliklerimizde, çeşitli alanlarda yetkinliğe sahip
              kişiler tarafından birçok farklı yazılım dalı ve programlama
              dilinde eğitimler sunarak üyelerimizin yazılım dünyasında rol
              bulmalarını hedefliyoruz. Eğitimlerimizin ardından, bu süreci
              projelerle destekleyerek üyelerimizin aldıkları teorik bilgileri
              pratiğe dökmelerini ve bilgi seviyelerini artırmalarını sağlıyoruz
            </Typography>
            <EventGallery isDark={isDark} photos={trainingPhotos} />
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
              EventD+
            </Typography>
            <NeonBar />
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
              }}
            >
              Event+ etkinliklerimizde, üyelerimizin sosyal becerilerini
              geliştirerek insanlarla daha kolay ve rahat iletişim kurmalarını
              sağlamayı amaçlıyoruz. Bu sayede üyelerimiz, farklı disiplinlerden
              kişilerle bir araya gelerek ağlarını genişletme ve aldıkları
              eğitimleri eğlenceli etkinliklerle destekleyerek motivasyonlarını
              yüksek tutma fırsatı bulurlar.
            </Typography>
            <EventGallery isDark={isDark} photos={eventPhotos} />
          </Grid>
        </Grid>
      </Paper>
    </MainLayout>
  );
}
