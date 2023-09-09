import { useCallback, useState } from "react";
import { Alert, SectionList, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Block } from "@components/Block";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import { RootList } from "src/@types/navigation";
import { GroupedMeal } from "@dtos/GroupedMealDTO";
import { formatTime } from "@utils/FormatDateTime";
import { MealPercentageDTO } from "@dtos/MealPercentageDTO";
import { mealGetAllGroupedByDate } from "@storage/meal/mealGetAllGroupedByDate";

import { Container, ListItem, ListItemDivider, ListItemDot, ListItemHour, ListItemText, ListSection, ListSectionTitle, TopText } from "./styles";

interface HomeProps {
  navigation: NativeStackNavigationProp<RootList, 'home'>
}

export function Home({ navigation }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<GroupedMeal[]>([])
  const [percentage, setPercentage] = useState<MealPercentageDTO>({
    value: '00,00%',
    isDiet: false,
    bestSequenceOfDietMeals: 0,
    dietMealsAmount: 0,
    nonDietMealsAmount: 0,
    totalMealsAmount: 0
  })

  function handleNewMeal() {
    navigation.navigate('meal_edit', {})
  }

  function handleViewMeal(mealId: string) {
    navigation.navigate('meal_view', { mealId })
  }

  function handleStatisticsPage() {
    navigation.navigate('statistics', { statistics: percentage })
  }

  async function fetchMeals() {
    try {
      setIsLoading(true)

      const { data, percentage } = await mealGetAllGroupedByDate()
      setMeals(data)
      setPercentage(percentage)
    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar as refeições')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  },[]))

  return (
    <Container>
      <Header />

      {
        isLoading ? <Loading /> :
          <>
            <Block
              isDiet={percentage.isDiet}
              size="LARGE"
              value={percentage.value}
              onPress={handleStatisticsPage}
              description="das refeições dentro da dieta"
            />

            <TopText>Refeições</TopText>
            <Button icon="plus" text="Nova refeição" onPress={handleNewMeal} />

            <SectionList
              sections={meals}
              keyExtractor={(item) => item.id}

              style={{ marginTop: 32 }}
              contentContainerStyle={{ gap: 8 }}
              showsVerticalScrollIndicator={false}
              
              renderSectionHeader={({section: {title}}) => (
                <ListSection>
                  <ListSectionTitle>{title}</ListSectionTitle>
                </ListSection>
              )}

              renderSectionFooter={() => <View style={{ height: 32 }} />}
              
              renderItem={({item}) => (
                <ListItem activeOpacity={0.5} onPress={() => handleViewMeal(item.id)}>
                  <ListItemHour>{formatTime(item.time)}</ListItemHour>
                  <ListItemDivider />
                  <ListItemText>{item.name}</ListItemText>
                  <ListItemDot isDiet={item.isDiet} />
                </ListItem>
              )}
            />
          </>
      }

    </Container>
  )
}
