import { useEffect, useRef, useState } from "react";
import ptBR from 'date-fns/locale/pt-BR';
import { isToday, isAfter, format } from "date-fns";
import { Alert, Keyboard, TextInput } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MealDTO } from "@dtos/MealDTO";
import { Input } from "@components/Input";
import { AppError } from "@utils/AppError";
import { Button } from "@components/Button";
import { DietTypeDTO } from "@dtos/DietTypeDTO";
import { RootList } from "src/@types/navigation";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealGetById } from "@storage/meal/mealGetById";
import { ChoiceButton } from "@components/ChoiceButton";
import { SectionHeader } from "@components/SectionHeader";
import { formatDate, formatTime } from "@utils/FormatDateTime";

import { Container, DateContainer, Form, ScreenContainer } from "./styles";

type MealEditProps = NativeStackScreenProps<RootList, "meal_edit">

export function MealEdit({ navigation, route }: MealEditProps) {
  // Use states
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState<Date | undefined>()
  const [isDiet, setIsDiet] = useState<DietTypeDTO>()
  // Date Picker states
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  // Constants
  const isEditing = route.params.mealId
  const formattedDate = formatDate(date)
  const formattedTime = formatTime(time)

  // Refs
  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)

  // Handles
  function handleChangeDate(date: Date) {
    setDate(date)
    setShowDate(false)
  }

  function handleChangeTime(time: Date) {
    setTime(time)
    setShowTime(false)
  }

  async function handleAddMeal() {
    Keyboard.dismiss()

    if (name.trim().length === 0) {
      return Alert.alert('Nova refeição', 'Necessário informar o nome da refeição para adicioná-la')
    }

    if (date === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar uma data')
    }

    if (time === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar um horário')
    }

    if (isToday(date) && isAfter(time, new Date())) {
      return Alert.alert('Nova refeição', 'Pela data escolhida ser hoje, o horário precisa ser menor que o horário atual')
    }

    if (isDiet === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar se a refeição está ou não dentro da dieta')
    }

    let mealId = Math.random().toString().replaceAll('.', '')
    if (isEditing) {
      mealId = route.params.mealId
    }

    const newMeal: MealDTO = {
      id: mealId,
      name,
      description,
      date,
      time,
      isDiet
    }

    try {
      await mealCreate(newMeal)

      navigation.navigate('meal_view', { mealId })
    } catch (error) {
      console.log(error)
      Alert.alert('Refeição', 'Não foi possível adicionar/editar')
    }
  }

  async function fetchMeal(mealId: string) {
    try {
      setIsLoading(true)

      const { name, description, date, time, isDiet } = await mealGetById(mealId)
      setName(name)
      setDescription(description)
      setDate(date)
      setTime(time)
      setIsDiet(isDiet)
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

  useEffect(() => {
    const { mealId } = route.params

    if (mealId) {
      fetchMeal(mealId)
    }
  }, [])
  
  return (
    <ScreenContainer>
      <SectionHeader
        section={!isEditing ? "Nova refeição" : "Editar refeição"}
        onBackPress={() => navigation.goBack()}
      />

      <Container>
        <Form>
          <Input
            text="Nome"
            value={name}
            onChangeText={setName}
            inputRef={nameInputRef}
            returnKeyType="next"
            onSubmitEditing={() => { descriptionInputRef.current?.focus() }}
          />
          <Input
            text="Descrição"
            multiline
            numberOfLines={4}
            maxLength={180}
            style={{ height: 110 }}
            value={description}
            onChangeText={setDescription}
            inputRef={descriptionInputRef}
          />

          <DateContainer>
            <Input
              text="Data"
              value={formattedDate}
              editable={false}
              onPressIn={() => setShowDate(true)}
              styleContainer={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Input
              text="Hora"
              value={formattedTime}
              editable={false}
              onPressIn={() => setShowTime(true)}
              styleContainer={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
          </DateContainer>

          <ChoiceButton
            isDiet={isDiet}
            onSelectChoice={setIsDiet}
          />
        </Form>

        <Button
          text={!isEditing ? "Cadastrar refeição" : "Salvar alterações"}
          onPress={handleAddMeal}
        />
      </Container>

      <DateTimePickerModal
        mode="date"
        date={date}
        isVisible={showDate}
        maximumDate={new Date()}
        onConfirm={handleChangeDate}
        onCancel={() => setShowDate(false)}
      />

      <DateTimePickerModal
        mode="time"
        date={time}
        minuteInterval={10}
        isVisible={showTime}
        onConfirm={handleChangeTime}
        onCancel={() => setShowTime(false)}
      />
    </ScreenContainer>
  )
}