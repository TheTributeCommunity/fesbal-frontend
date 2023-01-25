import {useTranslation} from "react-i18next";
import ProfileEditPrevPasswordForm from "../components/molecules/ProfileEditPrevPasswordForm";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const ProfileEditPrevPassword = () => {
    const {t: translate} = useTranslation(namespaces.pages.profileEditPrevPassword);

    return (
        <AppWrapper title={translate("title")} link="/profile">
            <PageHeader description={translate("description") as string}/>
            <ProfileEditPrevPasswordForm/>
        </AppWrapper>
    );
}

export default ProfileEditPrevPassword;
