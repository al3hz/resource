import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Head from 'next/head'
import { url } from "inspector";

const myFont = localFont({
  src: "../public/Fuentes/Rubik-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Overlain",
  description: "Pagina de links de redes sociales y mas"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
