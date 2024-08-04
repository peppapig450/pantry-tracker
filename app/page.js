"use client";

import SignUpPage from "./signup/page";
import SignInPage from "./signin/page";
import LandingPage from "./landing/page";
import PantryPage from "./pantry/page";

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

  return <PageComponent />;
};

export default Page;
