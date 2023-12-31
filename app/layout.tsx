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
  viewport: "width=device-width, initial-scale=1",
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
        className={`${inter.className} bg-base-200 heropattern-topography-current/10`}
      >
        <NextTopLoader />
        <NavBar />
        {/* <FlowField className='absolute top-0 left-0 -z-10 w-screen min-h-screen overflow-hidden' /> */}
        <div className="divider -mt-2 w-[90%] mx-auto"></div>
        <main className="px-4">{children}</main>
        <Footer className="my-4" />
      </body>
    </html>
  );
}
