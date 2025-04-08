import React, { Suspense } from 'react'
import { Skeleton } from "@/components/ui/skeleton"

// Importación diferida del componente ProductList que es pesado
const ProductList = React.lazy(() => import('@/components/product-list-lazy'))

// Componente de esqueleto para mostrar mientras carga
function ProductListSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            ))}
        </div>
    )
}

export default function ProductosPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Nuestros Productos</h1>

            {/* Uso de Suspense para carga diferida */}
            <Suspense fallback={<ProductListSkeleton />}>
                <ProductList />
            </Suspense>
        </div>
    )
} 