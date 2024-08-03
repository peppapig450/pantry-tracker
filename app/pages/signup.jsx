"use client";

import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SignUpForm from "../components/SignUpForm";
import BaseAppBar from "../components/AppBars/BaseAppBar";

const SignUpPage = () => {
  const theme = useTheme();
  <>
    <BaseAppBar theme={theme} />
    <Container maxWidth="xs">
      <SignUpForm theme={theme} />
    </Container>
  </>;
};

export default SignUpPage;
