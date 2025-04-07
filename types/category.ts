export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryResponse {
  categories: Category[];
  error?: string;
}
