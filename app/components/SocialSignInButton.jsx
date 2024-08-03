import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SocialSignInButton = ({ onClick, text }) => (
  <Button
    fullWidth
    variant="contained"
    color="secondary"
    onClick={onClick}
    sx={{ mb: 2 }}
    startIcon={<GoogleIcon />}
  >
    {text}
  </Button>
);

export default SocialSignInButton;
