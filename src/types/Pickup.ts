export interface Pickup {
    id: string
    entityId: string
    recipientId: string
    recipientFirstName: string
    recipientLastName: string
    recipientIdentityDocumentNumber: string
    recipientNumberOfRelatives: number
    startedAt: number
    submittedAt: number
    endedAt: number
    signed: boolean
    declined: boolean
    signDate: number
}