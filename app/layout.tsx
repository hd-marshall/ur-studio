import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import localFont from 'next/font/local'
import Header from "./components/Header"
import Footer from "./components/Footer"

const customFont = localFont({
  src: '../public/fonts/Nitti-Normal.ttf',
  variable: '--font-body',
  display: 'swap',
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "UR Studio - Men's Barber | West Melbourne",
  description:
    "Experience Melbourne's finest men's grooming at Precision Barber Studio. Premium haircuts, traditional shaves, and beard sculpting in the heart of Melbourne CBD. Book your appointment today.",
  keywords:
    "premium barber Melbourne, men's haircuts west melbourne, traditional shave Melbourne, beard grooming, luxury barbershop",
  openGraph: {
    title: "UR Studio - Men's Barber | West Melbourne",
    description: "Modern and tailored barbers in West Melbourne.",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth overflow-x-hidden ${customFont.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw] w-full`}>
        <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
          <Header />
          <main className="w-full max-w-[100vw] overflow-x-hidden">
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}