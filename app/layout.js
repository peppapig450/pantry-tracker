import "./globals.css";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";

export const metadata = {
  title: "Pantry Pal",
  description:
    "Take control of your pantry with PantryPal! Easily track your food items, set expiration dates, and create shopping lists. Our intuitive interface makes pantry management a breeze. Use PantryPal today and enjoy a well-organized kitchen!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
