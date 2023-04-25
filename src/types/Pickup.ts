import { FoodPicking } from './FoodPicking'

export interface PickupWithItems {
    id: string
    recipientId: string
    entityId: string
    startedAt: string
    endedAt: string
    signed: boolean
    signDate: string
    pickupItems: FoodPicking[]
}

export interface Pickup {
    id: string
    recipientId: string
    entityId: string
    startedAt: string
    endedAt: string
    signed: boolean
    signDate: string
    pickupItems: string[]
}
