import { MealStorageDTO } from "@dtos/MealStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/config";
import { FakeDelay } from "@utils/FakeDelay";

export async function mealGetAll() {
  try {
    // await AsyncStorage.removeItem(MEAL_COLLECTION)
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
  
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    await FakeDelay()

    return meals
  } catch (error) {
    throw error;
  }
}