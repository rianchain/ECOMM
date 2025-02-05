import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  // Add console log to inspect the response
  console.log("API Response:", res);

  if (!res.ok) {
    console.error("Failed to fetch products:", res.statusText);
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default getProducts;
