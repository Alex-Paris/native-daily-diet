import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/config";
import { MealStorageDTO } from "@dtos/MealStorageDTO";

import { mealGetAll } from "./mealGetAll";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const stored = await mealGetAll()

    const storage = JSON.stringify([...stored, newMeal])
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error;
  }
}