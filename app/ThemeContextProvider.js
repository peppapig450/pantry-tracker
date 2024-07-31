import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

// Creates a React context for theme-related values
export const ThemeContext = createContext();

// Provides theme context to child components
export const ThemeContextProvider = ({ children }) => {
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState("light"); // TODO: use system default

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
};
