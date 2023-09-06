import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Text } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
}

export function Button({ text, icon, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.5} { ...rest }>
      {icon && <Icon name={icon} />}

      <Text>{text}</Text>
    </Container>
  )
}