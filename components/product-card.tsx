"use client"

import type { Product } from "@/types/product"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02]">
      <Link href={`/product/${product.id}`} className="block p-4 flex-grow">
        <div className="aspect-square relative mb-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <h2 className="font-medium text-lg mb-2 line-clamp-2" title={product.title}>
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        <div className="text-xl font-bold">${product.price.toFixed(2)}</div>
      </Link>
      <div className="p-4 pt-0 mt-auto">
        <Button onClick={() => addToCart(product)} className="w-full" variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}

