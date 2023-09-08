export type RootList = {
  home: undefined
  statistics: undefined
  meal_edit: {
    mealId?: string
  }
  meal_view: {
    mealId: string
  }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootList {}
  }
}