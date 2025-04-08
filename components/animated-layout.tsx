"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            {children}
        </motion.main>
    )
} 