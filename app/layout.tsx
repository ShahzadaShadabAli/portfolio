import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Shahzada's Portfolio",
  description: "Minimalistic and Captivating Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/boy.png" sizes="32x32" />
      </head>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
