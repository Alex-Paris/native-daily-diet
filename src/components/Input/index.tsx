import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";

import { Container, Text, InputField } from "./styles";

interface InputProps extends TextInputProps {
  text: string
  styleContainer?: StyleProp<ViewStyle>
  inputRef?: React.RefObject<TextInput>
}

export function Input({ text, styleContainer, inputRef, ...rest }: InputProps) {
  return (
    <Container style={styleContainer}>
      <Text>{text}</Text>
      <InputField ref={inputRef} {...rest} />
    </Container>
  )
}