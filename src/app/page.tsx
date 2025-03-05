"use client";

import { Box, Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard/ProductCard";
import CartContext from "./components/Cart/CartContext";

type ProductProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
};

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const context = useContext(CartContext);

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
        {products.map((product) => {
          const isProductInCart = (context?.cartProducts ?? []).some(
            (item) => item.id === product.id
          );
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              category={product.category}
              onAddToCart={() => context?.addProductToCart(product)}
              onRemoveOfCart={() => context?.removeProductFromCart(product.id)}
              isOnCart={isProductInCart}
            />
          );
        })}
      </Container>
    </Box>
  );
}
