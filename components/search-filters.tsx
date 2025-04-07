"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, X, SortAsc, SortDesc } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDebounce } from "@/hooks/use-debounce"
import { MultiSelect } from "@/components/ui/multi-select"
import { useCategories } from "@/hooks/use-categories"

export default function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: categories = [], isLoading } = useCategories()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) || []
  )
  const [sort, setSort] = useState(searchParams.get("sort") || "none")

  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (debouncedSearch) {
      params.set("search", debouncedSearch)
    } else {
      params.delete("search")
    }
    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","))
    } else {
      params.delete("categories")
    }
    if (sort && sort !== "none") {
      params.set("sort", sort)
    } else {
      params.delete("sort")
    }
    router.push(`/?${params.toString()}`)
  }, [debouncedSearch, selectedCategories, sort, router])

  const handleReset = () => {
    setSearch("")
    setSelectedCategories([])
    setSort("none")
    router.push("/")
  }

  const categoryOptions = categories.map(cat => ({
    label: cat.name,
    value: cat.slug
  }))

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MultiSelect
              options={categoryOptions}
              selected={selectedCategories}
              onChange={setSelectedCategories}
              placeholder="Seleccionar categorías"
              className="min-w-[200px]"
            />

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger aria-label="Ordenar por precio">
                <SelectValue placeholder="Ordenar por precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Sin ordenar</SelectItem>
                <SelectItem value="asc">
                  <div className="flex items-center">
                    <SortAsc className="mr-2 h-4 w-4" />
                    Precio más bajo
                  </div>
                </SelectItem>
                <SelectItem value="desc">
                  <div className="flex items-center">
                    <SortDesc className="mr-2 h-4 w-4" />
                    Precio más alto
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {(search || selectedCategories.length > 0 || sort !== "none") && (
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
        )}
      </div>
    </div>
  )
}

