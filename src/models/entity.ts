import Notification from '../types/Notification'

export interface Entity {
    id: string,
    entityName: string,
    entityCode: string,
    region: string,
    address: string,
    contactPerson: string,
    email: string,
    phone: string,
    storingCapacity: number,
}

export interface EntityMessages {
    notifications: Notification[]
}

export const mapEntityToOptionLabel = (entity: Entity) => `${entity.entityName} (${entity.region})`