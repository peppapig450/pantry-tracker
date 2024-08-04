import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const FloatingActionButton = ({ onClick }) => {
  return (
    <StyledFab color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
    </StyledFab>
  );
};

export default FloatingActionButton;
