import { Icon } from "@/components/common";
import { useRouter } from "expo-router";
import { Button, H2, Image, Text, View } from "tamagui";

const myReservations = () => {
  const router = useRouter();
  return (
    <View bg="#e7e7e7" alignItems="center" flex={1}>
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        }}
      />
      <H2>Haz una reservacion</H2>
      <Text mt="$2">Afortunadamente, es facil realizar una</Text>
      <Button
        mt="$4"
        br="$0"
        bg="red"
        onPress={() => router.push("/myReservations/myReservati")}
        icon=<Icon type="plus" weight="regular" />
      >
        Nueva reservacion
      </Button>
    </View>
  );
};

export default myReservations;
