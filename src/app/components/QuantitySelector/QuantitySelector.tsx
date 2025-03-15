import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useCart } from "@/app/hooks/useCart";

type QuantitySelectorProps = {
  productId: number;
  quantity: number;
};

export function QuantitySelector({ ...props }: QuantitySelectorProps) {
  const { updateProductQuantity } = useCart();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Button
        variant="outlined"
        size="small"
        onClick={() =>
          updateProductQuantity(props.productId, props.quantity - 1)
        }
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
        {props.quantity}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={() =>
          updateProductQuantity(props.productId, props.quantity + 1)
        }
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
