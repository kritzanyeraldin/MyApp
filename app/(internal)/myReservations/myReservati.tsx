import { Icon } from "@/components/common";
import {
  Button,
  Card,
  H2,
  Image,
  ScrollView,
  Switch,
  Text,
  View,
  XStack,
} from "tamagui";

const MyReservationsFill = () => {
  return (
    <View bg="#f6f6f6" width="100%" height="100%">
      <ScrollView>
        <Card
          width="100%"
          maxWidth="80%"
          // height="100%"
          flex={1}
          alignSelf="center"
          mt="$4"
          p="$3.5"
          br="$0"
          bg="#cfcfcfe8"
          // justifyContent="center
          gap="$2.5"
        >
          <XStack justifyContent="space-between">
            <Text>Tipo</Text>
            <Text>Area</Text>
          </XStack>
          <Text>horario</Text>
          <XStack justifyContent="space-between">
            <XStack alignItems="center" gap="$2">
              <Icon type="bell" weight="regular"></Icon>
              <Switch size="$2">
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>
            <Button br="$0" bg="#a7a7a7" size="$3" width="$10">
              Cancelar
            </Button>
          </XStack>
        </Card>
      </ScrollView>
    </View>
  );
};

export default MyReservationsFill;
