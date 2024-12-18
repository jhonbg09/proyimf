import type { Metadata } from "next";
import {Inter} from "next/font/google"
/* import localFont from "next/font/local"; */
import "./globals.css";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "App Imporfrenos funza",
  description: "App Imporfrenos funza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
} 
