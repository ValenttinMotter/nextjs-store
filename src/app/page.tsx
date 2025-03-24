"use client";

import { Box, Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Product } from "./components/Product/Product";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";

export default function Home() {
  const products = useProducts();
  const { cartProducts, addProductToCart, removeProductFromCart } = useCart();

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
          const isProductInCart = (cartProducts ?? []).some(
            (item) => item.id === product.id
          );
          return (
            <Product
              id={product.id}
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              category={product.category}
              onAddToCart={() => addProductToCart(product)}
              onRemoveOfCart={() => removeProductFromCart(product.id)}
              isOnCart={isProductInCart}
            />
          );
        })}
      </Container>
    </Box>
  );
}
