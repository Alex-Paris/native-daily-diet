import { MealDTO } from "./MealDTO"

export interface MealStorageDTO 
  extends Omit<MealDTO, "date" | "time"> {
  date: number
  time: number
}