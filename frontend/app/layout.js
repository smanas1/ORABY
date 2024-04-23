import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oraby",
  description: "Oraby Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {<Providers>{children}</Providers>}
      </body>
    </html>
  );
}
