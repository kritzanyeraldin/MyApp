import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Button,
  ButtonProps,
  Card,
  Circle,
  H1,
  H2,
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
    <View bg="white" w="100%">
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{
          backgroundColor: "#d0d0d0",
          gap: 16,
          paddingRight: carWidth / 2,
        }}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={({ viewableItems }) => {
          setCurrentMenuItemId(viewableItems[0].key);
        }}
        renderItem={({ item, index }) => (
          <Card key={item.id} w={carWidth - 60} br={0} h={200}>
            <Card.Header h="50%">
              <H2>{item.title}</H2>
              <Paragraph>Disfruta de un rico {item.title}</Paragraph>
            </Card.Header>
            <Card.Footer
              justifyContent="center"
              w="100%"
              h="50%"
              alignContent="center"
            >
              <Button
                color="#5E5C5C"
                br="$0"
                borderColor="#d0d0d0"
                variant="outlined"
                mt="$5"
                width="90%"
                onPress={item.action.onPress}
              >
                {item.action.label}
              </Button>
            </Card.Footer>
          </Card>
        )}
      ></FlatList>
      <XStack justifyContent="center" mt="$4">
        {data.map((item) => {
          return (
            <Circle
              key={item.id}
              transform={[
                {
                  scale: item.id === currentMenuItemId ? 1.2 : 1,
                },
              ]}
              size={10}
              bg={item.id === currentMenuItemId ? "black" : "#ffffffd2"}
              borderColor="black"
              borderWidth="$1"
              mr="$1.5"
            ></Circle>
          );
        })}
      </XStack>
    </View>
  );
};

export default Carousel;
