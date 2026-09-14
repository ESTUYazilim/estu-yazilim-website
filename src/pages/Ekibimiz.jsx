import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import MainLayout from "../components/MainLayout";
import { useThemeMode } from "../ThemeContext";


const managementTeam = [
  {
    name: "Berat Çiftçi",
    role: "Yönetim Kurulu Başkanı",
    image: "./ekip/baskan.jpg",
  },
  {
    name: "Elif Naz Deveci",
    role: "Başkan Yardımcısı",
    image: "./ekip/baskan_yardimcisi.jpg",
  },
  {
    name: "Şeyma Güventürk",
    role: "Sekreter",
    image: "./ekip/sekreter.jpg",
  },
  {
    name: "Sevgi Külahlı",
    role: "Sayman",
    image: "./ekip/sayman.jpg",
  },
  {
    name: "Yusuf Ali Rencüzoğulları",
    role: "Yönetim Kurulu Üyesi",
    image: "./ekip/yonetim_kurulu_uyesi.jpg",
  },
]; 

const subTeams = [
  {
    id: "kurumsal",
    title: "Kurumsal Ekip",
    description:
      "Kulübün üniversite yönetimi, sponsorlar ve sektör paydaşlarıyla ilişkilerini yürüten ekibimizdir. Resmi yazışmalar, iş birlikleri ve kurumsal görünürlük bu ekibin odağındadır.",
  },
  {
    id: "sosyal-medya",
    title: "Sosyal Medya Ekibi",
    description:
      "Kulübün dijital yüzünü oluşturan ekibimiz, etkinlik ve faaliyetlerimizi sosyal medyada görünür kılar. İçerik üretimi, duyurular ve topluluğumuzla iletişim bu ekibin sorumluluğundadır.",
  },
  {
    id: "yazilim-gelistirme",
    title: "Yazılım Geliştirme Ekibi",
    description:
      "Web, mobil ve yapay zekâ alanlarında gerçek projeler üreten ekibimizdir. Üyelerimiz burada fikirden koda giden süreçte birlikte çalışır, birbirinden öğrenir ve teorik bilgiyi pratiğe döker.",
  },
];

