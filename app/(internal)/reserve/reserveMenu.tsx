import { Icon } from "@/components/common";
import MenuTable from "@/components/reserve/menuTable";
import { useState } from "react";
import { Input, View, XStack } from "tamagui";

const ReserveMenuScreen = () => {
  return (
    <View bg="#f3f3f3" flex={1}>
      <XStack gap="$2.5" bg="$gray5" p="$2.5" m="$3">
        <View alignSelf="center">
          <Icon type="search" size={16} />
        </View>
        <Input placeholder="Busca algo" flex={1} unstyled />
      </XStack>
      <MenuTable />
      {/* 
     
      <Button onPress={() => setModalVisible(true)}>reservar</Button> */}
    </View>
  );
};

export default ReserveMenuScreen;
