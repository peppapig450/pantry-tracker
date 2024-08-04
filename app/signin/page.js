"use client";

import { Container } from "@mui/material";
import SignInForm from "../components/SignInForm";
import BaseAppBar from "../components/AppBars/BaseAppBar";
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
