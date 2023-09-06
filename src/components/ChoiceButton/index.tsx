import { DietTypeDTO } from "@dtos/DietTypeDTO";

import { Button, ButtonDot, ButtonText, Container, Content, Text } from "./styles";

interface ChoiceButtonProps {
  isDiet: DietTypeDTO
  onSelectChoice: (isDiet: boolean) => void
}

export function ChoiceButton({ isDiet, onSelectChoice }: ChoiceButtonProps) {
  return (
    <Container>
      <Text>Está dentro da dieta?</Text>
      <Content>
        <Button
          activeOpacity={0.5}
          isDiet
          isActive={isDiet === true}
          onPress={() => onSelectChoice(true)}
        >
          <ButtonDot isDiet />
          <ButtonText>Sim</ButtonText>
        </Button>

        <Button
          activeOpacity={0.5}
          isDiet={false}
          isActive={isDiet === false}
          onPress={() => onSelectChoice(false)}
        >
          <ButtonDot isDiet={false} />
          <ButtonText>Não</ButtonText>
        </Button>
      </Content>
    </Container>
  )
}