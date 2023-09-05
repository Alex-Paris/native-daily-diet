export type RootList = {
  home: undefined
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootList {}
  }
}