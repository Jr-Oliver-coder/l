"use client";
import React from "react";
import { List, ListItem } from "@mui/material";
import { IFormData } from "../../interfaces";
import axios from "axios";
const B: React.FC = () => {
  const [data, setData] = React.useState<IFormData[]>([]);
  React.useEffect(() => {
    async function getData() {
      const { data } = await axios.get("/api/data");
      setData(data);
    }
    getData();
  }, []);
  return (
    <main
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List>
        {data.map((p, i) => (
          <ListItem key={p.id}></ListItem>
        ))}
      </List>
    </main>
  );
};
export default B;
