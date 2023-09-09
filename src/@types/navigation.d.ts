export type RootList = {
  home: undefined
  statistics: undefined
  meal_edit: {
    mealId?: string
  }
  meal_view: {
    mealId: string
  }
  meal_created: {
    isDiet: boolean
  }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootList {}
  }
}