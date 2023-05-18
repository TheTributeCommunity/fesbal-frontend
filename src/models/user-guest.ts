export interface UserGuest {
    id: string
    firstName: string
    lastName: string
    dateOfBirth: number
    typeOfIdentityDocument: string
    identityDocumentNumber: string
    phone?: string
}