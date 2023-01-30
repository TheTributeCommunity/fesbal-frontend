import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import RegisterPhoneForm from "../components/molecules/RegisterPhoneForm";
import AppWrapper from "../components/molecules/AppWrapper";

const RegisterPhone = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerPhone);

    return (
        <AppWrapper  link="/register/name" title={translate("title")}>
            <PageHeader description={translate("description") as string}/>
            <RegisterPhoneForm/>
        </AppWrapper>
    );
}

export default RegisterPhone;
