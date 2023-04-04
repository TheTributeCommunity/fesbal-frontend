import { FoodType } from './FoodType'
import { MeasurementUnit } from './MeasurementUnit'

export interface FoodPicking {
    food: FoodType
    unit: MeasurementUnit
    quantity: number
}

export const getPickupItemsDescription = (items: FoodPicking[]) => {
    const itemsStr = items.map(
        item => `${item.quantity} ${item.unit.name.toLowerCase()} de ${item.food.name}`)
        .join(', ')
    return itemsStr
}