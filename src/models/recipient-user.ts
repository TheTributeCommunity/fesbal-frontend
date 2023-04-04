import { Relative } from './relative'

export enum RecipientUserRole {
  UserRegistered = 'UserRegistered',
  UserPending = 'UserPending',
  UserAccepted = 'UserAccepted'
}

export interface RecipientUser {
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
  role?: string
}

export interface RecipientUserWithLastPickup extends RecipientUser {
    lastPickupDate: string
}
