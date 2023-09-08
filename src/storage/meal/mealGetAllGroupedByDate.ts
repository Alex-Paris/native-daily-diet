import { GroupedMeal } from "@dtos/GroupedMealDTO";

import { mealGetAll } from "./mealGetAll";

export async function mealGetAllGroupedByDate() {
  try {
    const stored = await mealGetAll()

    const grouped = stored.reduce((group: GroupedMeal[], meal) => {
      const { date } = meal;
      let index = group.findIndex(data => data.title === date)

      if (index === -1) {
        index = group.push({
          title: date,
          data: []
        }) - 1
      }

      group[index].data.push(meal);
      return group;
    }, []);

    return grouped
  } catch (error) {
    throw error;
  }
}