import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import RegisterEmailForm from "../components/molecules/RegisterEmailForm";

const RegisterEmail = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerEmail);

    return (
        <div className="app-page h-screen">
            <PageHeader link="/login" title={translate("title")} description={translate("description") as string}/>
            <RegisterEmailForm/>
        </div>
    );
}

export default RegisterEmail;