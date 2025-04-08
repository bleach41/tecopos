"use client"

import { useState } from "react"
import { useCart } from "@/context/cart-context"

// Componentes
import Logo from "@/components/Navbar/Logo"
import DesktopNav from "@/components/Navbar/DesktopNav"
import MobileControls from "@/components/Navbar/MobileControls"
import MobileNav from "@/components/Navbar/MobileNav"

export default function Navbar() {
  const { cart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNav totalItems={totalItems} />
          <MobileControls
            totalItems={totalItems}
            isMenuOpen={menuOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

