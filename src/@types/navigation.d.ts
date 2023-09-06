export type RootList = {
  home: undefined
  statistics: undefined
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootList {}
  }
}