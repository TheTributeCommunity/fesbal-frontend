import Notification from '../types/Notification'

export interface Entity {
    id: string,
    entityName: string,
    entityCode: string,
    region: string,
    nextDelivery: string,
    address: string,
    contactPerson: string,
    email: string,
    phone: string,
    storingCapacity: number,
}

export interface EntityMessages {
    notifications: Notification[]
}