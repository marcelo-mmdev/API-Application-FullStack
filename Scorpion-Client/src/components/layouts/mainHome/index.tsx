/* eslint-disable react/jsx-key */
import {
  Box,
  Button,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { MdDelete, MdEdit, MdAddShoppingCart } from "react-icons/md";
import ModuleAddProducts from "@/components/templates/modules/moduleAddProducts";
import {
  IProducts,
  ProductsService,
} from "@/core/services/api/products/ProductsService";
import { ApiException } from "@/core/services/api/ApiException";
import ModuleEditProducts from "@/components/templates/modules/moduleEditProducts";
import ModuleDeleteProducts from "@/components/templates/modules/moduleDeleteProducts";

const MainHome = () => {
  // Click da cor da tabela
  const [getRowColor] = useState("CINZ.20");
  const [getRowId, setRowId] = useState("0");
  // Chamadas da API
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    ProductsService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setProducts(result);
      }
    });
  }, []);

  // Funções dos Modais
  const {
    isOpen: isOpenAddProducts,
    onOpen: onOpenAddProducts,
    onClose: onCloseAddProducts,
  } = useDisclosure();
  const {
    isOpen: isOpenEditProducts,
    onOpen: onOpenEditProducts,
    onClose: onCloseEditProducts,
  } = useDisclosure();
  const {
    isOpen: isOpenDeleteProducts,
    onOpen: onOpenDeleteProducts,
    onClose: onCloseDeleteProducts,
  } = useDisclosure();

  return (
    <>
      <Box m="5px">
        <TableContainer>
          <Table>
            <Thead>
              <Tr bg="CINZ.60">
                <Th
                  onClick={() => {}}
                  borderTopRadius={"8px"}
                  w="100%"
                  h="60px"
                  color="#ffffff"
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Text as={"p"} color={"BRPR.20"} fontSize={"20px"}>
                        Produtos
                      </Text>
                    </Box>
                    <Box>
                      <Button
                        w="100%"
                        h="25px"
                        bg={"none"}
                        color={"VERD.30"}
                        borderRadius="10px"
                        onClick={() => {
                          onOpenAddProducts();
                        }}
                        _hover={{
                          bg: "Vnone",
                        }}
                      >
                        <Icon
                          as={MdAddShoppingCart}
                          w="25px"
                          h="25px"
                          color={"VERD.30"}
                          display="center"
                          alignItems="center"
                          justifyContent="center"
                        />
                        Adicionar
                      </Button>
                    </Box>
                  </Box>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
        <TableContainer
          h="100%"
          // borderRadius={"8px"}
          mt="5px"
          overflowY="auto"
          color="#000"
        >
          <Table>
            <Tbody>
              {products.map((data: any) => {
                return (
                  <Tr
                    key={data.id}
                    onDoubleClick={() => {
                      getRowId === "1" ? setRowId("0") : setRowId(data.id);
                      onOpenEditProducts();
                    }}
                    backgroundColor={
                      getRowId === data.id ? getRowColor : "#ffffff"
                    }
                    onClick={() => {
                      getRowId === "1" ? setRowId("0") : setRowId(data.id);

                      getRowId === data.id ? getRowColor : "#ffffff";
                    }}
                  >
                    <Td w="100%" h="2vh">
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Box
                          w="90%"
                          display={"flex"}
                          alignItems={"center"}
                          // justifyContent={"space-between"}
                        >
                          <Box
                            w="60%"
                            display={"flex"}
                            alignItems={"center"}
                            // justifyContent={"space-between"}
                          >
                            <Text color={"BRPR.20"} fontSize={"18px"}>
                              {data.name}
                            </Text>
                          </Box>
                          <Box w="20%" gap="3" display={"flex"}>
                            <Text color={"CINZ.60"} fontSize={"12px"}>
                              Quantidade:
                            </Text>
                            <Text color={"BRPR.20"} fontSize={"16px"}>
                              {data.amount}
                            </Text>
                          </Box>
                          <Box
                            w="20%"
                            display={"flex"}
                            // justifyContent={"space-between"}
                          >
                            <Box w="100%" gap="3" display={"flex"}>
                              <Text color={"CINZ.60"} fontSize={"12px"}>
                                Preço:
                              </Text>
                              <Text color={"BRPR.20"} fontSize={"16px"}>
                                {data.price}
                              </Text>
                            </Box>
                            {/* <Box w="50%" gap="3" display={"flex"}>
                              <Text color={"CINZ.60"} fontSize={"12px"}>
                                Ultimo Preço:
                              </Text>
                              <Text color={"BRPR.20"} fontSize={"16px"}>
                                {data.current}
                              </Text>
                            </Box> */}
                          </Box>
                        </Box>
                        <Box
                          w="10%"
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
                          <Box />
                          <Box display={"flex"} gap="1">
                            <Box>
                              <Button
                                w="100%"
                                h="100%"
                                bg={"none"}
                                borderRadius="10px"
                                onClick={() => {
                                  onOpenEditProducts();
                                }}
                                _hover={{
                                  // bg: "AMAR.40",
                                  color: "VERD.10",
                                }}
                              >
                                <Icon
                                  as={MdEdit}
                                  w="30px"
                                  h="25px"
                                  color={"AMAR.30"}
                                  display="center"
                                  alignItems="center"
                                  justifyContent="center"
                                />
                              </Button>
                            </Box>
                            <Box>
                              <Button
                                w="100%"
                                h="100%"
                                bg={"none"}
                                color={"VERM.20"}
                                borderRadius="10px"
                                onClick={() => {
                                  onOpenDeleteProducts();
                                }}
                                _hover={
                                  {
                                    // bg: "VERM.10",
                                  }
                                }
                              >
                                <Icon
                                  as={MdDelete}
                                  w="30px"
                                  h="25px"
                                  color={"VERM.30"}
                                  display="center"
                                  alignItems="center"
                                  justifyContent="center"
                                />
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <ModuleAddProducts
        openModal={isOpenAddProducts}
        closeModal={onCloseAddProducts}
      />
      <ModuleEditProducts
        openModal={isOpenEditProducts}
        closeModal={onCloseEditProducts}
      />
      <ModuleDeleteProducts
        openModal={isOpenDeleteProducts}
        closeModal={onCloseDeleteProducts}
      />
    </>
  );
};

export default MainHome;
