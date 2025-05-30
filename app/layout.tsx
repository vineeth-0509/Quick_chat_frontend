import type { Metadata } from "next";
import {Inter as FontSans} from "next/font/google";
import "./globals.css";
import SessionProvider from "./providers/SessionProvider";
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Chat-App",
  description: "To chat quick as possible without any login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider>

      
      <body
        className={fontSans.className} 
      >
        {children}
        <Toaster richColors duration={10000}/>
      </body>
      </SessionProvider>
    </html>
  );
}
