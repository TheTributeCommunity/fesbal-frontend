import ValidatePhoneForm from "../components/molecules/ValidatePhoneForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";
import {AppRoute} from "../enums/app-route";

const RegistrationUserName = () => {
    const {t: translate} = useTranslation(namespaces.pages.validatePhone);

    return (
       <AppWrapper link={AppRoute.REGISTER_PHONE} title={translate("headerTitle")}>
           <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <AppPageHeader title={translate("title")} description={translate("description") as string}/>
                <ValidatePhoneForm/>
           </div>
        </AppWrapper>
    );
}

export default RegistrationUserName;
