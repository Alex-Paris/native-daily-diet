import { TouchableOpacityProps } from "react-native";

import { DietTypeDTO } from "@dtos/DietTypeDTO";

import { Container, Description, LinkIcon, Value } from "./styles";

interface BlockProps extends TouchableOpacityProps {
  isDiet?: DietTypeDTO
  size?: 'NORMAL' | 'LARGE'
  value: string
  description: string
}

export function Block({
    size = 'NORMAL',
    isDiet,
    value,
    description,
    ...rest 
  }: BlockProps) {
  return (
    <Container
      isDiet={isDiet}
      activeOpacity={size === "LARGE" ? 0.5 : 1}
      containerSize={size}
      { ...rest }
    >
      <Value containerSize={size}>{value}</Value>
      <Description>{description}</Description>

      {size === "LARGE" && <LinkIcon isDiet={isDiet} />}
    </Container>
  )
}