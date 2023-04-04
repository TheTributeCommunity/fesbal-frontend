import { FoodPicking } from './FoodPicking'

export interface Pickup {
  id: number
  entityName: string
  date: string
  title: string
  pickupItems: FoodPicking[]
}

