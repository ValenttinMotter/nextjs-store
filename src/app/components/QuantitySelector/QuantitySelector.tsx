"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "@/app/hooks/useCart";
import { useEffect, useState } from "react";

type QuantitySelectorProps = {
  productId: number;
  onQuantityChange?: (quantity: number) => void;
};

export function QuantitySelector({ ...props }: QuantitySelectorProps) {
  const { cartProducts, updateProductQuantity } = useCart();
  const [localQuantity, setLocalQuantity] = useState(1);

  const cartProduct = cartProducts.find(
    (product) => product.id === props.productId
  );

  const quantity = cartProduct ? cartProduct.quantity : localQuantity;

  useEffect(() => {
    if (props.onQuantityChange) {
      props.onQuantityChange(quantity);
    }
  }, [quantity, props.onQuantityChange]);

  const handleIncrement = () => {
    cartProduct
      ? updateProductQuantity(props.productId, cartProduct.quantity + 1)
      : setLocalQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (cartProduct) {
      if (cartProduct.quantity > 1) {
        updateProductQuantity(props.productId, cartProduct.quantity - 1);
      }
    } else if (localQuantity > 1) {
      setLocalQuantity((prev) => prev - 1);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleDecrement()}
        sx={{
          borderRadius: "100%",
          minWidth: "unset",
          lineHeight: "unset",
          padding: 0.5,
        }}
      >
        <RemoveIcon sx={{ width: "14px", height: "14px" }} />
      </Button>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.25rem", textAlign: "center", width: "20px" }}
      >
        {quantity}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleIncrement()}
        sx={{
          borderRadius: "50%",
          minWidth: "unset",
          lineHeight: "unset",
          padding: 0.5,
        }}
      >
        <AddIcon sx={{ width: "14px", height: "14px" }} />
      </Button>
    </Box>
  );
}
