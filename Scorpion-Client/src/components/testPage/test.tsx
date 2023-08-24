import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Spinner,
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
import { RiPencilFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye, MdDeleteForever } from "react-icons/md";
// import ModalErroNE from "../../../components/Modal/modulePlanilha/ModalErroNE";
// import { ModuleDeletePerfil } from "../../../components/Modal/moduleAdmin/Perfil/ModuleDeletePerfil";
// import { ModuleVisualPerfil } from "../../../components/Modal/moduleAdmin/Perfil/ModuleVisualPerfil";
// import { ModuleSavePerfil } from "../../../components/Modal/moduleAdmin/Perfil/ModuleSavePerfil";
// import { ModuleEdicaoPerfil } from "../../../components/Modal/moduleAdmin/Perfil/ModuleEdicaoPerfil";
// import ServicesApi from "../../../core/Services/ServicesApi";
// import Pagination from "../../../components/Pagination";

export function Perfil() {
  const [getDisabledValue, setDisabledValue] = useState(true);
  const [getRowColor] = useState("rgba(49, 146, 132, 0.3)");
  const [getRowId, setRowId] = useState("0");
  const [offset, setOffset] = useState(0);
  const [linesPerPage, setLinesPerPage] = useState([]);
  const [sicronizacao, setSicronizacao] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpenModalModalErroNE, setIsOpenModalModalErroNE] = useState(false);
  const [apis, setApi] = useState<any>([]);
  const [atualizaDados, setAtualizaDados] = useState();
  const onCloseModalModalErroNE = () => {
    setIsOpenModalModalErroNE(false);
  };
  const {
    isOpen: isOpenDetailModal,
    onOpen: onOpenDetailModal,
    onClose: onCloseDetailModal,
  } = useDisclosure();
  const {
    isOpen: isOpenVisualModule,
    onOpen: onOpenVisualModule,
    onClose: onCloseVisualModule,
  } = useDisclosure();
  const {
    isOpen: isOpenEditarModule,
    onOpen: onOpenEditarModule,
    onClose: onCloseEditarModule,
  } = useDisclosure();
  // useEffect(() => {
  //   ServicesApi.get(
  //     // `api/perfil?page=0&linesPerPage=20&orderBy=id&direction=ASC`,
  //     `api/perfil?page=${offset}&linesPerPage=${linesPerPage}&orderBy=id&direction=ASC`,
  //   )
  //     .then((response) => setApi(response.data))
  //     .catch((err) => {
  //       console.error(`Ops! Ocorreu um erro${err}`);
  //     })
  //     .finally(() => setLoading(false));
  // }, [offset, linesPerPage, atualizaDados]);

  return (
    <Container maxW="100%" height="100%" marginBottom="10px" p="8px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
        mt="1%"
        backgroundColor="#ffffff"
        height="100%"
      >
        <Box w="100%">
          <Flex
            ml="1.5%"
            mr="1.5%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex />
            <Flex mt="15px">
              {/* <ModuleSavePerfil setAtualizaDados={setAtualizaDados} /> */}
            </Flex>
          </Flex>

          <Box m="20px">
            <TableContainer>
              <Table>
                <Thead>
                  <Tr backgroundColor="#317A7D">
                    <Th onClick={() => {}} w="100%" color="#ffffff">
                      <Text>Perfil</Text>
                    </Th>
                  </Tr>
                </Thead>
              </Table>
            </TableContainer>
            <TableContainer
              height="45vh"
              overflowY="scroll"
              border="solid 1px #000"
              color="#000"
            >
              {loading && (
                <Spinner thickness="4px" color="teal.500" m={5} size="xl" />
              )}
              {!loading && (
                <Table>
                  {apis?.content?.length ? (
                    <Tbody>
                      {apis?.content?.map((item: any) => {
                        return (
                          <Tr
                            key={item.id}
                            onDoubleClick={() => {
                              getRowId === "1"
                                ? setRowId("0")
                                : setRowId(item.id);
                              setSicronizacao(item);
                              onOpenVisualModule();
                            }}
                            backgroundColor={
                              getRowId === item.id ? getRowColor : "#ffffff"
                            }
                            onClick={() => {
                              getRowId === "1"
                                ? setRowId("0")
                                : setRowId(item.id);
                              setSicronizacao(item);
                              getRowId === item.id ? getRowColor : "#ffffff";
                            }}
                          >
                            <Td
                              w="100%"
                              onClick={() => {
                                setDisabledValue(false);
                              }}
                            >
                              {item.nome}
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  ) : (
                    <Text m={5} display="flex" alignItems="center">
                      Nenhum perfil encontrado.
                    </Text>
                  )}
                </Table>
              )}
            </TableContainer>
            {/* <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              mt="40px"
            >
              {apis?.totalElements && (
                <Pagination
                  totalPages={apis?.totalPages}
                  paginaAtual={apis?.pageable?.pageNumber}
                  setOffset={setOffset}
                  setLinesPerPage={setLinesPerPage}
                />
              )}
            </Box> */}
          </Box>
        </Box>
        <Box w="60px" color="#fff" mt="-100px" display="block">
          <Box mb="20px">
            <Button
              w="38px"
              h="32px"
              bg="#317A7D"
              borderRadius="10px"
              isDisabled={getDisabledValue}
              onClick={() => {
                onOpenVisualModule();
              }}
            >
              <Icon
                as={MdOutlineRemoveRedEye}
                w="25px"
                h="20px"
                display="center"
                alignItems="center"
                justifyContent="center"
              />
            </Button>
          </Box>

          <Box mb="20px">
            <Button
              w="38px"
              h="32px"
              bg="#317A7D"
              borderRadius="10px"
              onClick={() => {
                onOpenEditarModule();
              }}
              isDisabled={getDisabledValue}
            >
              <Icon
                as={RiPencilFill}
                w="17px"
                h="17px"
                display="center"
                alignItems="center"
                justifyContent="center"
              />
            </Button>
          </Box>

          <Box>
            <Button
              w="38px"
              h="32px"
              bg="#FBAB18"
              borderRadius="10px"
              isDisabled={getDisabledValue}
              onClick={() => {
                onOpenDetailModal();
              }}
            >
              <Icon
                as={MdDeleteForever}
                w="18px"
                h="18px"
                display="center"
                alignItems="center"
                justifyContent="center"
              />
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <ModalErroNE
        isOpen={isOpenModalModalErroNE}
        onClose={onCloseModalModalErroNE}
        title="Processo Inválido!"
        mensagem="Declaração de Retenção não encontrada, digite novamente!"
      />
      <ModuleEdicaoPerfil
        openModal={isOpenEditarModule}
        closeModal={onCloseEditarModule}
        sicronizacao={sicronizacao}
        setAtualizaDados={setAtualizaDados}
      /> */}
      <ModuleVisualPerfil
        openModal={isOpenVisualModule}
        closeModal={onCloseVisualModule}
        sicronizacao={sicronizacao}
      />
      {/* <ModuleDeletePerfil
        openModal={isOpenDetailModal}
        closeModal={onCloseDetailModal}
        sicronizacao={sicronizacao}
        setAtualizaDados={setAtualizaDados}
      /> */}
    </Container>
  );
}
///////// MODAL

import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
// import { useEffect, useState } from "react";

interface Props {
  openModal: boolean;
  closeModal: () => void;
  sicronizacao: any;
}

export function ModuleVisualPerfil({
  openModal,
  closeModal,
  sicronizacao: sincronizacao,
}: Props) {
  const [getDisabledValue, setDisabledValue] = useState(true);

  const checkboxes = [
    { label: "Usuário", value: "USUARIO" },
    { label: "Perfis", value: "PERFIS" },
    { label: "Publicidade", value: "PUBLICIDADE" },
    { label: "Declaração de Retenção", value: "DECLARACAO_RETENCAO" },
    { label: "EFD Reinf", value: "EFDREINF" },
    { label: "Gerenciar", value: "GERENCIAR" },
    { label: "Sincronização Manual", value: "SINCRONIZACAO_MANUAL" },
    { label: "Gerenciar Registro", value: "GERENCIAR_REGISTRO" },
    { label: "Gerenciar Importação", value: "GERENCIAMENTO_IMPORTACAO" },
  ];

  return (
    <Modal isOpen={openModal} onClose={closeModal} isCentered size="xl">
      <ModalOverlay />
      <ModalContent maxW="600px">
        <ModalHeader>
          <Text as="b" fontSize="30px" color="#325F74">
            Visualizar Perfil
          </Text>
        </ModalHeader>
        <ModalCloseButton bg="#325F74" color="#FFFFFF" w="40px" h="30px" />
        <ModalBody>
          <Box maxW="100%">
            <Box
              gap="20px"
              m="5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box w="100%">
                <Text as="b" fontWeight="bold">
                  Nome do Perfil
                  <Input
                    type="text"
                    borderRadius="10px"
                    h="30px"
                    bg="#FFFFFF"
                    color="#000"
                    border="1px"
                    borderColor="#325F74"
                    value={sincronizacao?.nome}
                    isDisabled={getDisabledValue}
                  />
                </Text>
              </Box>
            </Box>
            <Box
              mt="35px"
              display="block"
              alignItems="center"
              justifyContent="center"
            >
              <TableContainer borderTopRadius="10px">
                <Table>
                  <Thead>
                    <Tr backgroundColor="#317A7D">
                      <Th
                        w="100%"
                        color="#ffffff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="16px">
                          Funcionalidades Vinculadas ao Perfil
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                </Table>
              </TableContainer>
              <TableContainer
                h="150px"
                overflowY="auto"
                borderBottomRadius="10px"
                border="solid 1px #ccc"
                color="#000"
              >
                <Table variant="striped" size="sm">
                  <Tbody>
                    {sincronizacao?.perfis.map((item: any) => (
                      <Tr key={sincronizacao?.id}>
                        <Td w="100%" color="#000">
                          {checkboxes.find((obj) => obj.value === item)?.label}
                          {/* {(item === "PUBLICIDADE" ? "Publicidade" : item) &&
                            (item === "EFDREINF" ? "EFD Reinf" : item)} */}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="space-between" mt="10px">
          <Flex />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
