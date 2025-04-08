"use client"

import { SortAsc, SortDesc } from "lucide-react"
import { MultiSelect } from "@/components/ui/multi-select"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CategoryOption {
    label: string
    value: string
}

interface FilterControlsProps {
    categoryOptions: CategoryOption[]
    selectedCategories: string[]
    setSelectedCategories: (categories: string[]) => void
    sort: string
    setSort: (sort: string) => void
}

export function FilterControls({
    categoryOptions,
    selectedCategories,
    setSelectedCategories,
    sort,
    setSort,
}: FilterControlsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MultiSelect
                options={categoryOptions}
                selected={selectedCategories}
                onChange={setSelectedCategories}
                placeholder="Seleccionar categorías"
                className="min-w-[200px]"
                aria-label="Seleccionar categorías"
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
    )
} 