import { useState } from "react";
import { Alert, Modal, Pressable } from "react-native";
import { Button, Text, View, XStack } from "tamagui";
import ModalConfirmReserve from "./modalConfirmReserve";

type ModalProps = {
  open: boolean;
  close: () => void;
};

const ModalReserve = ({ open, close }: ModalProps) => {
  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const openModal = () => {
    setModalConfirmVisible(true);
  };
  const closeModal = () => {
    setModalConfirmVisible(false);
  };

  return (
    <>
      <Modal
        transparent
        animationType="fade"
        visible={open}
        onRequestClose={close}
      >
        <View
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          bg="#000000a8"
        >
          <View
            bg="#ededed"
            p="$5"
            gap="$3"
            width="100%"
            height="100%"
            maxWidth="80%"
            maxHeight="30%"
          >
            <Text alignSelf="center">Titulo</Text>
            <View
              borderWidth="$1"
              bg="#e4e4e4"
              borderColor="#d5d5d5"
              mt="$3"
              marginBottom="$2"
              padding="$3"
            >
              <XStack justifyContent="center" gap="$14">
                <Text>Horario</Text>
                <Text>Horario</Text>
              </XStack>
              <XStack justifyContent="center" gap="$14">
                <Text>Ingreso</Text>
                <Text>Horario</Text>
              </XStack>
              <XStack justifyContent="center" gap="$15">
                <Text>Nota</Text>
                <Text>Horario</Text>
              </XStack>
            </View>
            <XStack justifyContent="center" gap="$4">
              <Button
                br="$0"
                bg="#e2e1e1"
                size="$3.5"
                width="$10"
                onPress={close}
              >
                Cancelar
              </Button>
              <Button
                br="$0"
                bg="#59595d"
                color="#e8e8e8"
                size="$3.5"
                width="$10"
                onPress={openModal}
              >
                Aceptar
              </Button>
            </XStack>
            <Pressable onPress={close} />
          </View>
        </View>
      </Modal>
      <ModalConfirmReserve open={modalConfirmVisible} close={closeModal} />
    </>
  );
};

export default ModalReserve;
