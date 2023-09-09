import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/config";
import { MealDTO } from "@dtos/MealDTO";
import { MealStorageDTO } from "@dtos/MealStorageDTO";

import { mealGetAll } from "./mealGetAll";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const { storage } = await mealGetAll()

    const index = storage.findIndex(meal => meal.id === newMeal.id)

    const formattedMeal: MealStorageDTO = {
      ...newMeal,
      date: newMeal.date.getTime(),
      time: newMeal.time.getTime(),
    }

    if (index === -1) {
      storage.push(formattedMeal)
    } else  {
      storage[index] = {
        ...formattedMeal
      }
    }

    const formatted = JSON.stringify(storage)
    await AsyncStorage.setItem(MEAL_COLLECTION, formatted)
  } catch (error) {
    throw error;
  }
}