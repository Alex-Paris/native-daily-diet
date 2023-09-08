import { GroupedMeal } from "@dtos/GroupedMealDTO";

import { mealGetAll } from "./mealGetAll";

interface ReduceObject {
  group: GroupedMeal[]
  dietMealsCount: number
}

export async function mealGetAllGroupedByDate() {
  try {
    const stored = await mealGetAll()

    // Getting group and all meals that are diet
    const { group: grouped, dietMealsCount } = stored.reduce((red, meal) => {
      const formattedDate = meal.date.replaceAll('/', '.')

      let index = red.group.findIndex(data => data.title === formattedDate)

      if (index === -1) {
        index = red.group.push({
          title: formattedDate,
          data: []
        }) - 1
      }

      if (meal.isDiet) {
        red.dietMealsCount++
      }

      red.group[index].data.push(meal);
      return red;
    }, <ReduceObject>({group: [], dietMealsCount: 0}));

    // Sort the group by desc date
    const sorted = grouped.sort(function(a,b){
      const aArray = a.title.split('.')
      const bArray = b.title.split('.')
      const aDate = new Date(`${aArray[2]}-${aArray[1]}-${aArray[0]}`)
      const bDate = new Date(`${bArray[2]}-${bArray[1]}-${bArray[0]}`)

      return bDate.getTime() - aDate.getTime();
    });

    // Get diet percentage
    const dietPercentage = dietMealsCount * 100 / sorted.length
    const dietFormatted = dietPercentage.toFixed(2).replaceAll('.', ',')

    return {
      data: sorted,
      percentage: {
        value: `${dietFormatted}%`,
        diet: dietPercentage >= 50
      }
    }
  } catch (error) {
    throw error;
  }
}