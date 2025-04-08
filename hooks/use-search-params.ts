"use client";

import {
  useRouter,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "./use-debounce";

interface SearchParamsOptions {
  debounceTime?: number;
}

export interface SearchParamsState {
  search: string;
  setSearch: (value: string) => void;
  categories: string[];
  setCategories: (value: string[]) => void;
  sort: string;
  setSort: (value: string) => void;
  resetFilters: () => void;
  hasActiveFilters: boolean;
}

export function useSearchParams(
  options: SearchParamsOptions = {}
): SearchParamsState {
  const { debounceTime = 500 } = options;
  const router = useRouter();
  const searchParams = useNextSearchParams();

  // Estados iniciales desde URL
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [categories, setCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) || []
  );
  const [sort, setSort] = useState(searchParams.get("sort") || "none");

  // Debounce para la búsqueda
  const debouncedSearch = useDebounce(search, debounceTime);

  // Función para generar la cadena de consulta de URL
  const createQueryString = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const urlSearchParams = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (
          value === null ||
          (Array.isArray(value) && value.length === 0) ||
          value === "none"
        ) {
          urlSearchParams.delete(key);
        } else if (Array.isArray(value)) {
          urlSearchParams.set(key, value.join(","));
        } else {
          urlSearchParams.set(key, value);
        }
      });

      return urlSearchParams.toString();
    },
    [searchParams]
  );

  // Actualiza la URL cuando cambian los filtros
  useEffect(() => {
    const queryString = createQueryString({
      search: debouncedSearch || null,
      categories: categories.length > 0 ? categories : null,
      sort: sort !== "none" ? sort : null,
    });

    router.push(`/?${queryString}`);
  }, [debouncedSearch, categories, sort, router, createQueryString]);

  // Función para resetear todos los filtros
  const resetFilters = useCallback(() => {
    setSearch("");
    setCategories([]);
    setSort("none");
    router.push("/");
  }, [router]);

  // Determinar si hay filtros activos
  const hasActiveFilters =
    Boolean(search) || categories.length > 0 || sort !== "none";

  return {
    search,
    setSearch,
    categories,
    setCategories,
    sort,
    setSort,
    resetFilters,
    hasActiveFilters,
  };
}
