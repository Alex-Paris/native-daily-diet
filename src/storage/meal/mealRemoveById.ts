import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/config";
import { mealGetAll } from "./mealGetAll";

export async function mealRemoveById(mealId: string) {
  try {
    const { formatted: stored } = await mealGetAll()

    const meals = stored.filter(meal => meal.id !== mealId)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
  } catch (error) {
    throw error;
  }
}