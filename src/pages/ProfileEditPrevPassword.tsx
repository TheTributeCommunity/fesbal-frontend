import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import ProfileEditPrevPasswordForm from "../components/molecules/ProfileEditPrevPasswordForm";
import {namespaces} from "../i18n/i18n.constants";

const ProfileEditPrevPassword = () => {
    const {t} = useTranslation(namespaces.pages.profileEditPrevPassword);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <AppBackButton goTo="/profile"/>
                <div>
                    <h1 className="mb-4 font-big-title">{t("title")}</h1>
                    <p className="font-text">{t("description")}</p>
                </div>
            </div>
            <ProfileEditPrevPasswordForm/>
        </div>
    );
}

export default ProfileEditPrevPassword;
