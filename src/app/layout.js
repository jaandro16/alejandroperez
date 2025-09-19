import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingParticles from "@/components/floating-particles"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Alejandro Pérez - Web Developer Portfolio",
  description:
    "Junior Web Developer specializing in modern web technologies. Passionate about creating exceptional digital experiences.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <FloatingParticles />
        <Navbar />
        <main className="flex-1 pt-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
