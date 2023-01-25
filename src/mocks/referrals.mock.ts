import ReferralSheetProps from "../types/ReferralSheetProps";

const referrals: ReferralSheetProps[] = [
    {
    fullname: "Pedro García Salcedo",
    uploadDate: new Date(),
    familyMembers: 5,
    expiredDate: new Date("2023-12-31"),
    status: 'approved'
},
{
    fullname: "Juan Pérez López",
    uploadDate: new Date("2021-05-01"),
    familyMembers: 3,
    expiredDate: new Date("2021-08-31"),
    status: 'expired'
},
{
    fullname: "María Martínez García",
    uploadDate: new Date("2023-01-01"),
    familyMembers: 2,
    expiredDate: new Date("2023-12-25"),
    status: 'pending'
}
];

export default referrals;
