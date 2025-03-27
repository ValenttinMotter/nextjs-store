import { Box, Container } from "@mui/material";
import { Header } from "./components/Header/Header";
import { getProducts } from "@/lib/getProducts";
import { ProductList } from "./components/ProductList/ProductList";

type ProductProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
};

export default async function Home() {
  const products: ProductProps[] = await getProducts();

  return (
    <Box>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <ProductList products={products} />
      </Container>
    </Box>
  );
}