export default function Ekibimiz() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const cardStyle = {
    p: { xs: 3, md: 4.5 },
    borderRadius: 5,
    bgcolor: isDark ? "rgba(215, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.7)",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)"}`,
    backdropFilter: "none",
    boxShadow: "none",

  };

  return (
    <MainLayout>
      <Box sx={{ flexGrow: 1, py: { xs: 4, md: 0 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3}>
            {/* SAYFA BAŞLIĞI */}
            <Stack spacing={1.5} alignItems="center" textAlign="center">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.6rem", md: "3.8rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  textAlign: "center",
                }}
              >
                Ekibimiz
              </Typography>
            </Stack>

            {/* 1. KUTU: YÖNETİM EKİBİ */}
            <Paper elevation={0} sx={cardStyle}>
              <Stack spacing={4}>
                {/* 5 Kişilik Kusursuz Hizalanmış Izgara */}
                <Box
                  sx={{
                    display: "grid",
                    // minmax(0, 1fr) sütunların genişliklerini birebir eşit (%20) yapar
                    gridTemplateColumns: {
                      xs: "repeat(2, minmax(0, 1fr))",
                      sm: "repeat(3, minmax(0, 1fr))",
                      md: "repeat(5, minmax(0, 1fr))",
                    },
                    gap: { xs: 3, md: 2 },
                    alignItems: "start",
                    justifyItems: "center",
                    pt: 1,
                    width: "100%",
                  }}
                >
                  {managementTeam.map((member, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        width: "100%",
                        transition: "transform 180ms ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      {/* Daire Avatar */}
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: { xs: 85, sm: 95, md: 105 },
                          height: { xs: 85, sm: 95, md: 105 },
                          border: "2px solid #15E5E5",
                          boxShadow: "0 0 16px rgba(21, 229, 229, 0.25)",
                          bgcolor: isDark ? "rgba(21, 229, 229, 0.15)" : "rgba(21, 229, 229, 0.1)",
                          color: "#15E5E5",
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          mb: 1.5,
                        }}
                      >
                        {member.name.charAt(0)}
                      </Avatar>

                      {/* İSİM ALANI (Sabit Yükseklik: Tüm unvanların aynı hizada başlamasını sağlar) */}
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: 44, md: 50 },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: 0.5,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            lineHeight: 1.25,
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            color: isDark ? "#FFFFFF" : "#101828",
                            textAlign: "center",
                            wordBreak: "break-word",
                          }}
                        >
                          {member.name}
                        </Typography>
                      </Box>

                      {/* UNVAN ALANI (Sabit Yükseklik ve Üstten Hizalı) */}
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: 34, md: 40 },
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          mt: 0.5,
                          px: 0.5,
                        }}
                      >
                        
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#15E5E5",
                            fontWeight: 500,
                            fontSize: { xs: "0.75rem", md: "0.8rem" },
                            lineHeight: 1.3,
                            textAlign: "center",
                            wordBreak: "break-word",
                          }}
                        >
                          
                          {member.role}
                        </Typography>
                      </Box>                     
                    </Box>
                    
                  ))}
                  
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.9rem", md: "2rem" },
                    fontWeight: 700,
                    color: isDark ? "#FFFFFF" : "#101828",
                    textAlign: "center",
                    mt: -5, // 👈 1. ÜST BOŞLUK: Unvanlara yaklaştırmak için (-1 veya -2 yapabilirsin)
                    mb: -10, // 👈 2. ÇİZGİ BOŞLUĞU: Çizgiye yaklaştırmak için (-1 veya -2 yapabilirsin)
                  }}
                >
                  Yönetim Kurulumuz
                </Typography>

                {/* Açıklama Yazısı */}
                <Box
                  sx={{
                    pt: 0.5,
                    borderTop: `1px solid ${
                      isDark ? "rgba(21, 229, 229, 0.12)" : "rgba(15, 23, 42, 0.08)"
                    }`,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      maxWidth: 880,
                      margin: "0 auto",
                      color: isDark ? "rgba(255, 255, 255, 0.74)" : "rgba(17, 24, 39, 0.74)",
                      lineHeight: 1.85,
                      fontSize: { xs: "0.92rem", md: "1rem" },
                    }}
                  >
                    Kulübün genel işleyişini planlayan, kararları alan ve diğer ekipler arasında koordinasyonu sağlayan çekirdek yapımızdır. 
                    Başkan, başkan yardımcısı, sekreterlik ve muhasebe gibi görevleri kapsayan yönetim ekibimiz, 
                    kulübün stratejik yönünü belirler ve tüm faaliyetlerin düzenli işlemesini sağlar.
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            {/* ALT EKİPLER */}
            {subTeams.map((team) => (
              <Paper key={team.id} elevation={0} sx={cardStyle}>
                <Stack spacing={1.5} alignItems="center" textAlign="center">
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.6rem", md: "2.1rem" },
                      fontWeight: 700,
                      color: isDark ? "#FFFFFF" : "#101828",
                    }}
                  >
                    {team.title}
                  </Typography>

                  <Box
                    sx={{
                      width: 48,
                      height: 3,
                      bgcolor: "#15E5E5",
                      borderRadius: 2,
                      boxShadow: "0 0 10px rgba(21, 229, 229, 0.4)",
                      mb: 1.5,
                    }}
                  />

                  <Typography
                    sx={{
                      maxWidth: 880,
                      color: isDark ? "rgba(255, 255, 255, 0.74)" : "rgba(17, 24, 39, 0.74)",
                      lineHeight: 1.85,
                      fontSize: { xs: "0.92rem", md: "1rem" },
                    }}
                  >
                    {team.description}
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}