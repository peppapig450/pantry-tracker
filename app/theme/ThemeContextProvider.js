import React, { createContext, useState, useMemo, useMe } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import useMediaQuery from "@mui/material/useMediaQuery";

// Creates a React context for theme-related values
export const ThemeContext = createContext();

// Provides theme context to child components
export default function ThemeContextProvider({ children }) {
  // Use useMediaQuery to detect system preference for dark mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState(prefersDarkMode ? "dark" : "light");

  // Memoized function to determine the active theme configuration based on the theme state
  const themeConfig = useMemo(
    () => (theme === "light" ? lightTheme : darkTheme),
    [theme]
  );

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
