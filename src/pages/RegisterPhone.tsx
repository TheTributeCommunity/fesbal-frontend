import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import RegisterPhoneForm from "../components/molecules/RegisterPhoneForm";

const RegisterPhone = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerPhone);

    return (
        <div className="app-page h-screen">
            <PageHeader link="/register/name" title={translate("title")} description={translate("description") as string}/>
            <RegisterPhoneForm/>
        </div>
    );
}

export default RegisterPhone;
