import { useCallback, useState } from "react";
import { Alert, SectionList, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Block } from "@components/Block";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { RootList } from "src/@types/navigation";
import { GroupedMeal } from "@dtos/GroupedMealDTO";
import { mealGetAllGroupedByDate } from "@storage/meal/mealGetAllGroupedByDate";

import { Container, ListItem, ListItemDivider, ListItemDot, ListItemHour, ListItemText, ListSection, ListSectionTitle, TopText } from "./styles";
import { Loading } from "@components/Loading";

interface HomeProps {
  navigation: NativeStackNavigationProp<RootList, 'home'>
}

export function Home({ navigation }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<GroupedMeal[]>([])
  const [percentage, setPercentage] = useState({value: '', diet: false })

  function handleNewMeal() {
    navigation.navigate('meal_edit', {})
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

  if (isLoading) {
    return (
      <Container>
        <Header />

        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <Header />

      <Block
        isDiet={percentage.diet}
        size="LARGE"
        value={percentage.value}
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
          <ListItem>
            <ListItemHour>{item.time}</ListItemHour>
            <ListItemDivider />
            <ListItemText>{item.name}</ListItemText>
            <ListItemDot isDiet={item.isDiet} />
          </ListItem>
        )}
      />
    </Container>
  )
}
