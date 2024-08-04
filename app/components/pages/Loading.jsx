import React from "react";
import { CircularProgress, Box, useTheme } from "@mui/material";

const Loading = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        backgroundColor: theme.palette.background.default,
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
