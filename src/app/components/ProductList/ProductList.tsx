"use client";

import { Container } from "@mui/material";
import { useCart } from "@/app/hooks/useCart";
import { Product } from "../Product/Product";

type ProductProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
};

type ProductListProps = {
  products: ProductProps[];
};

export const ProductList = ({ products }: ProductListProps) => {
  const { cartProducts, addProductToCart, removeProductFromCart } = useCart();

  return (
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
        const isProductInCart = cartProducts.some(
          (item) => item.id === product.id
        );

        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            category={product.category}
            quantity={product.quantity}
            onAddToCart={() => addProductToCart(product)}
            onRemoveOfCart={() => removeProductFromCart(product.id)}
            isOnCart={isProductInCart}
          />
        );
      })}
    </Container>
  );
};
