import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import 'react-loading-skeleton/dist/skeleton.css';
import "slick-carousel/slick/slick-theme.css";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryProvider } from "./ReactQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IsAnime",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ReactQueryProvider>
          <html lang="en">
            <head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                {children}
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
              </body>
          </html>
        </ReactQueryProvider>
  );
}
