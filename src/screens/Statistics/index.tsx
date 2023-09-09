import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Block } from "@components/Block";
import { RootList } from "src/@types/navigation";

import { BackButton, BackButtonIcon, Container, Data, DataInfo, ScreenContainer, Title } from "./styles";

type StatisticsProps = NativeStackScreenProps<RootList, "statistics">

export function Statistics({ navigation, route }: StatisticsProps) {
  const {
    value,
    isDiet,
    bestSequenceOfDietMeals,
    dietMealsAmount,
    nonDietMealsAmount,
    totalMealsAmount
  } = route.params.statistics

  return (
    <ScreenContainer>
      <Block
        isDiet={isDiet}
        size="LARGE"
        value={value}
        description="das refeições dentro da dieta"
        activeOpacity={1}
        style={{ paddingTop: 72, paddingBottom: 66 }}
      />

      <BackButton onPress={() => navigation.navigate('home')}>
        <BackButtonIcon isDiet={isDiet} />
      </BackButton>

      <Container>
        <Title>Estatísticas gerais</Title>
        <Data>
          <Block
            value={`${bestSequenceOfDietMeals}`}
            description="melhor sequência de pratos dentro da dieta"
          />
          <Block
            value={`${totalMealsAmount}`}
            description="refeições registradas"
          />
          <DataInfo>
            <Block
              isDiet
              value={`${dietMealsAmount}`}
              description="refeições dentro da dieta"
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Block
              isDiet={false}
              value={`${nonDietMealsAmount}`}
              description="refeições fora da dieta"
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
          </DataInfo>
        </Data>
      </Container>
    </ScreenContainer>
  )
}