import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  H3,
  Image,
  Paragraph,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

export default function ForYouScreen() {
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

      <XStack bg="red" justifyContent="flex-start">
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
      </XStack>
    </View>
  );
}
