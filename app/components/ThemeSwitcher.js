import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { ThemeContext } from "../theme/ThemeContextProvider";

// ThemeSwitcher component to handle switching the theme
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

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

export default ThemeSwitcher;
