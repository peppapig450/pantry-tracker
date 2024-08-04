import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "WasteNotWantNot",
  description:
    "WasteNotWantNot provides a user friendly, minimal interface to easily manage your pantry and keep track of what you have and what you need!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <Analytics>{children}</Analytics>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
