import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import LoginPasswordRecoveryForm from "../components/molecules/LoginPasswordRecoveryForm";
import AppPageHeader from "../components/molecules/AppPageHeader";

const LoginPasswordRecovery = () => {
    const {t} = useTranslation(namespaces.pages.loginPasswordRecovery);

    return (
        <div className="app-page h-screen">
            <AppPageHeader link="/login" title={t("title")} description={t("description") as string}/>
            <LoginPasswordRecoveryForm/>
        </div>
    );
};

export default LoginPasswordRecovery;
