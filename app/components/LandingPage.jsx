import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

const LandingPageContent = ({ handleSignIn, theme }) => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center"
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to WasteNotNotWant!
        </Typography>
        <Typography variant="h5" component="h2" gutterButtom>
          The ultimate pantry management utility.
        </Typography>
        <Typography variant="body1" paragraph>
          Always know what&#39;s in your pantry with WasteNotNotWant. This easy
          to use tool allows you to manage your pantry easily and efficiently,
          ensuring you never run out of the items you need.
        </Typography>
        <Button
          variant="contained"
          color={theme.palette.secondary.main}
          onClick={handleSignIn}
          sx={{ mt: 4 }}
        >
          Sign In
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <div>
          <Link
            component={IconButton}
            href="https://nickbrady.dev"
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ color: theme.palette.secondary.main, margin: "0 1rem" }}
          >
            <PublicIcon />
          </Link>
          <Link
            component={IconButton}
            href="https://github.com/peppapig450"
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ color: theme.palette.secondary.main, margin: "0 1rem" }}
          >
            <GitHubIcon />
          </Link>
          <Link
            component={IconButton}
            href="https://www.linkedin.com/in/nick-brady-5715752b3"
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ color: theme.palette.secondary.main, margin: "0 1rem" }}
          >
            <LinkedInIcon />
          </Link>
        </div>
      </Box>
    </Container>
  );
};

export default LandingPageContent;
