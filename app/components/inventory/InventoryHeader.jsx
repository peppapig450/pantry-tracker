import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const inventoryHeader = ({ inventoryName }) => (
  <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
    <Typography variant="h4">{inventoryName}</Typography>
  </Paper>
);

export default inventoryHeader;
