import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/sections/navigation";

export const metadata: Metadata = {
  title: "Sudhanshu Singh",
  description: "I build pixel-perfect designs and scalable solutions for the modern web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased py-16",
        GeistSans.variable,
        GeistMono.variable,
      )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
