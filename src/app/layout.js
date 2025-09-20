import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/client-layout"
import { Analytics } from "@vercel/analytics/next"

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
      <body className="min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
