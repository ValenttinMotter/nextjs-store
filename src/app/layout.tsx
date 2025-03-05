import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { StyledRoot } from "./styledRoot";
import { CartProvider } from "./components/Cart/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>NullBug Store</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <CartProvider>
            <StyledRoot>{children}</StyledRoot>
          </CartProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
