interface UserProps {
    recipientUserId?: string;
    id?: string;
    password: string;
    email?: string;
    fullName?: string;
    birthDate?: string;
    phone?: string;
    familyMembers?: FamilyMember[];
}

interface FamilyMember {
    FullName: string;
    id: string;
}
export default UserProps;
