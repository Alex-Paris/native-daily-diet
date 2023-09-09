import { GroupedMeal } from "@dtos/GroupedMealDTO";

import { formatDate } from "@utils/FormatDateTime";
import { CalculateStatistics } from "@utils/CalculateStatistics";

import { mealGetAll } from "./mealGetAll";

interface ReduceObject {
  group: GroupedMeal[]
  numberOfDietMeals: number
}

export async function mealGetAllGroupedByDate() {
  try {
    const { formatted: stored } = await mealGetAll()

    // Getting group and all meals that are diet
    const { group, numberOfDietMeals } = stored.reduce((red, meal) => {
      const formattedDate = formatDate(meal.date).replaceAll('/', '.')

      let index = red.group.findIndex(data => data.title === formattedDate)

      if (index === -1) {
        index = red.group.push({
          title: formattedDate,
          data: []
        }) - 1
      }

      if (meal.isDiet) {
        red.numberOfDietMeals++
      }

      red.group[index].data.push(meal);

      return red;
    }, <ReduceObject>({group: [], numberOfDietMeals: 0}));

    const percentage = CalculateStatistics(numberOfDietMeals, stored.length)

    return {
      data: group,
      percentage
    }
  } catch (error) {
    throw error;
  }
}
