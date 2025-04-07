"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/query-client"
import { CartProvider } from "@/context/cart-context"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                {children}
            </CartProvider>
        </QueryClientProvider>
    )
} 