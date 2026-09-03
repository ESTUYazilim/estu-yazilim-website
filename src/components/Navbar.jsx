import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from "@mui/material";
import { useThemeMode } from "../ThemeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const navItems = [
  { title: "Hakkımızda", path: "/hakkimizda" },
  { title: "Takımlar", path: "/takimlar" },
  { title: "Etkinlikler", path: "/etkinlikler" },
  { title: "İletişim", path: "/iletisim" },
];

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";
  
  // Mobil menünün açık/kapalı durumunu tutan state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Menüyü açıp kapatan fonksiyon
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobil menü (Drawer) açıldığında içinde görünecek içerik
  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: "center", 
        p: 2, 
        height: "100%", 
        bgcolor: "background.default",
        color: isDark ? "#FFFFFF" : "#101828"
      }}
    >
      <List sx={{ mt: 4 }}>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: "center", borderRadius: 2, mb: 1 }}>
              <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider sx={{ my: 3, borderColor: isDark ? "rgba(21, 229, 229, 0.16)" : "rgba(15, 23, 42, 0.12)" }} />
      
      {/* Mobil Menü İçin Üye Ol Butonu */}
      <Button
        href="https://forms.gle/7okad9dNHajCxJXSA"
        variant="outlined"
        fullWidth
        sx={{
          mb: 3,
          borderColor: isDark ? "rgba(21, 229, 229, 0.35)" : "rgba(21, 229, 229, 0.35)",
          color: isDark ? "#15E5E5" : "#0B172A",
          '&:hover': {
            borderColor: "#15E5E5",
            backgroundColor: isDark ? "rgba(21, 229, 229, 0.1)" : "rgba(21, 229, 229, 0.1)",
          },
        }}
      >
        Üye Ol
      </Button>

      {/* Mobil Menü İçin Tema Değiştirici */}
      <IconButton
        onClick={toggleTheme}
        variant={isDark ? "outlined" : "contained"}
        sx={{
          border: '1px solid',
          borderColor: isDark ? "rgba(21, 229, 229, 0.35)" : "rgba(21, 229, 229, 0.2)",
          color: isDark ? "#15E5E5" : "#0B172A",
          backgroundColor: "transparent",
        }}
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(18px)",
        backgroundColor: "background.default",
        borderBottom: `1px solid ${isDark ? "rgba(21, 229, 229, 0.16)" : "rgba(15, 23, 42, 0.12)"}`,
        boxShadow: isDark ? "0 12px 40px rgba(0, 0, 0, 0.18)" : "0 12px 40px rgba(15, 23, 42, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: 0, minHeight: 84 }}>
          {/* LOGO KISMI */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              color: isDark ? "#FFFFFF" : "#101828",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="/Beyaz (1).png"
              alt="Estu Yazılım Logo"
              sx={{
                height: 35,
                width: "auto",
                objectFit: "contain",
                filter: isDark ? "none" : "brightness(0.2)",
              }}
            />
            <Box sx={{ display: { xs: "block", sm: "block" } }}>
              <Typography
                variant="body2"
                sx={{ letterSpacing: "0.18em", color: isDark ? "rgba(255,255,255,0.7)" : "rgba(17,24,39,0.7)" }}
              >
                ESTÜ Yazılım Kulübü
              </Typography>
            </Box>
          </Box>

          {/* MASAÜSTÜ MENÜ (Mobilde Gizli: xs: 'none') */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                to={item.path}
                component={Link}
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
              Üye Ol
            </Button>
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
          </Box>

          {/* MOBİL HAMBURGER İKONU (Masaüstünde Gizli: md: 'none') */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: isDark ? "#FFFFFF" : "#101828" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* MOBİL ÇEKMECE (DRAWER) */}
      <Drawer
        anchor="right" // Ekranın sağından açılır
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mobilde performansı artırmak için DOM'da tutar
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: "50vw", // İstediğin gibi tam olarak ekranın yarısını (50 Viewport Width) kaplar
            backgroundColor: "background.default",
            backgroundImage: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}