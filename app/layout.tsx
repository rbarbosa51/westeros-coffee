import './globals.css'
import type { Metadata } from 'next'
import { Bakbak_One, Inter } from 'next/font/google'
import FlowField from '@/components/FlowField'
import NavBar from '@/components/NavBar'
const inter = Inter({ subsets: ['latin'] })
//const bakbak = Bakbak_One({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Westeros Coffee',
  description: 'Westeros Coffee demo page. If you like my work hire me!',
  authors: {name: "Rafael Barbosa  --> Hire me!!!"},
  keywords: ["Coffee Demo Page", "Westeros Coffee", "Hire me", "Game of Thrones"],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: 'Westeros Coffee',
    type: 'website',
    images: '/dragon1.jpeg',
    url: 'http://localhost'
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="html" lang="en" data-theme="winter">
      <body className={`${inter.className} bg-base-100`}>
        <NavBar />
        {/* <FlowField className='absolute top-0 left-0 -z-10 w-screen min-h-screen overflow-hidden' /> */}
        <div className='divider -mt-2 w-[90%] mx-auto'></div>
        <main className='px-4'>{children}</main>
      </body>
    </html>
  )
}
