import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";
import BaseAppBar from "../components/AppBars/BaseAppBar";
import LandingPageContent from "../components/LandingPage";

const LandingPage = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <>
      <BaseAppBar />
      <LandingPageContent handleSignIn={handleSignIn} theme={theme} />
    </>
  );
};

export default LandingPage;
