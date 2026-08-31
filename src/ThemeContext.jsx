import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

const ThemeModeContext = createContext(null);

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#15E5E5",
        contrastText: mode === "dark" ? "#121936" : "#FFFFFF",
      },
      background: {
        default: mode === "dark" ? "#121936" : "#F5FBFF",
        paper: mode === "dark" ? "rgba(215, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.8)",
      },
      text: {
        primary: mode === "dark" ? "#FFFFFF" : "#101828",
        secondary: mode === "dark" ? "rgba(255, 255, 255, 0.72)" : "rgba(17, 24, 39, 0.72)",
      },
      divider: mode === "dark" ? "rgba(21, 229, 229, 0.16)" : "rgba(15, 23, 42, 0.12)",
    },
    typography: {
      fontFamily: 'Bahnschrift, "Segoe UI", sans-serif',
      h1: {
        fontFamily: 'Neue Machina, Bahnschrift, sans-serif',
        fontWeight: 800,
      },
      h2: {
        fontFamily: 'Neue Machina, Bahnschrift, sans-serif',
        fontWeight: 800,
      },
      h3: {
        fontFamily: 'Neue Machina, Bahnschrift, sans-serif',
        fontWeight: 800,
      },
      button: {
        fontFamily: 'Bahnschrift, "Segoe UI", sans-serif',
        fontWeight: 600,
        textTransform: "none",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === "dark" ? "#121936" : "#F5FBFF",
            color: mode === "dark" ? "#FFFFFF" : "#101828",
            transition: "background-color 180ms ease, color 180ms ease",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },
    },
  });

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("estu-theme");
    return savedMode === "light" || savedMode === "dark" ? savedMode : "dark";
  });

  useEffect(() => {
    localStorage.setItem("estu-theme", mode);
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const value = useMemo(() => ({
    mode,
    theme: getTheme(mode),
    toggleTheme: () => {
      setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
    },
  }), [mode]);

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside ThemeModeProvider");
  }

  return context;
}

