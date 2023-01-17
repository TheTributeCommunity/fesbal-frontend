import {useTranslation} from "react-i18next";
import EditNewPasswordForm from "../components/molecules/ProfileEditNewPasswordForm";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";

const ProfileEditNewPassword = () => {
    const {t} = useTranslation(namespaces.pages.profileEditNewPassword);
    return (
        <div className="app-page h-screen">
            <PageHeader link="/profile/edit-prev-password" title={t("title")} description={t("description") as string}/>
            <EditNewPasswordForm/>
        </div>
    );
}

export default ProfileEditNewPassword;
