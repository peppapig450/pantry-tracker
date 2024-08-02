import { Raleway, Playfair_Display } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

// Base typography settings for default font
const baseTypography = {
  fontFamily: raleway.style.fontFamily,
};

// Shared typography for headers
const sharedTypography = {
  ...baseTypography,
  h1: {
    fontFamily: playfairDisplay.style.fontFamily,
  },
  h2: {
    fontFamily: playfairDisplay.style.fontFamily,
  },
  h3: {
    fontFamily: playfairDisplay.style.fontFamily,
  },
  h4: {
    fontFamily: playfairDisplay.style.fontFamily,
  },
  h5: {
    fontFamily: playfairDisplay.style.fontFamily,
  },
  h6: {
    fontFamily: playfairDisplay.style.fontFamily,
  },
};

export { sharedTypography };
