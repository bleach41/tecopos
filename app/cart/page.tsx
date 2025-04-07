"use client"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import Link from "next/link"
import { Trash2, MinusCircle, PlusCircle, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal, isLoading, clearCart } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    router.push("/checkout")
  }

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

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Tu Carrito</h1>
        <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
          <p className="mb-6 text-gray-600">Tu carrito está vacío</p>
          <Link href="/" className="w-full block">
            <Button className="w-full">Continuar comprando</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Tu Carrito</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
        <div className="xl:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="block xl:hidden">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="p-4 border-b last:border-b-0">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 relative flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title || "Producto"}
                        className="object-contain"
                        fill
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${item.id}`} className="hover:underline">
                        <h3 className="text-base font-medium text-gray-900 truncate mb-1">
                          {item.title || "Producto"}
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500 mb-3">${item.price.toFixed(2)}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                            aria-label="Disminuir cantidad"
                          >
                            <MinusCircle className="h-6 w-6" />
                          </button>
                          <span className="w-8 text-center text-lg">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Aumentar cantidad"
                          >
                            <PlusCircle className="h-6 w-6" />
                          </button>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="font-medium text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Eliminar producto"
                          >
                            <Trash2 className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <table className="hidden xl:table min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Producto
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <tr key={`${item.id}-${index}`}>
                    <td className=" py-4">
                      <div className="flex items-center">
                        <div className="h-16 w-16 relative flex-shrink-0 mr-4">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title || "Producto"}
                            className="object-contain"
                            fill
                          />
                        </div>
                        <div className="max-w-xs">
                          <Link href={`/product/${item.id}`} className="hover:underline">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {item.title || "Producto"}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                          aria-label="Disminuir cantidad"
                        >
                          <MinusCircle className="h-5 w-5" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="text-gray-500 hover:text-gray-700"
                          aria-label="Aumentar cantidad"
                        >
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-lg font-bold mb-4">Resumen del pedido</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Envío</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Button onClick={handleCheckout} className="w-full" size="lg">
                Finalizar compra <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/" className="block text-center">
                <Button variant="outline" className="w-full" size="lg">
                  Continuar comprando
                </Button>
              </Link>
              <Button
                onClick={clearCart}
                variant="ghost"
                className="w-full text-red-600 hover:text-red-800 hover:bg-red-50"
                size="sm"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Vaciar carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

