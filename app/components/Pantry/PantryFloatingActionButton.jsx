import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

const FloatingActionButton = ({ onClick }) => {
  const theme = useTheme();

  return (
    <Fab
      aria-label="add"
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default FloatingActionButton;
