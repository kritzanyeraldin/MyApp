import { Activity, Calendar } from "@tamagui/lucide-icons";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import {
  Card,
  Progress,
  SizableText,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

const Comp = () => {
  return (
    <View>
      <Card>
        <XStack>
          <YStack bg="red">
            <XStack>
              <Calendar></Calendar>
              <Text>15 de Sep</Text>
            </XStack>
            <Text>2:00pm a 2:30pm</Text>
            <Text>Area 1</Text>
          </YStack>
          <YStack>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={40}
              backgroundColor="#888787"
              tintColor="#1b1818aa"
            ></AnimatedCircularProgress>
          </YStack>
        </XStack>
      </Card>
    </View>
  );
};

export default Comp;
