import { Calendar } from "@tamagui/lucide-icons";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Card, Text, View, XStack, YStack } from "tamagui";

export type TmenuItem = {
  id: string;
  schedule: string;
  date: string;
  area: string;
  progress: number;
};

type CompProps = {
  data: TmenuItem[];
};

const Comp = ({ data }: CompProps) => {
  return (
    <View bg="#e09898" height="100%">
      {data.map((item) => (
        <Card
          key={item.id}
          width="100%"
          maxWidth="90%"
          height="$13"
          alignSelf="center"
          mt="$3"
        >
          <XStack justifyContent="center" flexGrow={1} bg="#dbdbdb">
            <YStack justifyContent="space-around" flexGrow={1} marginLeft="$4">
              <XStack gap="$1.5">
                <Calendar size="$1" />
                <Text fontSize="$3">{item.date}</Text>
              </XStack>
              <Text fontSize="$7" style={{ fontWeight: "bold" }}>
                {item.schedule}
              </Text>
              <XStack gap="$2">
                <Text
                  bg="#d2d2d2"
                  textAlign="center"
                  width="$6"
                  height="$2.5"
                  br="$8"
                  // borderWidth="$0.5"
                  style={{ textAlignVertical: "center" }}
                >
                  {item.id}
                </Text>
                <Text
                  // borderColor="black"
                  // borderWidth="$1"
                  bg="#d2d2d2"
                  textAlign="center"
                  width="$6"
                  height="$2.5"
                  br="$8"
                  // borderWidth="$0.5"
                  style={{ textAlignVertical: "center" }}
                >
                  {item.area}
                </Text>
              </XStack>
            </YStack>
            <YStack flexGrow={1} alignItems="center">
              <AnimatedCircularProgress
                style={{
                  marginTop: 9,
                }}
                size={110}
                width={15}
                fill={item.progress}
                backgroundColor="#888787"
                tintColor="#1b1818aa"
              ></AnimatedCircularProgress>
            </YStack>
          </XStack>
        </Card>
      ))}
    </View>
  );
};

export default Comp;
