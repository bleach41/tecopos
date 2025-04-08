import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import { Providers } from "@/context/providers"
import ClientWrapper from "@/components/client-wrapper"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tecopos - Prueba Tony",
  description: "Tienda online generica",
  // Metadata adicional para redes sociales
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tienda-online.example.com",
    title: "Tienda Online - Productos de calidad",
    description: "Explora nuestra selección de productos y encuentra las mejores ofertas",
    siteName: "Tienda Online",
    images: [
      {
        url: "https://tienda-online.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tienda Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda Online - Productos de calidad",
    description: "Explora nuestra selección de productos y encuentra las mejores ofertas",
    images: ["https://tienda-online.example.com/twitter-image.jpg"],
  },
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
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </Providers>
      </body>
    </html>
  )
}