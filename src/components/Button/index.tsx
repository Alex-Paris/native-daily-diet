import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacityProps } from "react-native";

import { ButtonTypeProps, Container, Icon, Text } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string
  type?: ButtonTypeProps
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
}

export function Button({ text, icon, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.5} type={type} { ...rest }>
      {icon && <Icon type={type} name={icon} />}

      <Text type={type}>{text}</Text>
    </Container>
  )
}