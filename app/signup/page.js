"use client";

import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SignUpForm from "../components/SignUpForm";
import BaseAppBar from "../components/app-level/AppBars/BaseAppBar";
import { ThemeContextProvider } from "../theme/ThemeContextProvider";

const SignUpPage = () => {
  const theme = useTheme();

  return (
    <>
      <BaseAppBar theme={theme} />
      <Container maxWidth="xs">
        <SignUpForm theme={theme} />
      </Container>
    </>
  );
};

export default SignUpPage;
