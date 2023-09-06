import { StyleProp, TextInputProps, ViewStyle } from "react-native";

import { Container, Text, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  text: string
  styleContainer?: StyleProp<ViewStyle>
}

export function Input({ text, styleContainer, ...rest }: InputProps) {
  return (
    <Container style={styleContainer}>
      <Text>{text}</Text>
      <TextInput {...rest} />
    </Container>
  )
}