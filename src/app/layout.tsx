import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { headers } from "next/headers";

import { cn } from "@/lib/utils";
import  Nav  from "@/components/Nav";
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner";

import { cookieToInitialState } from "wagmi";

import { config } from "@/configs";
import Web3ModalProvider from "@/contexts/Web3Modal";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const initialState = cookieToInitialState(config, headers().get("cookie")) || null;
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.jpeg" />
        <title>Smart Mountain</title>
        <meta name="description" content="Smart mountain form website" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gray-200",
          fontSans.variable
        )}
      >
        <div id="root">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {/* <Nav /> */}
            {children}
            <Footer />
          </ThemeProvider>
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
