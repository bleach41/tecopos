"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ShoppingCart, Star } from "lucide-react"
import { useProduct } from "@/hooks/use-products"

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { data: product, isLoading, error } = useProduct(id as string)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="aspect-square w-full rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-28" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <p>Lo sentimos, no pudimos encontrar el producto que buscas.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square relative bg-white rounded-xl p-6 flex items-center justify-center border">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="max-h-[400px] w-auto object-contain"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(product.rating?.rate || 0) ? "fill-yellow-400" : "fill-gray-200"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.rating?.count || 0} reseñas)</span>
              </div>
            </div>

            <div>
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Descripción</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="pt-4">
              <Button onClick={() => addToCart(product)} size="lg" className="w-full sm:w-auto">
                <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

