import { Relative } from './relative'
import Notification from '../types/Notification'

export interface Recipient {
    id: string
    firstName: string
    lastName: string
    dateOfBirth: string
    typeOfIdentityDocument: string
    identityDocumentNumber: string
    phone: string
    email?: string
    relativesIds?: string[]
    relatives?: Relative[]
    referralSheetUrl?: string
}

export interface RecipientUserWithLastPickup extends Recipient {
    lastPickupDate: string
}

export interface RecipientMessages {
    pendingSignsIds: string[]
    notifications: Notification[]
}