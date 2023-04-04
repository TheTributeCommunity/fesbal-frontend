import Entity from './Entity'
import { FoodPicking } from './FoodPicking'
import User from './User'

export default interface Delivery {
    id: number
    recipient: User
    entity: Entity
    deliveryTimestamp: Date
    foodItems: FoodPicking[]
}