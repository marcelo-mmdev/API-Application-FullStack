import FormEditProducts from "@/components/layouts/forms/formEditProducts";
import {
  Box,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdCheck } from "react-icons/md";

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

const ModuleEditProducts = ({ openModal, closeModal }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={openModal} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent bg={"BRPR.10"}>
          <ModalHeader color={"VERD.40"}>
            <Text display="center" alignItems="center" justifyContent="center">
              Edit PRODUTO
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormEditProducts />
          </ModalBody>

          <ModalFooter justifyContent={"space-between"} gap="4">
            <Box display={"flex"} alignItems="center" justifyContent="center">
              <Text color={"CINZ.60"}>Quant. em Casa:&nbsp;</Text>
              <Text color={"AZUL.30"} fontSize={"30px"}>
                10
              </Text>
            </Box>
            <Button
              w="120px"
              h="40px"
              bg={"VERD.40"}
              color={"BRPR.10"}
              borderRadius="10px"
              onClick={onClose}
            >
              <Icon
                as={MdCheck}
                w="20px"
                h="20px"
                display="center"
                alignItems="center"
                justifyContent="center"
              />
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModuleEditProducts;
