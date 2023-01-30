import {Relative} from "./relative";

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