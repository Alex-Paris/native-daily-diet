import { TouchableOpacityProps } from "react-native";

import { Container, Description, LinkIcon, Value } from "./styles";

interface BlockProps extends TouchableOpacityProps {
  type?: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
  size?: 'NORMAL' | 'LARGE'
  value: string
  description: string
}

export function Block({
    type = 'NEUTRAL',
    size = 'NORMAL',
    value,
    description,
    ...rest 
  }: BlockProps) {
  return (
    <Container
      activeOpacity={size === "LARGE" ? 0.5 : 1}
      valueType={type}
      containerSize={size}
      { ...rest }
    >
      <Value containerSize={size}>{value}</Value>
      <Description>{description}</Description>

      {size === "LARGE" && <LinkIcon valueType={type} />}
    </Container>
  )
}