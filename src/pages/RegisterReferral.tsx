import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppReferralForm from "../components/molecules/AppReferralForm";
import AppPageHeader from "../components/molecules/AppPageHeader";

const RegisterReferral = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferral);

    return (
        <div className="app-page h-screen">
            <AppPageHeader title={translate("title")} link="/register/family-members"
                           description={translate("description") as string}/>
            <AppReferralForm link="/register/request-sent" showSublink/>
        </div>
    );
}

export default RegisterReferral;
