import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/bootstrapClient.js";

const VT323 = localFont({
  src: "./fonts/VT323-Regular.ttf",
  variable: "--font-vt323",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "127.0.0.1",
  description: "welcome to h311",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${VT323.variable}`}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
