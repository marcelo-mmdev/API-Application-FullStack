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
import { MdDelete } from "react-icons/md";

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

const ModuleDeleteProducts = ({ openModal, closeModal }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={openModal} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent bg={"BRPR.10"}>
          <ModalHeader color={"VERM.30"}>
            <Text display="center" alignItems="center" justifyContent="center">
              DELETE PRODUTO
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"center"} alignItems="center" justifyContent="center">
              {/* <Text color={"CINZ.60"}>Quant. em Casa:&nbsp;</Text> */}
              <Text color={"CINZ.60"} fontSize={"30px"}>
                Deseja excluir o PRODUTO?
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"} gap="4">
            <Text color={"CINZ.60"} fontSize={"12px"}>
              Uma exclusão não pode ser desfeita.
            </Text>
            <Button
              w="120px"
              h="40px"
              bg={"VERM.30"}
              color={"BRPR.10"}
              borderRadius="10px"
              onClick={onClose}
            >
              <Icon
                as={MdDelete}
                w="20px"
                h="20px"
                display="center"
                alignItems="center"
                justifyContent="center"
              />
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModuleDeleteProducts;
