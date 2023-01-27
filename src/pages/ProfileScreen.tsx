import PersonalDataItemProps from "../types/PersonalDataItemProps";
import ProfilePersonalDataItem from "../components/atom/ProfilePersonalDataItem";
import users from "../mocks/users.mock";
import usersMock from "../mocks/users.mock";
import {namespaces} from "../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import FamilyMembersIcon from "../components/icons/FamilyMembersIcon";
import AppWrapper from "../components/molecules/AppWrapper";
import FamilyMemberCard from "../components/atom/FamilyMemberCard";
import useRegisterFamilyMembers from "../hooks/useRegisterFamilyMembers";


const ProfileScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.profileScreen);
    const {user, familyMembers,
        setFamilyMembers, handleNextWithFamilyMembers, handleWithoutFamilyMembers, disableNext} = useRegisterFamilyMembers();
    const getPersonalData = (): PersonalDataItemProps[] => {
        return [
            {
                title: translate('fullName'),
                value: user?.fullName,
            },
            {
                title: translate('id'),
                value: user?.id
            },
            {
                title: translate('birthDate'),
                value: user?.birthDate,
            },
            {
                title: translate('email'),
                value: user?.email,
                hasEditButton: true,
                goTo: `/profile/edit-email`,
            },
            {
                title: translate('phone'),
                value: user?.phone,
            },
            {
                title: translate('password'),
                value: "********",
                hasEditButton: true,
                goTo: `/profile/edit-prev-password`,
            }
        ];
    };

    return (
        <AppWrapper link="/login" title={translate('title')} showBurger>
            <div className="flex w-full flex-col gap-4 mb-2">
                <ul>
                    {getPersonalData().map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-2 pl-2 font-bold mt-8">
                    <FamilyMembersIcon/>
                    <h2 className="font-mini-title">{translate('familyMembers')}</h2>
                </div>
                {familyMembers.map((familyMember, index) => 
                    <div className="flex flex-col gap-4 pb-2">
                        <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('familyMember', {ns: 'pages.registerFamilyMembers'})} {index+1}</span>
                        <FamilyMemberCard person={familyMember} />
                    </div>)}
            </div>
        </AppWrapper>
    );
}

export default ProfileScreen;
