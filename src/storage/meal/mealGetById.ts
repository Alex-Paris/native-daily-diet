import { AppError } from "@utils/AppError";
import { mealGetAll } from "./mealGetAll";

export async function mealGetById(mealId: string) {
  try {
    const { formatted: stored } = await mealGetAll()

    const index = stored.findIndex(meal => meal.id === mealId)

    if (index === -1) {
      throw new AppError('Refeição não foi encontrada')
    }

    return stored[index]
  } catch (error) {
    throw error;
  }
}