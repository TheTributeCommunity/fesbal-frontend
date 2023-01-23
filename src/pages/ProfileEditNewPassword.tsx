import {useTranslation} from "react-i18next";
import EditNewPasswordForm from "../components/molecules/ProfileEditNewPasswordForm";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const ProfileEditNewPassword = () => {
    const {t} = useTranslation(namespaces.pages.profileEditNewPassword);
    return (
        <AppWrapper title={t("title")} link="/profile/edit-prev-password">
            <PageHeader description={t("description") as string}/>
            <EditNewPasswordForm/>
        </AppWrapper>
    );
}

export default ProfileEditNewPassword;
