"use client";

import { useEffect, useState } from "react";

export type ProductProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
};

export function useProducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return products;
}
