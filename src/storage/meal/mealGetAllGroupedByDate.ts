import { GroupedMeal } from "@dtos/GroupedMealDTO";

import { formatDate } from "@utils/FormatDateTime";

import { mealGetAll } from "./mealGetAll";

interface ReduceObject {
  group: GroupedMeal[]
  dietMealsCount: number
}

export async function mealGetAllGroupedByDate() {
  try {
    const stored = await mealGetAll()

    // Sort stored data by ASC date, so map function will fill group by DESC
    const sortedStored = stored.sort(function(a,b){
      const aDate = new Date(a.date).getTime()
      const aTime = new Date(a.time).getTime()
      const bDate = new Date(b.date).getTime()
      const bTime = new Date(b.time).getTime()

      if (aDate === bDate) {
        return bTime - aTime;
      }
      
      return bDate - aDate;
    });

    // Getting group and all meals that are diet
    const { group: grouped, dietMealsCount } = sortedStored.reduce((red, meal) => {
      const formattedDate = formatDate(meal.date).replaceAll('/', '.')

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

      red.group[index].data.push({
        ...meal,
        date: new Date(meal.date),
        time: new Date(meal.time)
      });

      return red;
    }, <ReduceObject>({group: [], dietMealsCount: 0}));

    // Get diet percentage
    const dietPercentage = dietMealsCount * 100 / stored.length | 0
    const dietFormatted = dietPercentage.toFixed(2).replaceAll('.', ',')

    return {
      data: grouped,
      percentage: {
        value: `${dietFormatted}%`,
        diet: dietPercentage >= 50
      }
    }
  } catch (error) {
    throw error;
  }
}