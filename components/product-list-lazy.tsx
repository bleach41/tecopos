"use client"

import { useProducts } from "@/hooks/use-products"
import ProductCard from "./product-card"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

// Este componente será cargado de forma diferida
export default function ProductListLazy() {
    const { data: products, isLoading, error } = useProducts()
    const searchParams = useSearchParams()

    const search = searchParams.get("search")?.toLowerCase() || ""
    const selectedCategories = searchParams.get("categories")?.split(",").filter(Boolean) || []
    const sort = searchParams.get("sort") || "none"

    const filteredAndSortedProducts = useMemo(() => {
        return products
            ?.filter((product) => {
                const matchesSearch = search
                    ? product.title.toLowerCase().includes(search) ||
                    product.description.toLowerCase().includes(search)
                    : true

                const matchesCategories =
                    selectedCategories.length === 0 || selectedCategories.includes(product.category)

                return matchesSearch && matchesCategories
            })
            .sort((a, b) => {
                if (sort === "asc") {
                    return a.price - b.price
                }
                if (sort === "desc") {
                    return b.price - a.price
                }
                return 0
            })
    }, [products, search, selectedCategories, sort])

    if (isLoading) {
        return null // El loading ya es manejado por el Suspense en el padre
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-500">Error al cargar los productos</p>
            </div>
        )
    }

    if (!filteredAndSortedProducts?.length) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-500">No se encontraron productos que coincidan con los filtros</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
} 