import { menuCard } from "@/constants";
import { router } from "expo-router";
import { Fragment } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  H3,
  Image,
  Paragraph,
  ScrollView,
  Separator,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

export default function ForYouScreen() {
  return (
    <View gap="$4">
      <XStack>
        <Button bg="yellow">
          <YStack>
            <Text color="$blue10Dark">monday</Text>
            <Text color="$blue10Dark">13</Text>
          </YStack>
        </Button>
        <Button bg="yellow">
          <YStack>
            <Text color="$blue10Dark">monday</Text>
            <Text color="$blue10Dark">13</Text>
          </YStack>
        </Button>
      </XStack>
      <ScrollView
        // maxHeight="70%"
        // maxWidth={}
        width="100%"
        height="100%"
        backgroundColor="$blue10Dark"
        padding="$4"
        borderRadius="$4"
      >
        <View gap="$4">
          {menuCard.map((menuName) => {
            return (
              <Fragment key={menuName.id}>
                <XStack bg="red" justifyContent="flex-start">
                  {/* <Image
                    style={{ width: "30%", height: "100%" }}
                    source={{
                      uri: menuName.image,
                      // width: 120,
                      // height: 150,
                    }}
                  /> */}
                  <Card bg="yellowgreen" width="70%" br="$0">
                    <CardHeader>
                      <H3>{menuName.title}</H3>
                      {menuName.content.map((item) => (
                        <Fragment key={item}>
                          <Paragraph>{item}</Paragraph>
                        </Fragment>
                      ))}
                    </CardHeader>
                    <CardFooter justifyContent="flex-end" p="$3">
                      <Button
                        onPress={() => router.push("/(internal)/reserve")}
                      >
                        reservar
                      </Button>
                    </CardFooter>
                  </Card>
                </XStack>
              </Fragment>
            );
          })}
        </View>
      </ScrollView>

      {/* <XStack bg="red" justifyContent="flex-start">
        <Image
          style={{ width: "30%", height: "100%" }}
          source={{
            uri: "https://picsum.photos/200/300",
            // width: 120,
            // height: 150,
          }}
        />
        <Card bg="yellowgreen" width="70%" br="$0">
          <CardHeader>
            <H3>Desayuno</H3>
            <Paragraph>leche con cafe</Paragraph>
            <Paragraph>pan con huevo</Paragraph>
            <Paragraph>fruta</Paragraph>
          </CardHeader>
          <CardFooter justifyContent="flex-end" p="$3">
            <Button> reservar</Button>
          </CardFooter>
        </Card>
      </XStack> */}
    </View>
  );
}
