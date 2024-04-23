import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Button,
  ButtonProps,
  Card,
  Circle,
  Paragraph,
  Text,
  View,
  XStack,
  useWindowDimensions,
} from "tamagui";

export type TCarouselItem = {
  id: string;
  title: string;
  action: {
    label: string;
    onPress: ButtonProps["onPress"];
  };
};

type CarouselProps = {
  data: TCarouselItem[];
};

const SPANCING = 16;

const Carousel = ({ data }: CarouselProps) => {
  const { width } = useWindowDimensions();
  const [currentMenuItemId, setCurrentMenuItemId] = useState<string>();
  const carWidth = width - 2 * SPANCING;

  return (
    <View mt="$3" bg="green" w="100%">
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{ backgroundColor: "yellow", gap: 16 }}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={({ viewableItems }) => {
          setCurrentMenuItemId(viewableItems[0].key);
        }}
        renderItem={({ item, index }) => (
          <Card
            key={item.id}
            w={carWidth - 60}
            mr={index === data.length - 1 ? 60 : 0}
            br={0}
            h={200}
          >
            <Card.Header>
              <Text>{item.title}</Text>
              <Paragraph>Disfruta de un rico {item.title}</Paragraph>
            </Card.Header>
            <Card.Footer>
              <Button onPress={item.action.onPress}>{item.action.label}</Button>
            </Card.Footer>
          </Card>
        )}
      ></FlatList>
      <XStack justifyContent="center" gap="$1.5" mt="$2">
        {data.map((item) => {
          return (
            <Circle
              key={item.id}
              size={15}
              bg={item.id === currentMenuItemId ? "black" : "white"}
              borderColor="black"
              borderWidth="$1.5"
            ></Circle>
          );
        })}
      </XStack>
    </View>
  );
};

export default Carousel;
