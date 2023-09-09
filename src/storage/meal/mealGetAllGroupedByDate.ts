import { formatDate } from "@utils/FormatDateTime";
import { GroupedMeal } from "@dtos/GroupedMealDTO";
import { MealPercentageDTO } from "@dtos/MealPercentageDTO";

import { mealGetAll } from "./mealGetAll";

export async function mealGetAllGroupedByDate() {
  try {
    const { formatted: stored } = await mealGetAll()

    // Statistics fields
    let dietMealsAmount = 0 // Amount the number of diet meals
    let sequenceOfDietMeals = 0 // Count the sequence of diet. Gets "0" if a non-diet meal is found
    let bestSequenceOfDietMeals = 0 // Gets the best sequence of diet meals

    // Getting group and all meals that are diet
    const group = stored.reduce((group: GroupedMeal[], meal) => {
      // Grouping all the meals by date
      const formattedDate = formatDate(meal.date).replaceAll('/', '.')

      let index = group.findIndex(data => data.title === formattedDate)

      if (index === -1) {
        index = group.push({
          title: formattedDate,
          data: []
        }) - 1
      }

      group[index].data.push(meal);

      // Calculating statistics
      if (meal.isDiet) {
        dietMealsAmount++
        sequenceOfDietMeals++
      } else {
        if (bestSequenceOfDietMeals < sequenceOfDietMeals) {
          bestSequenceOfDietMeals = sequenceOfDietMeals
        }
        sequenceOfDietMeals = 0
      }

      return group;
    }, []);

    // Calculating statistics
    if (bestSequenceOfDietMeals < sequenceOfDietMeals) {
      bestSequenceOfDietMeals = sequenceOfDietMeals
    }
    // Get diet percentage
    const percentageOfDietMeals = dietMealsAmount * 100 / stored.length | 0
    const dietFormatted = percentageOfDietMeals.toFixed(2).replaceAll('.', ',')
    // Percentage object final
    const percentage: MealPercentageDTO = {
      value: `${dietFormatted}%`,
      isDiet: percentageOfDietMeals >= 50,
      bestSequenceOfDietMeals,
      dietMealsAmount,
      nonDietMealsAmount: stored.length - dietMealsAmount,
      totalMealsAmount: stored.length
    }

    return {
      data: group,
      percentage
    }
  } catch (error) {
    throw error;
  }
}
