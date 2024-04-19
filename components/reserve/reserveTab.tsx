import { menuCard } from "@/constants";
import { Fragment } from "react";
import {
  Button,
  Card,
  Paragraph,
  ScrollView,
  Text,
  View,
  XStack,
} from "tamagui";

export default function ReserveTab() {
  return (
    <View bg="white">
      <XStack gap="$3" padding="$5">
        <ScrollView rotateY="unset">
          {menuCard.map((menuName) => {
            return (
              <Fragment key={menuName.id}>
                <Card>
                  <Card.Header>
                    <Text>{menuName.title}</Text>
                    <Paragraph>Disfruta de un rico {menuName.title}</Paragraph>
                  </Card.Header>
                  <Card.Footer>
                    <Button>reservar</Button>
                  </Card.Footer>
                </Card>
              </Fragment>
            );
          })}
        </ScrollView>
      </XStack>
    </View>
  );
}
