import React from "react";
import { Box, Button, Typography } from "@mui/material";
import FormTitle from "./FormTitle";
import SocialSignInButton from "./SocialSignInButton";

const AuthForm = ({
  title,
  children,
  handleSubmit,
  handleSocialAuth,
  socialAuthText,
  handleSwitchAuth,
  error,
  theme,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="80vh"
    textAlign="center"
  >
    <FormTitle text={title} />
    <Box component="form" onSubmit={handleSubmit} noValidate={{ mt: 1 }}>
      {children}
      {error && <Typography color="error">{error}</Typography>}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        sx={{ mt: 3, mb: 2 }}
      >
        {title}
      </Button>
      <SocialSignInButton onClick={handleSocialAuth} text={socialAuthText} />
      <Button
        fullWidth
        variant="text"
        color="secondary"
        onClick={handleSwitchAuth}
      >
        Don&apos;t have an account? Sign Up
      </Button>
    </Box>
  </Box>
);

export default AuthForm;
