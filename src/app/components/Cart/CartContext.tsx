"use client";

import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

interface CartProduct {
  id: number;
  title: string;
  price: number;
}

interface CartContextProps {
  children: React.ReactNode;
}

interface CartContextValue {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: CartContextProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [alertOpen, setAlertOpen] = useState(false);

  const addProductToCart = (product: CartProduct) => {
    const isDuplicate = cartProducts.some((item) => item.id === product.id);

    isDuplicate
      ? setAlertOpen(true)
      : setCartProducts([...cartProducts, product]);
  };

  const removeProductFromCart = (id: number) => {
    setCartProducts(cartProducts.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="warning"
          variant="filled"
        >
          Este produto já está adicionado no carrinho!
        </Alert>
      </Snackbar>
    </CartContext.Provider>
  );
};

export default CartContext;
