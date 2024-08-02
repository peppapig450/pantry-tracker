import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Typography from "@mui/material/Typography";

import { ThemeContext } from "../theme/ThemeContextProvider";

// ThemeSwitcher button component to handle switching the theme
const ThemeSwitcherButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Tooltip
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <IconButton onClick={toggleTheme} color="inherit">
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

// ThemeSwitcher menu item component to handle switching the theme on mobile
const ThemeSwitcherMenuItem = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <MenuItem onClick={toggleTheme} color="inherit">
      {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      <Typography variant="body1" style={{ marginLeft: "10px" }}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Typography>
    </MenuItem>
  );
};
export { ThemeSwitcherButton, ThemeSwitcherMenuItem };
