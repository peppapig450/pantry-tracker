import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";
import BaseAppBar from "../components/app-level/AppBars/BaseAppBar";
import LandingPageContent from "../components/LandingPageContent";

const LandingPage = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <>
      <BaseAppBar theme={theme} />
      <LandingPageContent handleSignIn={handleSignIn} />
    </>
  );
};

export default LandingPage;
