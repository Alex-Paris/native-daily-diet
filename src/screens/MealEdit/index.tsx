import { useRef, useState } from "react";
import ptBR from 'date-fns/locale/pt-BR';
import { isToday, isAfter, format } from "date-fns";
import { Alert, Keyboard, TextInput } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { DietTypeDTO } from "@dtos/DietTypeDTO";
import { RootList } from "src/@types/navigation";
import { mealCreate } from "@storage/meal/mealCreate";
import { MealStorageDTO } from "@dtos/MealStorageDTO";
import { ChoiceButton } from "@components/ChoiceButton";
import { SectionHeader } from "@components/SectionHeader";

import { Container, DateContainer, Form, ScreenContainer } from "./styles";

type MealEditProps = NativeStackScreenProps<RootList, "meal_edit">

export function MealEdit({ navigation, route }: MealEditProps) {
  // Use states
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isDiet, setIsDiet] = useState<DietTypeDTO>()
  // Date Picker states
  const [dateSelected, setDateSelected] = useState<Date | undefined>()
  const [timeSelected, setTimeSelected] = useState<Date | undefined>()
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  // Refs
  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)

  // Handles
  function handleChangeDate(date: Date) {
    const formatted = format(date, 'dd/MM/yyyy', {
      locale: ptBR
    })
    setDate(formatted)
    setDateSelected(date)
    setShowDate(false)
  }

  function handleChangeTime(time: Date) {
    const formatted = format(time, 'HH:mm', {
      locale: ptBR
    })
    setTime(formatted)
    setTimeSelected(time)
    setShowTime(false)
  }

  async function handleAddMeal() {
    Keyboard.dismiss()

    if (name.trim().length === 0) {
      return Alert.alert('Nova refeição', 'Necessário informar o nome da refeição para adicioná-la')
    }

    if (dateSelected === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar uma data')
    }

    if (timeSelected === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar um horário')
    }

    if (isToday(dateSelected) && isAfter(timeSelected, new Date())) {
      return Alert.alert('Nova refeição', 'Pela data escolhida ser hoje, o horário precisa ser menor que o horário atual')
    }

    if (isDiet === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar se a refeição está ou não dentro da dieta')
    }

    const mealId = Math.random().toString().replaceAll('.', '')

    const newMeal: MealStorageDTO = {
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
      Alert.alert('Nova refeição', 'Não foi possível adicionar')
    }
  }
  
  return (
    <ScreenContainer>
      <SectionHeader section="Nova refeição" />

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
              value={date}
              editable={false}
              onPressIn={() => setShowDate(true)}
              styleContainer={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Input
              text="Hora"
              value={time}
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

        <Button text="Cadastrar refeição" onPress={handleAddMeal} />
      </Container>

      <DateTimePickerModal
        mode="date"
        date={dateSelected}
        isVisible={showDate}
        maximumDate={new Date()}
        onConfirm={handleChangeDate}
        onCancel={() => setShowDate(false)}
      />

      <DateTimePickerModal
        mode="time"
        date={timeSelected}
        minuteInterval={10}
        isVisible={showTime}
        onConfirm={handleChangeTime}
        onCancel={() => setShowTime(false)}
      />
    </ScreenContainer>
  )
}