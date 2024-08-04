"use client";

import LandingPage from "./pages/landing";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import PantryPage from "./pages/pantry";

import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  let PageComponent;

  switch (pathname) {
    case "/signin":
      PageComponent = SignInPage;
      break;
    case "/signup":
      PageComponent = SignUpPage;
      break;
    case "/pantry":
      PageComponent = PantryPage;
      break;
    default:
      PageComponent = LandingPage;
  }

  return (
    <ThemeContextProvider>
      <PageComponent />
    </ThemeContextProvider>
  );
};

export default Page;
