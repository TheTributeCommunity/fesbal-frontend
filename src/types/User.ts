import FamilyMember from './FamilyMember'

interface User {
    recipientUserId?: string
    id: string
    password: string
    email?: string
    fullName?: string
    birthDate?: string
    phone?: string
    derivationLimit?: Date
    nextPickup?: Date
    familyMembers?: FamilyMember[]
}

export default User
