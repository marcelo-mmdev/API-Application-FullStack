"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import HeaderHome from "@/components/layouts/headerHome";
import NavbarHome from "@/components/layouts/navbarHome";
import MainHome from "@/components/layouts/mainHome";
import FooterHome from "@/components/layouts/footerHome";

export default function Produtos() {
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
        <GridItem pl="2" bg="AZUL.20" area={"header"}>
          <HeaderHome />
        </GridItem>
        <GridItem area={"nav"}>
          <NavbarHome />
        </GridItem>
        <GridItem area={"main"}>
          {/* Main */}
          <MainHome />
        </GridItem>
        <GridItem area={"footer"}>
          {/* Footer */}
          <FooterHome />
        </GridItem>
      </Grid>
    </>
  );
}
