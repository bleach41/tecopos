"use client"

import { useCategories } from "@/hooks/use-categories"
import { useSearchParams } from "@/hooks/use-search-params"
import { SearchBar } from "./SearchFilter/SearchBar"
import { FilterControls } from "./SearchFilter/FilterControls"
import { ActiveFilters } from "./SearchFilter/ActiveFilters"

export default function SearchFilters() {
  const { data: categories = [] } = useCategories()
  const {
    search,
    setSearch,
    categories: selectedCategories,
    setCategories: setSelectedCategories,
    sort,
    setSort,
    resetFilters: handleReset,
    hasActiveFilters
  } = useSearchParams()

  const categoryOptions = categories.map(cat => ({
    label: cat.name,
    value: cat.slug
  }))

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

