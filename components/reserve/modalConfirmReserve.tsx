import { Modal } from "react-native";
import { Button, Image, Text, View } from "tamagui";
import image from "@/assets/images";

type Props = {
  open: boolean;
  close: () => void;
};

const ModalConfirmReserve = ({ open, close }: Props) => {
  return (
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
          <Image
            source={{
              uri: image,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmReserve;
