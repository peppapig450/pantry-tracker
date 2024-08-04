"use client";

import { Container } from "@mui/material";
import SignInForm from "../components/forms/SignInForm";
import BaseAppBar from "../components/app-level/AppBars/BaseAppBar";
import { useTheme } from "@mui/material";

const SignInPage = () => {
  const theme = useTheme();

  return (
    <>
      <BaseAppBar theme={theme} />
      <Container maxWidth="xs">
        <SignInForm theme={theme} />
      </Container>
    </>
  );
};

export default SignInPage;
