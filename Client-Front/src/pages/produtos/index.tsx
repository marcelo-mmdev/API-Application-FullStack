"use client";

import { Grid, GridItem, Text } from "@chakra-ui/react";
import HeaderHome from "@/components/layouts/headerHome";
import MenuHome from "@/components/layouts/menuHome";
import MainHome from "@/components/layouts/mainHome";
import FooterHome from "@/components/layouts/footerHome";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [dados, setDados] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/marcelo-mmdev")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/marcelo-mmdev")
      .then((response) => {
        setDados(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Grid
        templateAreas={`"header header""nav main""nav footer"`}
        gridTemplateRows={"80px 1fr 50px"}
        gridTemplateColumns={"240px 1fr"}
        h="100vh"
        // gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        {loading ? (
          <Text>Carregando informações ...</Text>
        ) : (
          <>
            <GridItem pl="2" bg="AZUL.20" area={"header"}>
              <HeaderHome />
            </GridItem>
            <GridItem area={"nav"}>
              {/* Menu */}
              <MenuHome />
            </GridItem>
            <GridItem area={"main"}>
              {/* Main */}
              <MainHome />
            </GridItem>
            <GridItem area={"footer"}>
              {/* Footer */}
              <FooterHome />
            </GridItem>
          </>
        )}
      </Grid>
    </>
  );
}
