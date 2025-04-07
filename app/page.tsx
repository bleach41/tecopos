import { ProductList } from "@/components/product-list"
import SearchFilters from "@/components/search-filters"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Nuestra Tienda</h1>
      <SearchFilters />
      <ProductList />
    </div>
  )
}

