"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Loading from "./loading";

const StoreProvider = dynamic(() => import("./StoreProvider"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Budget App</title>
        <link rel="icon" href="/favicon2.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<Loading />}>
          <StoreProvider>
            <Navbar />
            <div style={{ padding: "1.5rem" }}>{children}</div>
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
