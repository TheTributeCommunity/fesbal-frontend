import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppReferralForm from "../components/molecules/AppReferralForm";
import AppPageHeader from "../components/molecules/AppPageHeader";

const MenuReferralUpload = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferral);

    return (
        <div className="app-page h-screen">
            <AppPageHeader title={translate("title")} link="/referral"
                           description={translate("description") as string}/>
            <AppReferralForm link="/referral"/>
        </div>
    );
};

export default MenuReferralUpload;
