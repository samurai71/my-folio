import { inter, raleway } from './fonts'
import "./globals.css";

import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Mark Landeryou's Personal Portfolio",
  description:
    "Mark Landeryou for Sarina, Ontario, Canada his personal portfolio",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen")}>
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
