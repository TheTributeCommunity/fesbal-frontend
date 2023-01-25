import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import ProfileEditEmailForm from "../components/molecules/ProfileEditEmailForm";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const ProfileEditEmail = () => {
    const {t: translate} = useTranslation(namespaces.pages.profileEditEmail);
    return (
        <AppWrapper link="/profile" title={translate('title')}>
            <div className="flex flex-col self-center w-full h-full">
                <PageHeader description={translate('description') as string}/>
                <ProfileEditEmailForm/>
            </div>
        </AppWrapper>
    );
}

export default ProfileEditEmail;
