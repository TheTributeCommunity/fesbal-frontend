import FamilyMember from "./FamilyMember";

interface UserProps {
    recipientUserId?: string;
    id: string;
    password: string;
    email?: string;
    fullName?: string;
    birthDate?: string;
    phone?: string;
    familyMembers?: FamilyMember[];
    nextPickup?: Date,
    derivationLimit?: Date
}

export default UserProps;
