import React from "react";
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
  return (
    <View mt="$3" bg="green">
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <Card key={item.id} br={0}>
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
              bg="white"
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
