import { Icon } from "@/components/common";
import MenuTable from "@/components/reserve/menuTable";
import { useState } from "react";
import { Alert, Modal, Pressable } from "react-native";
import {
  AlertDialog,
  Button,
  Input,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

const ReserveMenuScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View bg="#f3f3f3" flex={1}>
      <XStack gap="$2.5" bg="$gray5" p="$2.5" m="$3">
        <View alignSelf="center">
          <Icon type="search" size={16} />
        </View>
        <Input placeholder="Busca algo" flex={1} unstyled />
      </XStack>
      {/* <MenuTable /> */}

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          bg="#000000a8"
        >
          <View bg="#ededed" p="$5" gap="$3">
            <Text alignSelf="center">Titulo</Text>
            <View borderWidth="$1" bg="#e4e4e4" borderColor="#d5d5d5">
              <XStack justifyContent="space-around">
                <Text>horario</Text>
                <Text>horario</Text>
              </XStack>
              <XStack justifyContent="space-around">
                <Text>Ingreso</Text>
                <Text>horario</Text>
              </XStack>
              <XStack justifyContent="space-around">
                <Text>Nota</Text>
                <Text>horario</Text>
              </XStack>
            </View>
            <XStack>
              <Button onPress={() => setModalVisible(!modalVisible)}>
                cancelar
              </Button>
              <Button>Aceptar</Button>
            </XStack>
            {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <Button onPress={() => setModalVisible(true)}>reservar</Button>
    </View>
  );
};

export default ReserveMenuScreen;
