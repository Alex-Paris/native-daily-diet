import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { MealEdit } from '@screens/MealEdit';
import { MealView } from '@screens/MealView';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName='meal_view' screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='meal_edit' component={MealEdit} />
      <Screen name='meal_view' component={MealView} />
    </Navigator>
  )
}