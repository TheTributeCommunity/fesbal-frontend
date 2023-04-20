export interface Relative {
    id: string
    recipientUserId: string
    firstName: string
    lastName: string
    dateOfBirth: string
    identityDocumentNumber?: string
    typeOfIdentityDocument?: string
    isDeleted?: boolean
}

export interface RelativeMutate {
    relativeId: string
    recipientUserId: string
    firstName: string
    lastName: string
    dateOfBirth: string
    identityDocumentNumber?: string
    typeOfIdentityDocument?: string
}