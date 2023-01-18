interface UserProps {
    id: string;
    password: string;
    email?: string;
    fullName?: string;
    birthDate?: string;
    phone?: string;
    derivationLimit?: Date;
    nextPickup?: Date;
    familyMembers?: FamilyMember[];
}

interface FamilyMember {
    FullName: string;
    id: string;
}

export default UserProps;
