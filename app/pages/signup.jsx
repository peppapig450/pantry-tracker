"use client";

import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  const theme = useTheme();
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        WasteNotNotWant
      </Typography>
    </Toolbar>
  </AppBar>;
  <Container maxWidth="xs">
    <SignUpForm />
  </Container>;
};

export default SignUpPage;
