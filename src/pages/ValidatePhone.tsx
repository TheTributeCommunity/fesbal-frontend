import ValidatePhoneForm from "../components/molecules/ValidatePhoneForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const RegistrationUserName = () => {
    const {t: translate} = useTranslation(namespaces.pages.validatePhone);

    return (
       <AppWrapper link="/register" title={translate("headerTitle")}>
            <AppPageHeader title={translate("title")} description={translate("description") as string}/>
            <ValidatePhoneForm/>
        </AppWrapper>
    );
}

export default RegistrationUserName;
