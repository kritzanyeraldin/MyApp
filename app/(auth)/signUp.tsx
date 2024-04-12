import { Album } from "@tamagui/lucide-icons";
import { useState } from "react";
import {
  Button,
  ButtonIcon,
  ButtonNestingContext,
  H1,
  H3,
  H4,
  Input,
  Text,
  View,
} from "tamagui";

export default function SinUpScreen() {
  const [password, setPassword] = useState("");
  const handlePasswordChange = (password: string) => setPassword(password);
  return (
    <View
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      // backgroundColor="red"
    >
      <View width="100%" maxWidth={310} gap="$8">
        <H1 color="$blue10" textAlign="center">
          Registrate
        </H1>
        <H4 color="$blue11" textAlign="center" mt="$-8">
          Crea una cuenta para continuar
        </H4>
        <View gap="$4">
          <Input
            color="black"
            backgroundColor="$backgroundTransparent"
            placeholder="Ingresa tu nuevo correo"
            placeholderTextColor="unset"
            borderRadius="$0"
          />
          <Input
            color="black"
            backgroundColor="$backgroundTransparent"
            placeholder="Ingresa tu nueva contraseña"
            placeholderTextColor="unset"
            borderRadius="$0"
            value={password}
            onChangeText={handlePasswordChange}
          >
            {/* <Button>asd</Button> */}
          </Input>
          <Button icon={Album}>Continuar</Button>
        </View>
      </View>
    </View>
  );
}
