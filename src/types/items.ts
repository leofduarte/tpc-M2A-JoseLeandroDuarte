interface Item {
  id: number;
  name: string;
  completed: boolean;
  toChange?: boolean;
}

export enum FilterType {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed'

}
interface ItemState {
  filter: FilterType;
}

export type { Item, ItemState };