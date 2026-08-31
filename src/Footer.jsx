import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useThemeMode } from "./ThemeContext";

export default function Footer() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        backdropFilter: "blur(18px)",
        backgroundColor: isDark ? "rgba(18, 25, 54, 0.72)" : "rgba(255, 255, 255, 0.8)",
        borderTop: `1px solid ${isDark ? "rgba(21, 229, 229, 0.16)" : "rgba(15, 23, 42, 0.12)"}`,
        boxShadow: isDark ? "0 -12px 40px rgba(0, 0, 0, 0.18)" : "0 -12px 40px rgba(15, 23, 42, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(17,24,39,0.7)", textAlign: "center", py: 2 }}
        >
          © {new Date().getFullYear()} ESTÜ Yazılım Kulübü. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
}
