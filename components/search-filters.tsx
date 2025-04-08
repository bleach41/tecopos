"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useDebounce } from "@/hooks/use-debounce"
import { useCategories } from "@/hooks/use-categories"
import { useState, useEffect, useCallback } from "react"
import { SearchBar } from "./SearchFilter/SearchBar"
import { FilterControls } from "./SearchFilter/FilterControls"
import { ActiveFilters } from "./SearchFilter/ActiveFilters"

export default function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: categories = [] } = useCategories()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) || []
  )
  const [sort, setSort] = useState(searchParams.get("sort") || "none")

  const debouncedSearch = useDebounce(search, 500)

  const createQueryString = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const urlSearchParams = new URLSearchParams(searchParams.toString())

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || (Array.isArray(value) && value.length === 0) || value === "none") {
          urlSearchParams.delete(key)
        } else if (Array.isArray(value)) {
          urlSearchParams.set(key, value.join(","))
        } else {
          urlSearchParams.set(key, value)
        }
      })

      return urlSearchParams.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    const queryString = createQueryString({
      search: debouncedSearch || null,
      categories: selectedCategories.length > 0 ? selectedCategories : null,
      sort: sort !== "none" ? sort : null
    })

    router.push(`/?${queryString}`)
  }, [debouncedSearch, selectedCategories, sort, router, createQueryString])

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

  const hasActiveFilters = search || selectedCategories.length > 0 || sort !== "none"

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="space-y-4">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterControls
          categoryOptions={categoryOptions}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          sort={sort}
          setSort={setSort}
        />

        {hasActiveFilters && (
          <ActiveFilters
            search={search}
            setSearch={setSearch}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            handleReset={handleReset}
          />
        )}
      </div>
    </div>
  )
}

