import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfitSans = Outfit({
  subsets: ["latin"],
  weight: ["100", "900"], // Pesos da fonte
});

export const metadata: Metadata = {
  title: "Entertainment Web App",
  description: "Movies and Series Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${outfitSans.className} antialiased min-h-screen bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
