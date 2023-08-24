import FormAddProducts from "@/components/layouts/forms/formAddProducts";
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

const ModuleAddProducts = ({ openModal, closeModal }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={openModal} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent bg={"BRPR.10"}>
          {/* <ModalHeader>Adicionar Produto</ModalHeader> */}
          <ModalHeader color={"VERD.40"}>
            <Text display="center" alignItems="center" justifyContent="center">
              ADD PRODUTO
            </Text>
          </ModalHeader>
          <ModalCloseButton
          // w="40px"
          // h="30px"
          // bg={"VERM.30"}
          // borderRadius="10px"
          />
          <ModalBody>
            <FormAddProducts />
          </ModalBody>

          <ModalFooter gap="4">
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

export default ModuleAddProducts;
