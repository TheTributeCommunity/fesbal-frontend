import PersonalDataItemProps from "../types/PersonalDataItemProps";
import ProfilePersonalDataItem from "../components/atom/ProfilePersonalDataItem";
import users from "../mocks/users.mock";
import usersMock from "../mocks/users.mock";
import {namespaces} from "../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import FamilyMembersIcon from "../components/icons/FamilyMembersIcon";
import AppBottomNav from "../components/molecules/AppBottomNav";
import AppPageBurgerHeader from "../components/molecules/AppPageBurgerHeader";


const ProfileScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.profileScreen);
    const user = usersMock[0];
    const getFamilyMembers = (id: string) => {
        const user = users.find(user => user.id === id);
        return user?.familyMembers;
    }
    const getPersonalData = (): PersonalDataItemProps[] => {
        return [
            {
                title: translate('fullName'),
                value: user.fullName,
            },
            {
                title: translate('id'),
                value: user.id
            },
            {
                title: translate('birthDate'),
                value: user.birthDate,
            },
            {
                title: translate('email'),
                value: user.email,
                hasEditButton: true,
                goTo: `/profile/edit-email`,
            },
            {
                title: translate('phone'),
                value: user.phone,
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
        <div className="app-page">
            <AppPageBurgerHeader title={translate('title')} link="/login"/>
            <div className="app-page__container mb-16 gap-6">
                <ul>
                    {getPersonalData().map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-2 pl-2 font-bold mt-4">
                    <FamilyMembersIcon/>
                    <h2 className="font-mini-title">{translate('familyMembers')}</h2>
                </div>
                <ul className="flex flex-col gap-2 rounded-md bg-white p-8 pl-2 font-input">
                    {getFamilyMembers(user.id) ? getFamilyMembers(user.id)?.map((familyMember, index) => (
                        <li key={index}>{familyMember.FullName}</li>
                    )) : <li>{translate('noFamilyMembers')}</li>}
                </ul>
            </div>
            <AppBottomNav/>
        </div>
    );
}

export default ProfileScreen;
