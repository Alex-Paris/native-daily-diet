import { MealStorageDTO } from "./MealStorageDTO";

export interface GroupedMeal {
  title: string,
  data: MealStorageDTO[];
}