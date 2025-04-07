import { Category } from "@/types/category";

const API_URL = "https://fakestoreapi.com";

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    if (!response.ok) {
      throw new Error("Error fetching categories");
    }
    const data: string[] = await response.json();

    // Transformar las categorías al formato deseado
    const categories: Category[] = data.map((category) => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      slug: category.toLowerCase(),
    }));

    return categories;
  } catch (error) {
    console.error("Error in fetchCategories:", error);
    throw error;
  }
}

export async function fetchCategory(slug: string): Promise<Category | null> {
  try {
    const categories = await fetchCategories();
    return categories.find((category) => category.slug === slug) || null;
  } catch (error) {
    console.error("Error in fetchCategory:", error);
    throw error;
  }
}
