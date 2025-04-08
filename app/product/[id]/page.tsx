import { Metadata } from "next"
import ProductDetail from "@/components/product-detail"
import { fetchProduct } from "@/services/products.service"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const product = await fetchProduct(params.id)

    return {
      title: `${product.title} | Tienda Online`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [
          {
            url: product.image,
            width: 800,
            height: 600,
            alt: product.title,
          }
        ],
        type: 'website',
      },
    }
  } catch (error) {
    return {
      title: "Producto no encontrado | Tienda Online",
      description: "El producto que buscas no existe o no está disponible",
    }
  }
}

export default function ProductPage({ params }: Props) {
  return <ProductDetail id={params.id} />
}

