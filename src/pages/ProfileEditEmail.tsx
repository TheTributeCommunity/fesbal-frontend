import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import ProfileEditEmailForm from "../components/molecules/ProfileEditEmailForm";
import {namespaces} from "../i18n/i18n.constants";


const ProfileEditEmail = () => {
    const {t} = useTranslation(namespaces.pages.profileEditEmail);
    return (
        <div className="app-page">
            <div className="app-page__header">
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
