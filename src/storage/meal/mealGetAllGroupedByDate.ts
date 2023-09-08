import { GroupedMeal } from "@dtos/GroupedMealDTO";

import { mealGetAll } from "./mealGetAll";

export async function mealGetAllGroupedByDate() {
  try {
    const stored = await mealGetAll()

    const grouped = stored.reduce((group: GroupedMeal[], meal) => {
      const formattedDate = meal.date.replaceAll('/', '.')

      let index = group.findIndex(data => data.title === formattedDate)

      if (index === -1) {
        index = group.push({
          title: formattedDate,
          data: []
        }) - 1
      }

      group[index].data.push(meal);
      return group;
    }, []);

    const sorted = grouped.sort(function(a,b){
      const aArray = a.title.split('.')
      const bArray = b.title.split('.')
      const aDate = new Date(`${aArray[2]}-${aArray[1]}-${aArray[0]}`)
      const bDate = new Date(`${bArray[2]}-${bArray[1]}-${bArray[0]}`)

      return bDate.getTime() - aDate.getTime();
    });

    return sorted
  } catch (error) {
    throw error;
  }
}