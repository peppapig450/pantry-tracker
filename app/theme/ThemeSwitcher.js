import React, { useContext } from "react";
import { Switch, Box, Typography } from "@mui/material";
import { ThemeContext } from "./ThemeContextProvider";

// ThemeSwitcher switch to handle switching the theme
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box display="flex" alignItems={"center"}>
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        {theme == "light" ? "Light Mode" : "Dark Mode"}
      </Typography>
      <Switch checked={theme === "dark"} onChange={toggleTheme} />
    </Box>
  );
};

export default ThemeSwitcher;
