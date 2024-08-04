import React from "react";
import { Button, useTheme } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SocialSignInButton = ({ onClick, text }) => {
  const theme = useTheme();

  <Button
    fullWidth
    variant="contained"
    color={theme.palette.secondary.main}
    onClick={onClick}
    sx={{ mb: 2 }}
    startIcon={<GoogleIcon />}
  >
    {text}
  </Button>;
};

export default SocialSignInButton;
