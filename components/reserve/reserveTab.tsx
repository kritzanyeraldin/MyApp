import { View } from "tamagui";
import Carousel from "./carousel";

const menuData = [
  {
    id: "Desayuno",
    title: "Desayuno",
  },
  {
    id: "Almuerzo",
    title: "Almuerzo",
  },
  {
    id: "Cena",
    title: "Cena",
  },
];

export default function ReserveTab() {
  return (
    <View bg="red">
      <Carousel
        data={menuData.map((item) => ({
          ...item,
          action: {
            label: "Reservar",
            onPress: () => {
              console.log(item);
            },
          },
        }))}
      ></Carousel>
    </View>
  );
}
