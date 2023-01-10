import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";
import PersonalDataItem from "../components/atom/PersonalDataItem";
import usersMock from "../mocks/users.mock";
import users from "../mocks/users.mock";
import PersonalDataItemProps from "../types/PersonalDataItemProps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserGroup} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";


const ProfileScreen = () => {
    const {t} = useTranslation(namespaces.pages.profileScreen);
    const user = usersMock[0];
    const getFamilyMembers = (id: string) => {
        const user = users.find(user => user.id === id);
        return user?.familyMembers;
    }
    const getPersonalData = (): PersonalDataItemProps[] => {
        return [
            {
                title: t('fullName'),
                value: user.fullName,
            },
            {
                title: t('id'),
                value: user.id
            },
            {
                title: t('birthDate'),
                value: user.birthDate,
            },
            {
                title: t('email'),
                value: user.email,
                hasEditButton: true,
                goTo: `/profile/edit-email`,
            },
            {
                title: t('phone'),
                value: user.phone,
            },
            {
                title: t('password'),
                value: "********",
                hasEditButton: true,
                goTo: `/profile/edit-prev-password`,
            }
        ];
    };

    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row justify-between items-center text-primary-color text-base font-bold">
                    <AppBackButton goTo="/login"/>
                    <h1>{t('title')}</h1>
                    <AppBurgerMenuButton/>
                </div>
                <ul>
                    {getPersonalData().map((personalData, index) => (
                        <PersonalDataItem key={index} personalData={personalData} index={index}/>
                    ))}
                </ul>
                <div className="flex flex-row gap-2 items-center font-bold pl-2">
                    <FontAwesomeIcon icon={faUserGroup} className="text-primary-color"/>
                    <h2>{t('familyMembers')}</h2>
                </div>
                <ul className="flex flex-col gap-2 pl-2 bg-white rounded-md p-4">
                    {getFamilyMembers(user.id) ? getFamilyMembers(user.id)?.map((familyMember, index) => (
                        <li key={index}>{familyMember.FullName}</li>
                    )) : <li>{t('noFamilyMembers')}</li>}
                </ul>
            </div>
            <nav
                className="flex flex-row justify-between items-center self-center w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl p-4 sticky bottom-0">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default ProfileScreen;
