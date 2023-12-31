import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootList } from 'src/@types/navigation';

import { Home } from '@screens/Home';
import { MealEdit } from '@screens/MealEdit';
import { MealView } from '@screens/MealView';
import { Statistics } from '@screens/Statistics';
import { MealCreated } from '@screens/MealCreated';

const { Navigator, Screen } = createNativeStackNavigator<RootList>()

export function AppRoutes() {
  return (
    <Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='meal_edit' component={MealEdit} />
      <Screen name='meal_view' component={MealView} />
      <Screen name='meal_created' component={MealCreated} />
    </Navigator>
  )
}