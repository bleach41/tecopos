import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import { Providers } from "@/context/providers"
import AnimatedLayout from "@/components/animated-layout"

const jost = Jost({ subsets: ["latin"] })

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
      <body className={jost.className}>
        <Providers>
          <Navbar />
          <AnimatedLayout>
            {children}
          </AnimatedLayout>
        </Providers>
      </body>
    </html>
  )
}