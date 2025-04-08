"use client"

import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"

// Componentes
import { LoadingCart } from "./components/LoadingCart"
import { EmptyCart } from "./components/EmptyCart"
import { CartList } from "./components/CartList"
import { OrderSummary } from "./components/OrderSummary"

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal, isLoading, clearCart } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    router.push("/checkout")
  }

  if (isLoading) {
    return <LoadingCart />
  }

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Tu Carrito</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
        <CartList
          cart={cart}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          removeFromCart={removeFromCart}
        />

        <OrderSummary
          total={getTotal()}
          onCheckout={handleCheckout}
          onClearCart={clearCart}
        />
      </div>
    </div>
  )
}

