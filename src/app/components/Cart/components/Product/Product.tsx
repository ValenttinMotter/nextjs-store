import { QuantitySelector } from "@/app/components/QuantitySelector/QuantitySelector";
import { Box, Button, Typography } from "@mui/material";

type ProductProps = {
  title: string;
  price: number;
  onRemove: VoidFunction;
};

export function Product({ ...props }: ProductProps) {
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
        <Typography>US$ {props.price.toFixed(2)}</Typography>
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
        <QuantitySelector />
      </Box>
    </Box>
  );
}
