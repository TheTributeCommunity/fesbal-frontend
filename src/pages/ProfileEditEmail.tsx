import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import ProfileEditEmailForm from "../components/molecules/ProfileEditEmailForm";
import PageHeader from "../components/molecules/AppPageHeader";


const ProfileEditEmail = () => {
    const {t} = useTranslation(namespaces.pages.profileEditEmail);
    return (
        <div className="app-page h-screen">
            <PageHeader link="/profile" title={t('title')} description={t('description') as string}/>
            <ProfileEditEmailForm/>
        </div>
    );
}

export default ProfileEditEmail;
