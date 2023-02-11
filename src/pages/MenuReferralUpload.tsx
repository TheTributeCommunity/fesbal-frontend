import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppReferralForm from "../components/molecules/AppReferralForm";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const MenuReferralUpload = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferral);

    return (
        <AppWrapper title={translate("title")} showBackButton showBurger>
            <div className="flex flex-col gap-4">
                <AppPageHeader 
                            description={translate("description") as string}/>
                <AppReferralForm link="/referral"/>
            </div>
        </AppWrapper>
    );
};

export default MenuReferralUpload;
