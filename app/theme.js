import { createTheme } from "@mui/material/styles";

// TODO: possibly add more font options like lineHeight letterSpacing etc..

// Base typography settings that apply to both themes
const baseTypography = {
  fontFamily: "Raleway, Arial, sans-serif",
};

// Shared typography for headers
const sharedTypography = {
  ...baseTypography,
  h1: {
    fontFamily: "Playfair Display, serif",
  },
  h2: {
    fontFamily: "Playfair Display, serif",
  },
  h3: {
    fontFamily: "Playfair Display, serif",
  },
  h4: {
    fontFamily: "Playfair Display, serif",
  },
  h5: {
    fontFamily: "Playfair Display, serif",
  },
  h6: {
    fontFamily: "Playfair Display, serif",
  },
};

// Dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#34C759",
    },
    background: {
      default: "#303030",
    },
  },
  typography: sharedTypography,
});

// Light theme configuration
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#34C759",
    },
    background: {
      default: "#F2F2F2",
    },
  },
  typography: sharedTypography,
});

export { lightTheme, darkTheme };
