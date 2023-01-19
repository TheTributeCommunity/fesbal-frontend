import {useTranslation} from "react-i18next";
import ProfileEditPrevPasswordForm from "../components/molecules/ProfileEditPrevPasswordForm";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";

const ProfileEditPrevPassword = () => {
    const {t} = useTranslation(namespaces.pages.profileEditPrevPassword);

    return (
        <div className="app-page h-screen">
            <PageHeader link="/profile" title={t("title")} description={t("description") as string}/>
            <ProfileEditPrevPasswordForm/>
        </div>
    );
}

export default ProfileEditPrevPassword;
