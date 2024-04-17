import { NavigationProp } from "@react-navigation/native";
import { Link, useNavigation, useRouter } from "expo-router";
import { useState } from "react";

import { Button, H2, Input, Text, View, XStack } from "tamagui";

export default function SignInScreen() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handlePasswordChange = (password: string) => setPassword(password);

  return (
    <View
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      p="$4"
    >
      <View width="100%" maxWidth={300} gap="$7">
        <H2 color="$blue10" textAlign="center">
          ¡Hola de nuevo!
        </H2>
        <View gap="$4">
          <Input
            color="black"
            backgroundColor="$backgroundTransparent"
            placeholder="Ingresa tu correo electronico"
          />
          <Input
            color="black"
            backgroundColor="$backgroundTransparent"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChangeText={handlePasswordChange}
          />
          <Link
            href="/fogortPassword"
            style={{ color: "blue", textAlign: "right", marginTop: -10 }}
          >
            Olvidaste tu contraseña
          </Link>
          <Button
            mt="$4"
            onPress={() => {
              router.push("/(home)");
            }}
          >
            Continuar
          </Button>
        </View>
        <Text color="$blue10" textAlign="right">
          No tienes una cuenta.
          <Link href="/signUp" style={{ color: "blue" }}>
            Regístrate
          </Link>
        </Text>
      </View>
    </View>
  );
}
