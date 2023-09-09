export function CalculateStatistics(numberOfDietMeals: number, totalMeals: number) {
  // Get diet percentage
  const percentageOfDietMeals = numberOfDietMeals * 100 / totalMeals | 0
  const dietFormatted = percentageOfDietMeals.toFixed(2).replaceAll('.', ',')

  return {
    value: `${dietFormatted}%`,
    diet: percentageOfDietMeals >= 50
  }
}