import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import useLoading from "./hooks/useLoading";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./components/pages/Loading";

export const metadata = {
  title: "WasteNotWantNot",
  description:
    "WasteNotWantNot provides a user friendly, minimal interface to easily manage your pantry and keep track of what you have and what you need!",
};

export default function RootLayout({ children }) {
  const loading = useLoading();

  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <Analytics>
            {loading && <Loading />}
            {children}
          </Analytics>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
