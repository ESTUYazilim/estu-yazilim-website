import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Typography,
  IconButton
} from "@mui/material";
import { useThemeMode } from "./ThemeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const navItems = [
  { title: "Hakkımızda", href: "#hakkimizda" },
  { title: "Hizmetler", href: "#hizmetler" },
  { title: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(18px)",
        backgroundColor: isDark ? "rgba(18, 25, 54, 0.72)" : "rgba(255, 255, 255, 0.76)",
        borderBottom: `1px solid ${isDark ? "rgba(21, 229, 229, 0.16)" : "rgba(15, 23, 42, 0.12)"}`,
        boxShadow: isDark ? "0 12px 40px rgba(0, 0, 0, 0.18)" : "0 12px 40px rgba(15, 23, 42, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: 0, minHeight: 84 }}>
          <Box
            component="a"
            href="#anasayfa"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: isDark ? "#FFFFFF" : "#101828",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="/Beyaz (1).png"
              alt="Estu Yazılım Logo"
              sx={{
                height: 44,
                width: "auto",
                objectFit: "contain",
                filter: isDark ? "none" : "brightness(0.2)",
              }}
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="body2"
                sx={{ letterSpacing: "0.18em", color: isDark ? "rgba(255,255,255,0.7)" : "rgba(17,24,39,0.7)" }}
              >
                ESTÜ Yazılım Kulübü
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                href={item.href}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2,
                  color: isDark ? "#FFFFFF" : "#101828",
                  borderRadius: 999,
                  border: "1px solid transparent",
                  transition: "all 180ms ease",
                  '&:hover': {
                    borderColor: isDark ? "rgba(21, 229, 229, 0.28)" : "rgba(21, 229, 229, 0.4)",
                    backgroundColor: isDark ? "rgba(21, 229, 229, 0.08)" : "rgba(21, 229, 229, 0.08)",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
            <IconButton
              onClick={toggleTheme}
              variant={isDark ? "outlined" : "contained"}
              sx={{
                ml: 1,
                borderColor: isDark ? "rgba(21, 229, 229, 0.35)" : "rgba(21, 229, 229, 0.2)",
                color: isDark ? "#15E5E5" : "#0B172A",
                backgroundColor: "transparent",
                '&:hover': {
                  borderColor: "#15E5E5",
                  backgroundColor: isDark ? "rgba(21, 229, 229, 0.1)" : "#7bf0f0",
                },
              }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Button
              href="https://forms.gle/7okad9dNHajCxJXSA"
              variant="outlined"
              sx={{
                ml: 1,
                borderColor: isDark ? "rgba(21, 229, 229, 0.35)" : "rgba(21, 229, 229, 0.35)",
                color: isDark ? "#15E5E5" : "#0B172A",
                '&:hover': {
                  borderColor: "#15E5E5",
                  backgroundColor: isDark ? "rgba(21, 229, 229, 0.1)" : "rgba(21, 229, 229, 0.1)",
                },
              }}
            >
              Başvur
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
