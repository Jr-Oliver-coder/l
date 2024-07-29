"use client";
import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
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
          <ListItem>
            <ListItemAvatar>
              <Avatar>{p.id}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Phone A: ${p.phoneA}`}
              secondary={
                <>
                  <div>Phone B: {p.phoneB}</div>
                  <div>PIN: {p.pin}</div>
                  <div>Date: {p.date}</div>
                  <div>Holder: {p.holder}</div>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </main>
  );
};
export default B;
