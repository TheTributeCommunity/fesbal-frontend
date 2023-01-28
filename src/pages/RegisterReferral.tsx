import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppReferralForm from "../components/molecules/AppReferralForm";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const RegisterReferral = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferral);

    return (
        <AppWrapper title={translate("title")} link="/register/family-members">
            <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <AppPageHeader description={translate("description") as string}/>
                <AppReferralForm link="/register/request-sent" showSublink/>
            </div>
        </AppWrapper>
    );
}

export default RegisterReferral;
