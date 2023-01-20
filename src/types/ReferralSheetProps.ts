interface ReferralSheetProps {
    fullname: string;
    uploadDate: Date;
    familyMembers: number;
    expiredDate: Date;
    status: 'approved' | 'pending' | 'expired';
}

export default ReferralSheetProps;
