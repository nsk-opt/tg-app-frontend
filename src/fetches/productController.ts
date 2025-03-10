import { Category, Product } from "../misc/types";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://azenizzka.ru:8443/api/products");
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}

export async function createProduct(product: Product): Promise<Product> {
  const { id, ...productWithoutId } = product;

  const response = await fetch("https://azenizzka.ru:8443/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productWithoutId),
  });

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}

export async function updateProduct(product: Product): Promise<Product> {
  const { id, ...productWithoutId } = product;

  const response = await fetch(
    "https://azenizzka.ru:8443/api/products/" + product.id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productWithoutId),
    }
  );

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}

export async function getCategoriesByProductId(
  productId: number
): Promise<Category[]> {
  const response = await fetch(
    "https://azenizzka.ru:8443/api/products/" + productId + "/categories"
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}

export async function setProductCategories(
  productId: number,
  categoriesIds: number[]
) {
//todo
}
