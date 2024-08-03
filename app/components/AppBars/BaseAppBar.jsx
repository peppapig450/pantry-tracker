import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const BaseAppBar = ({ theme }) => {
  return (
    <AppBar position="static" color={theme.palette.primary.main}>
      <Toolbar>
        <Typography variant="h6" color={theme.palette.primary.contrastText}>
          WasteNotNotWant
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BaseAppBar;
