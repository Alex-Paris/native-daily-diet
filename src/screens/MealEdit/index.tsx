import { useRef, useState } from "react";
import { ParamListBase } from "@react-navigation/native";
import { Alert, Keyboard, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { DietTypeDTO } from "@dtos/DietTypeDTO";
import { RootList } from "src/@types/navigation";
// import { DatePicker } from "@components/DatePicker";
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
  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState<Date | undefined>()
  const [isDiet, setIsDiet] = useState<DietTypeDTO>()
  const [showDate, setShowDate] = useState(false)
  const [showHour, setShowHour] = useState(false)

  // Refs
  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)

  // Handles
  async function handleAddMeal() {
    Keyboard.dismiss()

    if (name.trim().length === 0) {
      return Alert.alert('Nova refeição', 'Necessário informar o nome da refeição para adicioná-la')
    }

    if (date === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar uma data')
    }

    if (time === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar uma data')
    }

    if (isDiet === undefined) {
      return Alert.alert('Nova refeição', 'Necessário informar se a refeição está ou não dentro da dieta')
    }

    const mealId = Math.random().toString().replaceAll('.', '')

    const newMeal: MealStorageDTO = {
      id: mealId,
      name,
      description,
      date: date.toDateString(),
      time: time.toTimeString(),
      isDiet
    }

    return console.log(newMeal)

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
              value={date?.toDateString()}
              editable={false}
              onPressIn={() => setShowDate(true)}
              styleContainer={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Input
              text="Hora"
              value={time?.toTimeString()}
              editable={false}
              onPressIn={() => setShowHour(true)}
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

      {/* <DatePicker
        mode="date"
        value={date ? date : new Date()}
        onChange={(_, date) => setDate(date)}
        isShowing={showDate}
        onShowingChange={setShowDate}
      />
      <DatePicker
        mode="time"
        value={hour ? hour : new Date()}
        onChange={(_, hour) => setHour(hour)}
        isShowing={showHour}
        minuteInterval={10}
        onShowingChange={setShowHour}
      /> */}

    </ScreenContainer>
  )
}