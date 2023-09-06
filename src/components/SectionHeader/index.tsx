import { DietTypeDTO } from "@dtos/DietTypeDTO";

import { BackButton, BackButtonIcon, Container, Section } from "./styles";

interface SectionHeaderProps {
  section: string
  isDiet?: DietTypeDTO
}

export function SectionHeader({ section, isDiet }: SectionHeaderProps) {
  return (
    <Container isDiet={isDiet}>
      <BackButton>
        <BackButtonIcon />
      </BackButton>
      <Section>{section}</Section>
    </Container>
  )
}