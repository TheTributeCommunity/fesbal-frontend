interface UserProps {
    id: string;
    password: string;
    email?: string;
    fullName?: string;
    birthDate?: string;
    phone?: string;
    familyMembers?: FamilyMember[];
}

type FamilyMember = {
    FullName: string;
    id: string;
}
export default UserProps;
