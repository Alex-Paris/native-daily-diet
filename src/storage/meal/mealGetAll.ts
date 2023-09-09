import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/config";
import { FakeDelay } from "@utils/FakeDelay";
import { MealDTO } from "@dtos/MealDTO";
import { MealStorageDTO } from "@dtos/MealStorageDTO";

export async function mealGetAll() {
  try {
    // await AsyncStorage.removeItem(MEAL_COLLECTION)
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
  
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    // Sort stored data by ASC date
    const sorted = meals.sort(function(a,b){
      if (a.date === b.date) {
        return b.time - a.time;
      }
      return b.date - a.date;
    });

    // Restore numbered date to a Date
    const formatted: MealDTO[] = sorted.map(meal => ({
      ...meal,
      date: new Date(meal.date),
      time: new Date(meal.time)
    }))

    await FakeDelay()

    return {
      storage: meals,
      formatted
    }
  } catch (error) {
    throw error;
  }
}