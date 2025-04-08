"use client"

import React from "react"
import dynamic from "next/dynamic"

// Carga diferida del componente de animación en un componente cliente
const AnimatedLayout = dynamic(() => import("@/components/animated-layout"), {
    ssr: false, // Aquí es válido usar ssr: false porque estamos en un componente cliente
    loading: () => <div className="min-h-screen">{/* loader placeholder */}</div>,
})

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <AnimatedLayout>
            {children}
        </AnimatedLayout>
    )
} 