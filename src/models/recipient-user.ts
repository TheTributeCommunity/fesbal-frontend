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
  referralSheetUrl?: string
  role?: string
}