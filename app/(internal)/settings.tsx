import { Switch, Text, View, XStack, YStack } from "tamagui";

const Settings = () => {
  return (
    <View>
      <YStack justifyContent="center" p="$4">
        <Text>Notificaciones</Text>
        <XStack marginLeft="$3" marginRight="$3" gap="$5" alignItems="center">
          <Text>Notificarme cuando se habilite cualquier reserva </Text>
          <Switch>
            <Switch.Thumb animation="quick" />
          </Switch>
        </XStack>
      </YStack>
    </View>
  );
};

export default Settings;
