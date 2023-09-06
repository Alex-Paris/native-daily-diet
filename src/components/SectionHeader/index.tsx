import { BackButton, BackButtonIcon, Container, Section } from "./styles";

interface SectionHeaderProps {
  section: string
}

export function SectionHeader({ section }: SectionHeaderProps) {
  return (
    <Container>
      <BackButton>
        <BackButtonIcon />
      </BackButton>
      <Section>{section}</Section>
    </Container>
  )
}