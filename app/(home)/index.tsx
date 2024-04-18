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
  const menu = [
    {
      id: "desayuno",
      title: "Desayuno",
      image: "https://picsum.photos/200/300",
      content: [
        {
          item1: "leche con cafe",
          item2: "pan con huevo",
          item3: "fruta",
        },
      ],
    },
    {
      id: "almuerzo",
      title: "Almuerzo",
      image: "https://picsum.photos/200/300",
      content: [
        {
          item1: "leche con cafe",
          item2: "pan con huevo",
          item3: "fruta",
        },
      ],
    },
    {
      id: "cena",
      title: "Cena",
      image: "https://picsum.photos/200/300",
      content: [
        {
          item1: "leche con cafe",
          item2: "pan con huevo",
          item3: "fruta",
        },
      ],
    },

    {
      id: "ave",
      title: "Ca",
      image: "https://picsum.photos/200/300",
      content: [
        {
          item1: "leche con cafe",
          item2: "pan con huevo",
          item3: "fruta",
        },
      ],
    },

    {
      id: "na",
      title: "ad",
      image: "https://picsum.photos/200/300",
      content: [
        {
          item1: "leche con cafe",
          item2: "pan con huevo",
          item3: "fruta",
        },
      ],
    },
  ];

  return (
    <View gap="$4">
      <View>
        <Button bg="yellow">
          <YStack>
            <Text color="$blue10Dark">monday</Text>
            <Text color="$blue10Dark">13</Text>
          </YStack>
        </Button>
      </View>
      <ScrollView
        maxHeight="70%"
        // maxWidth={}
        width="100%"
        height="100%"
        backgroundColor="$blue10Dark"
        padding="$4"
        borderRadius="$4"
      >
        <View gap="$4">
          {menu.map((menuName, menuIndex) => {
            return (
              <Fragment key={menuName.id}>
                <XStack bg="red" justifyContent="flex-start">
                  <Image
                    style={{ width: "30%", height: "100%" }}
                    source={{
                      uri: menuName.image,
                      // width: 120,
                      // height: 150,
                    }}
                  />
                  <Card bg="yellowgreen" width="70%" br="$0">
                    <CardHeader>
                      <H3>{menuName.title}</H3>
                      {menuName.content.map((item) => (
                        <>
                          <Paragraph>{item.item1}</Paragraph>
                          <Paragraph>{item.item2}</Paragraph>
                          <Paragraph>{item.item3}</Paragraph>
                        </>
                      ))}
                    </CardHeader>
                    <CardFooter justifyContent="flex-end" p="$3">
                      <Button> reservar</Button>
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
