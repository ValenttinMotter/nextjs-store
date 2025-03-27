import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StoreIcon from "@mui/icons-material/Store";
import Cart from "../Cart/Cart";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <StoreIcon sx={{ mr: 4 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NullBug Store
          </Typography>
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
