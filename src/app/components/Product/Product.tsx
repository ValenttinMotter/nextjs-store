import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ProductDetailsDialog from "../PoductDetailsDialog/PoductDetailsDialog";

type ProductProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  onAddToCart: VoidFunction;
  onRemoveOfCart: VoidFunction;
  isOnCart: boolean;
};

export function Product({ ...props }: ProductProps) {
  return (
    <Card
      sx={{
        width: 345,
        height: 400,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: "contain", paddingTop: 2 }}
        image={props.image}
      />
      <CardContent
        sx={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: 1,
          paddingLeft: 2,
          paddingRight: 2,
          paddingBottom: 0,
          paddingTop: 0,
          flexGrow: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 3,
          }}
        >
          {props.description}
        </Typography>
        <Box sx={{ mt: "auto" }}>
          <Typography variant="h6" color="text.primary">
            R$ {props.price.toFixed(2)}
          </Typography>
        </Box>
        <CardActions
          sx={{
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <ProductDetailsDialog
            id={props.id}
            image={props.image}
            title={props.title}
            description={props.description}
            price={props.price}
            category={props.category}
            onAddToCart={props.onAddToCart}
            showRemoveButton={props.isOnCart}
            onRemoveOfCart={props.onRemoveOfCart}
          />
          <Button size="small" variant="outlined" onClick={props.onAddToCart}>
            Adicionar ao carrinho
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
