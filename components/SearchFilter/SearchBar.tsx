"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
    search: string
    setSearch: (search: string) => void
}

export function SearchBar({ search, setSearch }: SearchBarProps) {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" aria-label="Buscar productos" />
                <Input
                    type="text"
                    placeholder="Buscar productos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                    aria-label="Campo de búsqueda"
                />
            </div>
        </div>
    )
} 