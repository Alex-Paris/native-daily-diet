import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/config";
import { MealStorageDTO } from "@dtos/MealStorageDTO";

import { mealGetAll } from "./mealGetAll";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const stored = await mealGetAll()

    const formattedMeal = {
      ...newMeal,
      date: newMeal.date.getTime(),
      time: newMeal.time.getTime(),
    }

    const storage = JSON.stringify([...stored, formattedMeal])
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error;
  }
}