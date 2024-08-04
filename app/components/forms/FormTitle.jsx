import React from "react";
import { Typography } from "@mui/material";

const FormTitle = ({ text }) => (
  <Typography variant="h4" component="h1" gutterBottom>
    {text}
  </Typography>
);

export default FormTitle;
