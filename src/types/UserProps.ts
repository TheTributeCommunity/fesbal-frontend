import FamilyMember from "./FamilyMember";

interface UserProps {
    id: string;
    password: string;
    email?: string;
    fullName?: string;
    birthDate?: string;
    phone?: string;
    familyMembers?: FamilyMember[];
}

export default UserProps;
