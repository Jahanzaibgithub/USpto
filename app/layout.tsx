import "./globals.css";
import { Montserrat } from "next/font/google";
import image from "../public/assets/faviconV2.png";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Trademark Center",
  icons: {
    icon: "/assets/faviconV2.png", // ✅ use string path from public folder
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
