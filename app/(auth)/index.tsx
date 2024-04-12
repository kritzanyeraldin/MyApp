import { useState } from "react";
import { Button, Input, Text, View, XStack, YGroup, YStack } from "tamagui";

export default function SignInScreen() {
  const [password, setPassword] = useState("");
  return (
    <View
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      gap="$7"
      backgroundColor="$blue1"
    >
      <Text color="$blue10">¡Hola de nuevo!</Text>
      <YStack gap="$4" width="60%" backgroundColor="$red1">
        <YStack gap="$4" backgroundColor="$gray1">
          <Input
            style={{ color: "red" }}
            size="$3.5"
            backgroundColor="$backgroundTransparent"
            placeholder="Ingresa tu correo electronico"
          />
          <YStack gap="$1.5">
            <Input
              style={{ color: "red" }}
              size="$3.5"
              backgroundColor="$backgroundTransparent"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <XStack justifyContent="flex-end">
              <Text color="$blue10">olvidaste tu contraseña</Text>
            </XStack>
          </YStack>
        </YStack>

        <Button>Continue</Button>
      </YStack>
      <Text color="$blue10">No tienes una cuenta Registrate</Text>
    </View>
  );
}
