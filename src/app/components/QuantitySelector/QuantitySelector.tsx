import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Button
        variant="outlined"
        size="small"
        onClick={handleDecrement}
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
        sx={{
          fontSize: "1.25rem",

          textAlign: "center",
          width: "20px",
        }}
      >
        {quantity}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={handleIncrement}
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
