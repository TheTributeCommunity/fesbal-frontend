import {namespaces} from "../i18n/i18n.constants";
import LoginPasswordRecoveryForm from "../components/molecules/LoginPasswordRecoveryForm";
import AppPageHeader from "../components/molecules/AppPageHeader";
import {useTranslation} from "react-i18next";

const LoginPasswordRecovery = () => {
    const {t: translate} = useTranslation(namespaces.pages.loginPasswordRecovery);

    return (
        <div className="app-page h-screen">
            <AppPageHeader link="/login" title={translate("title")} description={translate("description") as string}/>
            <LoginPasswordRecoveryForm/>
        </div>
    );
};

export default LoginPasswordRecovery;
