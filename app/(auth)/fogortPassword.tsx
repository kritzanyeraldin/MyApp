import { Button, H2, H4, Input, Text, View } from "tamagui";

export default function ForgotPasswordScreen() {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <View>
        <H2 color="$blue10">¿Olvidaste tu contraseña?</H2>
        <Input
          color="black"
          backgroundColor="$backgroundTransparent"
          mt="$5"
          borderRadius="$0"
          borderColor="$backgroundFocus"
          placeholder="Ingresa tu correo electronico"
          placeholderTextColor="unset"
        ></Input>
        <Button mt="$3">Confirmar</Button>
      </View>
    </View>
  );
}
