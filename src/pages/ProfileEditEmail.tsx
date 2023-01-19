import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import ProfileEditEmailForm from "../components/molecules/ProfileEditEmailForm";
import {namespaces} from "../i18n/i18n.constants";


const ProfileEditEmail = () => {
    const {t} = useTranslation(namespaces.pages.profileEditEmail);
    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg text-secondary-color">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3 w-full">
                <AppBackButton goTo="/profile"/>
                <div>
                    <h1 className="mb-4 font-big-title">{t('title')}</h1>
                    <p className="font-text">{t('description')}</p>
                </div>
            </div>
            <ProfileEditEmailForm/>
        </div>
    );
}

export default ProfileEditEmail;
