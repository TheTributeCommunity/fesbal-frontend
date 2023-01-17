import AppBackButton from "../components/atom/AppBackButton";
import AppBellButton from "../components/atom/AppBellButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import PersonalDataItemProps from "../types/PersonalDataItemProps";
import ProfilePersonalDataItem from "../components/atom/ProfilePersonalDataItem";
import users from "../mocks/users.mock";
import usersMock from "../mocks/users.mock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserGroup} from "@fortawesome/free-solid-svg-icons";
import {namespaces} from "../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import FamilyMembersIcon from "../components/icons/FamilyMembersIcon";


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
            <div className="app-page__header">
                <div className="flex flex-row items-center justify-between">
                    <AppBackButton goTo="/login"/>
                    <h1 className="text-primary-color font-mini-title">{translate('title')}</h1>
                    <AppBurgerMenuButton/>
                </div>
                <ul>
                    {getPersonalData().map((personalData, index) => (
                        <ProfilePersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-2 pl-2 font-bold">
                    <FamilyMembersIcon/>
                    <h2 className="font-mini-title">{t('familyMembers')}</h2>
                </div>
                <ul className="flex flex-col gap-2 rounded-md bg-white p-4 pl-2 font-input">
                    {getFamilyMembers(user.id) ? getFamilyMembers(user.id)?.map((familyMember, index) => (
                        <li key={index}>{familyMember.FullName}</li>
                    )) : <li>{translate('noFamilyMembers')}</li>}
                </ul>
            </div>
            <nav className="app-bottom-nav">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default ProfileScreen;
