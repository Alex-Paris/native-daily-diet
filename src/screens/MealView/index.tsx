import { Alert } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MealDTO } from "@dtos/MealDTO";
import { Modal } from "@components/Modal";
import { AppError } from "@utils/AppError";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { RootList } from "src/@types/navigation";
import { mealGetById } from "@storage/meal/mealGetById";
import { SectionHeader } from "@components/SectionHeader";
import { mealRemoveById } from "@storage/meal/mealRemoveById";
import { formatDate, formatTime } from "@utils/FormatDateTime";

import { Container, Content, ScreenContainer, Name, Description, ContentText, TitleDate, TagContainer, TagDot, TagText } from "./styles";

type MealViewProps = NativeStackScreenProps<RootList, "meal_view">

export function MealView({ navigation, route }: MealViewProps) {
  // States
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [meal, setMeal] = useState<MealDTO>()

  // Constants
  const { mealId } = route.params
  const formattedDate = formatDate(meal?.date)
  const formattedTime = formatTime(meal?.time)

  // Handles
  function handleEditMeal() {
    navigation.navigate('meal_edit', { mealId })
  }

  async function handleRemoveMeal() {
    try {
      setIsLoading(true)

      await mealRemoveById(mealId)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Refeição', 'Não foi possível excluir a refeição')
    } finally {
      setIsLoading(false)
      setShowModal(false)
    }
  }

  async function fetchMeal() {
    try {
      setIsLoading(true)

      const data = await mealGetById(mealId)
      setMeal(data)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
        navigation.navigate('home')
      } else {
        console.log(error)
        Alert.alert('Refeição', 'Não foi possível carregar a refeição')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal()
  },[]))

  return (
    <ScreenContainer>
      <SectionHeader
        section="Refeição"
        isDiet={meal?.isDiet}
        onBackPress={() => navigation.navigate('home')}
      />

      <Container>
        {
          isLoading ? <Loading /> :
            <>
              <Content>
                <ContentText>
                  <Name>{meal?.name}</Name>
                  <Description>{meal?.description}</Description>
                </ContentText>
      
                <ContentText>
                  <TitleDate>Data e hora</TitleDate>
                  <Description>
                    {formattedDate} às {formattedTime}
                  </Description>
                </ContentText>
      
                <TagContainer>
                  <TagDot isDiet={meal?.isDiet} />
                  <TagText>
                    {meal?.isDiet ? 'dentro' : 'fora' } da dieta
                  </TagText>
                </TagContainer>
              </Content>
      
              <Button
                icon="square-edit-outline"
                text="Editar refeição"
                onPress={handleEditMeal}
              />
              <Button
                icon="trash-can-outline"
                type="SECONDARY"
                text="Excluir refeição"
                onPress={() => setShowModal(true)}
              />

              <Modal
                showModal={showModal}
                onHideModal={setShowModal}
                onConfirmModal={handleRemoveMeal}
              />
            </>
        }
      </Container>
    </ScreenContainer>
  )
}