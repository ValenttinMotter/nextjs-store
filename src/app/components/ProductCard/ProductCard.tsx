import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

type ProductProps = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export function ProductCard({ ...props }: ProductProps) {
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
            US$ {props.price.toFixed(2)}
          </Typography>
        </Box>
        <CardActions
          sx={{
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <Button size="small" variant="outlined">
            Detalhes
          </Button>
          <Button size="small" variant="outlined">
            Adicionar ao carrinho
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
