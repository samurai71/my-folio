// import { Inter } from "next/font/google";
import "./globals.css";

import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Landeryou's Personal Portfolio",
  description:
    "Mark Landeryou for Sarnia, Ontario, Canada his personal portfolio",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen font-sans")}>
          <ThemeProvider attribute="class">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};
export default RootLayout;
