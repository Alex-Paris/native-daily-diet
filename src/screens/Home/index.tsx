import { Block } from "@components/Block";
import { Button } from "@components/Button";
import { Header } from "@components/Header";

import { Container, TopText } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Block
        type="POSITIVE"
        size="LARGE"
        value="90,86%"
        description="das refeições dentro da dieta"
      />

      <TopText>Refeições</TopText>
      <Button icon="plus" text="Nova refeição" />
    </Container>
  )
}
