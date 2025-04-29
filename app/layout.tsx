import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Budgets control app",
  description: "Made by Puly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
