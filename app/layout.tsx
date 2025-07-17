import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer } from "@/components";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Westeros Coffee",
  description: "Westeros Coffee demo page. If you like my work hire me!",
  authors: { name: "Rafael Barbosa  --> Hire me!!!" },
  keywords: [
    "Coffee Demo Page",
    "Westeros Coffee",
    "Hire me",
    "Game of Thrones",
  ],
  // viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://westeros-coffee.vercel.app/"),
  openGraph: {
    title: "Westeros Coffee",
    type: "website",
    images: "https://westeros-coffee.vercel.app/dragon1.jpeg",
    url: "https://westeros-coffee.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="html" lang="en" data-theme="winter">
      <body
        className={`${inter.className} bg-base-200 hero-pattern  p-4`}
      >
        <NextTopLoader />
        <NavBar />
        
        <div className="divider -mt-2 w-[90%] mx-auto"></div>
        <main className="px-4">{children}</main>
        <Footer className="my-4" />
      </body>
    </html>
  );
}
//heropattern-topography-current/30