"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import type { Product } from "@/types/product"
import { toast } from "@/hooks/use-toast"

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  getTotal: () => number
  clearCart: () => void
  isLoading: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      setCart(savedCart ? JSON.parse(savedCart) : [])
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      setCart([])
    } finally {
      setIsInitialized(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }
  }, [])

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart))
      } catch (error) {
        console.error("Error saving cart to localStorage:", error)
      }
    }
  }, [cart, isInitialized])

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex((item) => item.id === product.id)

      if (existingItemIndex > -1) {
        const updatedCart = [...currentCart]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        }

        toast({
          title: "Cantidad actualizada",
          description: `${product.title} (${updatedCart[existingItemIndex].quantity})`,
          variant: "default",
        })

        return updatedCart
      } else {
        toast({
          title: "Producto añadido",
          description: product.title,
          variant: "default",
        })

        return [...currentCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: number) => {
    const productToRemove = cart.find(item => item.id === id)

    setCart((currentCart) => {
      const filteredCart = currentCart.filter((item) => item.id !== id)

      if (productToRemove) {
        toast({
          title: "Producto eliminado",
          description: productToRemove.title,
          variant: "destructive",
        })
      }

      return filteredCart
    })
  }

  const increaseQuantity = (id: number) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.map((item) => {
        if (item.id === id) {
          toast({
            title: "Cantidad aumentada",
            description: `${item.title} (${item.quantity + 1})`,
            variant: "default",
          })
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      return updatedCart
    })
  }

  const decreaseQuantity = (id: number) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          toast({
            title: "Cantidad disminuida",
            description: `${item.title} (${item.quantity - 1})`,
            variant: "default",
          })
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      return updatedCart
    })
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const clearCart = () => {
    toast({
      title: "Carrito vaciado",
      description: "Se han eliminado todos los productos",
      variant: "destructive",
    })
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotal,
        clearCart,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

