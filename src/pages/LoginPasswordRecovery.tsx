import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import LoginPasswordRecoveryForm from "../components/molecules/LoginPasswordRecoveryForm";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const LoginPasswordRecovery = () => {
    const {t} = useTranslation(namespaces.pages.loginPasswordRecovery);

    return (
        <AppWrapper link="/login">
            <div className="flex w-full flex-col self-center justify-start">
                <AppPageHeader title={t("title")} description={t("description") as string}/>
                <LoginPasswordRecoveryForm/>
            </div>
        </AppWrapper>
    );
};

export default LoginPasswordRecovery;
