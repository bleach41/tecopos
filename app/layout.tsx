import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import { Providers } from "@/context/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tecopos - Prueba Tony",
  description: "Tienda onlien generica",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}



import '@/styles/globals.css'