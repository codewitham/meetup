import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AuthProvider from "./AuthProvider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "meet",
  description: "A meeting app for business owners and seminars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
