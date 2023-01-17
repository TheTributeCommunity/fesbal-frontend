import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import LoginPasswordRecoveryForm from "../components/molecules/LoginPasswordRecoveryForm";
import {namespaces} from "../i18n/i18n.constants";

export const LoginPasswordRecovery = () => {
    const {t} = useTranslation(namespaces.pages.loginPasswordRecovery);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="mb-4 font-big-title">{t("title")}</h1>
                    <p className="font-text">{t("description")}</p>
                </div>
            </div>
            <LoginPasswordRecoveryForm/>
        </div>
    );
};

export default LoginPasswordRecovery;
