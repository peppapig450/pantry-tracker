import React from "react";
import { Fab, useTheme, Tooltip, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const FloatingActionButton = ({ onClick, variant = "add" }) => {
  const theme = useTheme();

  return (
    <Tooltip
      title={variant === "add" ? "Add Item" : "Edit Item"}
      arrow
      placement="left"
      enterDelay={500}
      leaveDelay={200}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: theme.spacing(3),
          right: theme.spacing(3),
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
          borderRadius: "50px",
          padding: theme.spacing(1),
        }}
      >
        <Fab
          color="primary"
          aria-label={variant === "add" ? "add" : "edit"}
          onClick={onClick}
          sx={{ marginRight: theme.spacing(1) }}
        >
          {variant === "add" ? <AddIcon /> : <EditIcon />}
        </Fab>
        <Typography
          variant="button"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          {variant === "add" ? "Add Item" : "Edit Item"}
        </Typography>
      </Box>
    </Tooltip>
  );
};
