// components/ProductGrid.tsx
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
} from "@mui/material";
import { StrikethroughS } from "@mui/icons-material";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const jonasproducts: Product[] = [
  {
    id: 2,
    name: "iPhone 15 Apple (128GB) Preto, Tela de 6,1', 5G e Câmera de 48 MP",
    price: 5000,
    image: "/assets/iphone15.jpeg",
  },
  {
    id: 1,
    name: "Phone 14 Apple (128GB) Estelar, Tela de 6,1', 5G e Câmera de 12MP",
    price: 3200,
    image: "/assets/iphone14.jpeg",
  },

  {
    id: 3,
    name: "iPhone 13 Apple (128GB) Azul, Tela de 6,1', 5G e Câmera Dupla de 12 MP",
    price: 2900,
    image: "/assets/iphone13.jpeg",
  },
];

export const bahiaproducts: Product[] = [
  {
    id: 756,
    name: "Mi 11 Midnight Gray Xiaomi, com Tela de 6,81', 5G, 256GB e Câmera Tripla de 108MP + 13MP + 5MP - CX318CIN",
    price: 8999,
    image: "/assets/xiaomi.jpeg",
  },
  {
    id: 646,
    name: "iPhone 15 Apple (256GB) Preto, Tela de 6,1', 5G e Câmera de 48 MP",
    price: 5699,
    image: "/assets/iphone.jpeg",
  },
  {
    id: 346,
    name: "X.iaomi H.aylou Relógio Smartwatch Rs3 Gps Tela 1.2 pol. Bluetooth 5.0 Modos Esportivos Classificação 5 Atm Resistência à Água Bateria até 12 dias Compatível com Android e Ios/No Brasil",
    price: 245.9,
    image: "/assets/rs3.jpg",
  },
  { id: 356, name: "KZ B", price: 149.99, image: "/assets/kz3.webp" },
  {
    id: 3563,
    name: "Air Pods 2th gen.",
    price: 1249.99,
    image: "/assets/airpods.jpg",
  },
  { id: 132, name: "KZ SN", price: 129.99, image: "/assets/kz1.webp" },
  {
    id: 35236,
    name: "Cabo carregador lightning iPhone",
    price: 149.99,
    image: "/assets/icharger.jpg",
  },
  { id: 211, name: "KZ A", price: 89.99, image: "/assets/kz2.webp" },
  {
    id: 3566,
    name: 'Samsung Smartwatch Galaxy Watch6 BT 44mm Tela Super AMOLED de 1.47" Grafite',
    price: 1458.54,
    image: "/assets/galaxyw.jpg",
  },
];

const ProductGrid: React.FC = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <Grid container spacing={4} style={{ maxWidth: "1800px" }}>
        {bahiaproducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Link href={"/" + product.id}>
              <Card style={{ minHeight: "500px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="280"
                    style={{
                      objectFit: "contain",
                    }}
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ fontSize: "20px", color: "green" }}
                    >
                      <s style={{ color: "red", fontSize: "14px" }}>
                        R${(product.price * 2).toFixed(2)}
                      </s>{" "}
                      R$
                      {product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
