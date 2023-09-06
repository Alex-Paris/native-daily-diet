import { Block } from "@components/Block";

import { Container, PopContainer, PopData, PopDataInfo, Title } from "./styles";

export function Statistics() {
  return (
    <Container>
      <Block
        type="POSITIVE"
        size="LARGE"
        value="90,86%"
        description="das refeições dentro da dieta"
        style={{ paddingTop: 72, paddingBottom: 66 }}
      />

      <PopContainer>
        <Title>Estatísticas gerais</Title>
        <PopData>
          <Block
            value="22"
            description="melhor sequência de pratos dentro da dieta"
          />
          <Block
            value="109"
            description="refeições registradas"
          />
          <PopDataInfo>
            <Block
              type="POSITIVE"
              value="99"
              description="refeições dentro da dieta"
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Block
              type="NEGATIVE"
              value="10"
              description="refeições fora da dieta"
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
          </PopDataInfo>
        </PopData>
      </PopContainer>
    </Container>
  )
}