import { useContext, useRef } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import { DashboardContext } from "../../contexts/DashboardProvider";
import Button from "../Button";

const Modals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { handleSubmit, register, submitTransaction } =
    useContext(DashboardContext);

  return (
    <>
      <Button callback={onOpen}>Realizar Transerência</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          backdropFilter="auto"
          backdropBlur="2px"
          width={"100vw"}
          height={"100vh"}
        />

        <ModalContent
          gap={"1.25rem"}
          width={400}
          bgColor={"var(--white-1)"}
          position={"relative"}
          p={25}
          margin={"0 auto"}
          top={100}
          borderRadius={10}
        >
          <ModalHeader color={"var(--black)"} fontWeight={"bold"}>
            Transação
          </ModalHeader>
          <ModalCloseButton
            cursor={"pointer"}
            _hover={{ color: "red" }}
            position="absolute"
            right={25}
            top={25}
          />
          <ModalBody>
            <form onSubmit={handleSubmit(submitTransaction)}>
              <FormControl display={"flex"} flexDirection={"column"} gap={15}>
                <FormLabel>Nome do usuário</FormLabel>
                <Input
                  p={10}
                  outline={"none"}
                  bgColor={"var(--white-2)"}
                  _focus={{
                    borderBottom: "2px solid var(--black-1)",
                    bg: "none",
                  }}
                  borderRadius={6}
                  transition={"all 0.3s"}
                  type={"text"}
                  placeholder="Informe o nome do usuário"
                  {...register("username")}
                  required
                />
                <FormLabel marginTop={"15px"}>Valor</FormLabel>
                <Input
                  p={10}
                  outline={"none"}
                  bgColor={"var(--white-2)"}
                  _focus={{
                    borderBottom: "2px solid var(--black-1)",
                    bg: "none",
                  }}
                  borderRadius={6}
                  transition={"all 0.3s"}
                  type={"number"}
                  placeholder="Valor da transação"
                  {...register("value")}
                  required
                />
                <ModalFooter
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button type="submit" dark="dark">
                    Transferir
                  </Button>
                </ModalFooter>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
