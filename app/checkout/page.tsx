"use client"

import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { toast } from "@/hooks/use-toast"
import { useCheckoutForm } from "@/hooks/use-checkout-form"

// Importar componentes
import { OrderCompleted } from "./components/OrderCompleted"
import { EmptyCart } from "./components/EmptyCart"
import { ShippingForm } from "./components/ShippingForm"
import { OrderSummary } from "./components/OrderSummary"
import { Loader2 } from "lucide-react"

export default function CheckoutPage() {
  const { cart, getTotal, clearCart, isLoading } = useCart()
  const [isComplete, setIsComplete] = useState(false)

  const {
    register,
    errors,
    isSubmitting,
    handleSubmit
  } = useCheckoutForm({
    onSuccess: () => {
      setIsComplete(true)
      clearCart()
      toast({
        title: "¡Compra realizada con éxito!",
        description: "Gracias por tu compra",
        variant: "success",
      })
    }
  })

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Tu Carrito</h1>
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
        </div>
      </div>
    )
  }

  if (isComplete) {
    return <OrderCompleted />
  }

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ShippingForm
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
        <OrderSummary cart={cart} getTotal={getTotal} />
      </div>
    </div>
  )
}