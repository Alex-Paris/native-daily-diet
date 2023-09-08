import { DietTypeDTO } from "@dtos/DietTypeDTO";

import { BackButton, BackButtonIcon, Container, Section } from "./styles";

interface SectionHeaderProps {
  section: string
  isDiet?: DietTypeDTO
  onBackPress?: () => void
}

export function SectionHeader({ section, isDiet, onBackPress }: SectionHeaderProps) {
  return (
    <Container isDiet={isDiet}>
      <BackButton onPress={onBackPress}>
        <BackButtonIcon />
      </BackButton>
      <Section>{section}</Section>
    </Container>
  )
}