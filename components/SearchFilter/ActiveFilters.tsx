"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ActiveFiltersProps {
    search: string
    setSearch: (search: string) => void
    selectedCategories: string[]
    setSelectedCategories: (categories: string[]) => void
    handleReset: () => void
}

export function ActiveFilters({
    search,
    setSearch,
    selectedCategories,
    setSelectedCategories,
    handleReset,
}: ActiveFiltersProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="flex flex-wrap gap-2 flex-1">
                {search && (
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                        Búsqueda: {search}
                        <button
                            onClick={() => setSearch("")}
                            className="ml-2"
                            aria-label="Eliminar filtro de búsqueda"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                )}
                {selectedCategories.map((category) => (
                    <div
                        key={category}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        <button
                            onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== category))}
                            className="ml-2"
                            aria-label={`Eliminar filtro ${category}`}
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                ))}
            </div>
            <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="flex items-center shrink-0 w-full sm:w-auto justify-center"
                aria-label="Limpiar todos los filtros"
            >
                <X className="mr-2 h-4 w-4" />
                Limpiar filtros
            </Button>
        </div>
    )
} 