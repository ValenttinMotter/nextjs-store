import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import { Box, Chip, Typography } from "@mui/material";
import { useCart } from "@/app/hooks/useCart";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type DetailsDialogProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  onAddToCart: VoidFunction;
  onRemoveOfCart: VoidFunction;
  showRemoveButton: boolean;
};

export default function ProductDetailsDialog({ ...props }: DetailsDialogProps) {
  const [open, setOpen] = React.useState(false);

  const { updateProductQuantity } = useCart();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        detalhes
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Detalhes do Produto
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            component="img"
            src={props.image}
            sx={{ height: 140, objectFit: "contain" }}
          />
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Chip label={props.category} />
            <Typography variant="h6" color="text.primary">
              US$ {props.price.toFixed(2)}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <QuantitySelector
            quantity={props.quantity}
            onChange={() => updateProductQuantity(props.id, props.quantity)}
          />
          <Box>
            {props.showRemoveButton && (
              <Button size="small" autoFocus onClick={props.onRemoveOfCart}>
                remover do carrinho
              </Button>
            )}
            <Button size="small" autoFocus onClick={props.onAddToCart}>
              adicionar ao carrinho
            </Button>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
