import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { ThemeSwitcherButton, ThemeSwitcherMenuItem } from "../ThemeSwitcher";

const BaseAppBar = ({ theme }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          color={theme.palette.primary.contrastText}
          sx={{ flexGrow: 1 }}
        >
          WasteNotWantNot
        </Typography>
        <Box
          sx={{
            display: { sm: "flex", md: "none" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <ThemeSwitcherMenuItem />
          </Menu>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <ThemeSwitcherButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default BaseAppBar;
