"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Divider, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "@/app/hooks/useCart";
import { ProductCart } from "./components/ProductCart/ProductCart";

export default function Cart() {
  const { cartProducts, removeProductFromCart, clearCart } = useCart();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 350,
        maxHeight: "70vh",
        overflowY: "auto",
        flex: 1,
      }}
      role="presentation"
    >
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: 1,
          paddingBottom: 1,
          fontWeight: "500",
        }}
      >
        Carrinho de Compras
      </Typography>
      <Divider />
      {cartProducts.length !== 0 ? (
        <React.Fragment>
          {cartProducts.map((product) => (
            <Box
              key={product.id}
              sx={{ flexDirection: "column", width: "100%" }}
            >
              <ProductCart
                id={product.id}
                price={product.price}
                title={product.title}
                quantity={product.quantity}
                onRemove={() => removeProductFromCart(product.id)}
              />
              <Divider />
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 1,
            }}
          >
            <Button size="small" autoFocus onClick={clearCart}>
              Limpar carrinho
            </Button>
            <Typography>
              Valor total: R${" "}
              {cartProducts
                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                .toFixed(2)}
            </Typography>
          </Box>
          <Divider />
        </React.Fragment>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Typography>Carrinho vazio.</Typography>
          <AddShoppingCartIcon sx={{ width: 30, height: 30 }} />
        </Box>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Badge badgeContent={cartProducts.length} color="error">
          <ShoppingCartIcon sx={{ color: "white" }} />
        </Badge>
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor={"right"}
        ModalProps={{ keepMounted: true }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
