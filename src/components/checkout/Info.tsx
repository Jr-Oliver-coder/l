// "use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemText } from "@mui/material";
import { bahiaproducts } from "../home/Home";

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      {/* <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText sx={{ mr: 2 }} primary={product.name} />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List> */}
    </React.Fragment>
  );
}
