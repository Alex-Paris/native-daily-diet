import { Block } from "@components/Block";

import { BackButton, BackButtonIcon, Container, Data, DataInfo, ScreenContainer, Title } from "./styles";

export function Statistics() {
  return (
    <ScreenContainer>
      <Block
        isDiet
        size="LARGE"
        value="90,86%"
        description="das refeições dentro da dieta"
        activeOpacity={1}
        style={{ paddingTop: 72, paddingBottom: 66 }}
      />

      <BackButton>
        <BackButtonIcon isDiet />
      </BackButton>

      <Container>
        <Title>Estatísticas gerais</Title>
        <Data>
          <Block
            value="22"
            description="melhor sequência de pratos dentro da dieta"
          />
          <Block
            value="109"
            description="refeições registradas"
          />
          <DataInfo>
            <Block
              isDiet
              value="99"
              description="refeições dentro da dieta"
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Block
              isDiet={false}
              value="10"
              description="refeições fora da dieta"
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
          </DataInfo>
        </Data>
      </Container>
    </ScreenContainer>
  )
}