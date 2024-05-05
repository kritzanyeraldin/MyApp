import menuReserveSchedules from "@/constants/menuTable";
import React, { useState } from "react";
import { Button, ScrollView, Text, View, XStack, YStack } from "tamagui";
import ModalReserve from "./modalReserve";

const MenuTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <>
      <ScrollView>
        <YStack margin="$3" bg="white">
          <XStack height={50} bg="#f3f3f3" width="100%" m="$1">
            <View
              flex={2}
              // bg="yellow"
              justifyContent="center"
              alignItems="center"
            >
              <Text>Horarios</Text>
            </View>
            <View
              flex={1}
              // bg="#a3a3a3"
              justifyContent="center"
              alignItems="center"
            >
              <Text>Area</Text>
            </View>
            <View
              flex={2}
              // bg="#efefd6"
              justifyContent="center"
              alignItems="center"
            >
              <Text>Reservar</Text>
            </View>
          </XStack>
          <View bg="#f3f3f3" gap="$1" flex={1}>
            {menuReserveSchedules.map((item) => (
              <XStack
                height={60}
                bg="white"
                // alignItems="center"
                width="100%"
                key={item.id}
              >
                <View
                  flex={2}
                  // bg="yellow"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text>{item.title}</Text>
                </View>
                <View
                  flex={1}
                  // bg="#585846"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text>{item.area}</Text>
                </View>
                <View
                  flex={2}
                  // bg="#efefd6"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button onPress={openModal} bg="#dadada" size="$3.5" br="$0">
                    Reservar
                  </Button>
                </View>
              </XStack>
            ))}
          </View>
        </YStack>
      </ScrollView>
      <ModalReserve open={modalVisible} close={closeModal} />
    </>
  );
};

export default MenuTable;
