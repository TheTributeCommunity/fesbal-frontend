import { Recipient } from '../models/recipient-user'
import { Entity } from '../models/entity'
import { FoodPicking } from './FoodPicking'

export interface InflatedPickup {
    id: string
    recipient: Recipient
    entity: Entity
    startedAt: Date
    endedAt: Date
    signed: boolean
    signDate: Date
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