import { QuantitySelector } from "@/app/components/QuantitySelector/QuantitySelector";
import { Box, Button, Typography } from "@mui/material";
import { useProducts } from "@/app/hooks/useProducts";
import { useCart } from "@/app/hooks/useCart";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  onRemove: VoidFunction;
};

export function ProductCart({ ...props }: ProductProps) {
  const products = useProducts();
  const { updateProductQuantity } = useCart();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1,
          width: "100%",
        }}
      >
        <Typography>{props.title}</Typography>
        <Typography>US$ {(props.price * props.quantity).toFixed(2)}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1,
          width: "100%",
        }}
      >
        <Button size="small" autoFocus onClick={props.onRemove}>
          remover
        </Button>
        <QuantitySelector productId={props.id} />
      </Box>
    </Box>
  );
}
