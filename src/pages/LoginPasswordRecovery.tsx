import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import LoginPasswordRecoveryForm from "../components/molecules/LoginPasswordRecoveryForm";
import {namespaces} from "../i18n/i18n.constants";

export const LoginPasswordRecovery = () => {
    const {t} = useTranslation(namespaces.pages.loginPasswordRecovery);

    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg text-secondary-color">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="mb-4 text-1xl font-big-title">{t("title")}</h1>
                    <p className="font-text">{t("description")}</p>
                </div>
            </div>
            <LoginPasswordRecoveryForm/>
        </div>
    );
};

export default LoginPasswordRecovery;
