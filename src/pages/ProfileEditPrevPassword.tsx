import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";
import EditPrevPasswordForm from "../components/molecules/ProfileEditNewPasswordForm";

const ProfileEditPrevPassword = () => {
    const {t} = useTranslation(namespaces.pages.profileEditPrevPassword);
    return (
        <AppWrapper title={t("title")} link="/profile">
            <PageHeader description={t("description") as string}/>
            <EditPrevPasswordForm/>
        </AppWrapper>
    );
}

export default ProfileEditPrevPassword;
