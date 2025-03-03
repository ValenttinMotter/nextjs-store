"use client";

import { Box, Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard/ProductCard";

type ProductProps = {
  title: string;
  image: string;
  description: string;
  price: number;
};

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Box>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        {products.map((product) => (
          <ProductCard
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </Container>
    </Box>
  );
}
