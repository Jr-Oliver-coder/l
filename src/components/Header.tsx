// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      style={{
        background: "black",
        borderBottom: "1px solid grey",
        marginBottom: "4px",
        // color: "black",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Button color="inherit" component="a">
              <Image
                alt="logo"
                width={100}
                height={90}
                objectFit="contain"
                src={"/assets/logo.png"}
              />
            </Button>
          </Link>
        </Typography>
        <Box>
          <Link href="/produtos" passHref>
            <Button color="inherit" component="a">
              Produtos
            </Button>
          </Link>
          <Link href="/sobre" passHref>
            <Button color="inherit" component="a">
              Sobre
            </Button>
          </Link>
          <Link href="/contato" passHref>
            <Button color="inherit" component="a">
              Contato
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
