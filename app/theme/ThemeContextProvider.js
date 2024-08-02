"use client";

import React, { createContext, useState, useMemo, useCallback } from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { teal } from "@mui/material/colors";
import { sharedTypography } from "../styles/TypographyStyles";

// Creates a React context for theme-related values
export const ThemeContext = createContext({
  theme: null,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

// Handle the switch between custom light and dark modes.
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Palette values for light mode
          primary: {
            main: teal[500],
          },
          secondary: {
            main: "#34C759",
          },
          background: {
            default: "#F2F2F2",
          },
        }
      : {
          // Palette values for dark mode
          primary: {
            main: teal[500],
          },
          secondary: {
            main: "#34C759",
          },
          background: {
            default: "#303030",
          },
        }),
  },
  typography: sharedTypography,
});

// Provides theme context to child components
export function ThemeContextProvider({ children }) {
  // Use useMediaQuery to detect system preference for dark mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState(prefersDarkMode ? "dark" : "light");

  // Memoized function to determine the active theme configuration based on the theme state
  const themeConfig = useMemo(() => {
    const baseTheme = createTheme(getDesignTokens(theme));
    return responsiveFontSizes(baseTheme);
  }, [theme]);

  // Function to toggle the theme between light and dark
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    // Provides theme and toggleTheme function to child components through context
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
