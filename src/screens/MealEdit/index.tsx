import { useState } from "react";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { SectionHeader } from "@components/SectionHeader";
import { ChoiceButton } from "@components/ChoiceButton";

import { Container, DateContainer, Form, ScreenContainer } from "./styles";

type IsDietType = boolean | null

export function MealEdit() {
  const [isDiet, setIsDiet] = useState<IsDietType>(null)
  
  return (
    <ScreenContainer>
      <SectionHeader section="Nova refeição" />

      <Container>
        <Form>
          <Input text="Nome" />
          <Input
            text="Descrição"
            multiline
            numberOfLines={4}
            maxLength={180}
            style={{ height: 110 }}
          />

          <DateContainer>
            <Input
              text="Data"
              editable={false}
              styleContainer={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Input
              text="Hora"
              editable={false}
              styleContainer={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
          </DateContainer>

          <ChoiceButton
            isDiet={isDiet}
            onSelectChoice={setIsDiet}
          />
        </Form>

        <Button text="Cadastrar refeição" />
      </Container>
    </ScreenContainer>
  )
}