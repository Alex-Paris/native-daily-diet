import { useState } from "react";

import { Button } from "@components/Button";
import { DietTypeDTO } from "@dtos/DietTypeDTO";
import { SectionHeader } from "@components/SectionHeader";

import { Container, Content, ScreenContainer, Name, Description, ContentText, TitleDate, TagContainer, TagDot, TagText } from "./styles";

export function MealView() {
  const [isDiet, setIsDiet] = useState<DietTypeDTO>()
  
  return (
    <ScreenContainer>
      <SectionHeader section="Refeição" isDiet={true} />

      <Container>
        <Content>
          <ContentText>
            <Name>Sanduíche</Name>
            <Description>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Description>
          </ContentText>

          <ContentText>
            <TitleDate>Data e hora</TitleDate>
            <Description>
              12/08/2022 às 16:00
            </Description>
          </ContentText>

          <TagContainer>
            <TagDot />
            <TagText>dentro da dieta</TagText>
          </TagContainer>
        </Content>

        <Button icon="square-edit-outline" text="Editar refeição" />
        <Button icon="trash-can-outline" type="SECONDARY" text="Excluir refeição" />
      </Container>
    </ScreenContainer>
  )
}