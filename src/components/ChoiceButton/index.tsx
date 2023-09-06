import { Button, ButtonDot, ButtonText, Container, Content, Text } from "./styles";

interface ChoiceButtonProps {
  isDiet: boolean | null
  onSelectChoice: (isDiet: boolean) => void
}

export function ChoiceButton({ isDiet, onSelectChoice }: ChoiceButtonProps) {
  return (
    <Container>
      <Text>Está dentro da dieta?</Text>
      <Content>
        <Button
          activeOpacity={0.5}
          type="POSITIVE"
          isActive={isDiet === true}
          onPress={() => onSelectChoice(true)}
        >
          <ButtonDot type="POSITIVE" />
          <ButtonText>Sim</ButtonText>
        </Button>

        <Button
          activeOpacity={0.5}
          type="NEGATIVE"
          isActive={isDiet === false}
          onPress={() => onSelectChoice(false)}
        >
          <ButtonDot type="NEGATIVE" />
          <ButtonText>Não</ButtonText>
        </Button>
      </Content>
    </Container>
  )
}