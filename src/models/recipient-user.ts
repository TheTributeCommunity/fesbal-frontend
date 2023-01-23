export interface RecipientUser {
  recipientUserId: string
  firstName: string
  lastName: string
  dateOfBirth: string
  typeOfIdentityDocument: string
  identityDocumentNumber: string
  phone: string
  phoneVerified: boolean
  email: string
  recipientsIds: string[]
  referralSheetUrl: string
  role: string
}