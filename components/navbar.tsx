"use client"

import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const { cart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              TechStore
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="font-medium text-gray-600 hover:text-gray-900">
              Inicio
            </Link>
            <Link href="/cart" className="relative">
              <Button title="Carrito de compras" variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <Link href="/cart" className="relative mr-2">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 py-2"
              >
                Inicio
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

